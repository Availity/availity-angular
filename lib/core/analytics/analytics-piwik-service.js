(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.provider('avPiwikAnalyticsService', function() {
    var that = this;
    this.config = {
      'customVariables': {
        'visit': [],
        'page': []
      }
    };

    // can not push these items to _paq becuase _paq is not defined
    // this will have to happen after the page has loaded
    this._setCustomVariable = function(index, valueName, value, scope) {
      if(!index || isNaN(index)) {
        throw new Error('index must be a number');
      } else if(!valueName) {
        throw new Error('valueName must be declared');
      } else {
        this.config.customVariables[scope].push([index, valueName, value, scope]);
        // root._paq.push(['setCustomVariable', index, valueName, value, scope]);
      }
    };

    this.setSiteID = function(siteID) {
      this.config.piwikSiteID = siteID;
    };

    // allow the user to pass a array of visit variables
    this.setVisitVariables = function(items) {
      _.forEach(items, function(item) {
        that._setCustomVariable(item[0], item[1], item[2], 'visit');
      });
    };

    this.setPageVariables = function(index, name, value) {
      this._setCustomVariable(index, name, value, 'page');
    };

    this.$get = function(avAnalyticsUtils, avUsersResource, AV_ANALYTICS, $injector, $log, $q, $document, $location, $window) {

      var PiwikAnalyticsService = function() {
        this.init($document[0]);
      };

      var proto = PiwikAnalyticsService.prototype;

      proto.trackEvent = function(properties) {

        if(!root._paq) {
          $log.warn('Piwik object `_paq` not found in global scope');
          return $q.when(false);
        }

        // http://piwik.org/docs/event-tracking/
        //
        // PAQ requires that eventValue be an integer.
        // Check to make sure value is a number if not convert it to 0.
        //
        if(properties.value) {
          properties.value = avAnalyticsUtils.toNum(properties.event);
        }

        // check to make sure that data being sent to piwik is a string and not null, empty or undefined
        if(!avAnalyticsUtils.isValid(properties)) {
          $log.warn('Invalid properties being passed. Tracking info will not be sent.');
          return $q.when(false);
        }

        return $q.when(root._paq.push(['trackEvent', properties.category, properties.event, properties.label, properties.value]));
      };

      proto.trackPageView  = function(url) {

        if(!root._paq) {
          $log.warn('Piwik object `_paq` not found in global scope');
          return $q.when(false);
        }

        return $q.when(root._paq.push(['trackEvent', url]));

      };

      proto.createScript = function() {
        if(isNaN(that.config.piwikSiteID)) {
         return $log.warn('Piwik site ID is not a number. Piwik tracking will be disabled.');
        }

        var url;

        if($location.$$host === 'apps.availity.com') {
          url = AV_ANALYTICS.ENV.PROD.URL;
        } else {
          url = AV_ANALYTICS.ENV.QA.URL;
        }

        $window._paq = $window._paq || [];
        $window._paq.push(['enableLinkTracking']);
        $window._paq.push(['setTrackerUrl', url + 'piwik.php']);
        $window._paq.push(['setSiteId', that.config.piwikSiteID]);
        $window._paq.push(['trackEvent', url]); //track initial page load even if user data is not loaded yet

        var d = document;
        var g = d.createElement('script');
        var s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript';
        g.defer = true;
        g.async = true;
        g.src = url + 'piwik.js';
        s.parentNode.insertBefore(g,s);
      };

      proto.init = function() {
        var self = this;
        this.createScript();
        avUsersResource.me().then(function(user) {
          $window._paq.push(['setUserId', user.id]);
          self.trackPageView(); //send another page track when the user data loads
        });

      };

      return new PiwikAnalyticsService();
    };

  });

})(window);

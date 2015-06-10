(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.provider('avPiwikAnalytics', function() {

    var that = this;
    var siteId;

    // can not push these items to `_paq` because it is defined
    // after page has loaded
    this._setCustomVariable = function(index, valueName, value, scope) {

      root._paq = root._paq || [];

      if(!index || isNaN(index)) {
        throw new Error('index must be a number');
      } else if(!valueName) {
        throw new Error('valueName must be declared');
      } else {
        root._paq.push(['setCustomVariable', index, valueName, value, scope]);
      }
    };

    this.setSiteID = function(_siteID) {
      siteId = _siteID;
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

      var AvPiwikAnalytics = function() {
        this.init();
      };

      var proto = AvPiwikAnalytics.prototype;

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
        if(_.isFinite(siteId)) {
          $log.warn('Invalid Piwik Site Id');
          return;
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
        $window._paq.push(['setSiteId', siteId]);
        $window._paq.push(['trackEvent', url]); //track initial page load even if user data is not loaded yet

        var script = document.createElement('script');
        var target = document.getElementsByTagName('script')[0];
        script.type = 'text/javascript';
        script.defer = true;
        script.async = true;
        script.src = url + 'piwik.js';
        target.parentNode.insertBefore(script, target);
      };

      proto.init = function() {
        this.createScript();
        // avUsersResource.me().then(function(user) {
        //   $window._paq.push(['setUserId', user.id]);
        //   self.trackPageView(); //send another page track when the user data loads
        // });

      };

      return new AvPiwikAnalytics();
    };

  });

})(window);

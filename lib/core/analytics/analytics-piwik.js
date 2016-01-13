(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.provider('avPiwikAnalytics', function() {

    var self;
    var siteId;
    var enabled = false;
    var customVariables = [];

    this.enabled = function(_enabled) {
      enabled = !!_enabled;
    };

    // can not push these items to `_paq` because it is defined
    // after page has loaded
    this._setCustomVariable = function(index, valueName, value, scope) {

      if (!index || isNaN(index)) {
        throw new Error('index must be a number');
      } else if (!valueName) {
        throw new Error('valueName must be declared');
      } else {
        customVariables.push(['setCustomVariable', index, valueName, value, scope]);
      }
    };

    this.setSiteID = function(_siteID) {
      this.enabled(true);
      siteId = _siteID;
    };

    // allow the user to pass a array of visit variables
    this.setVisitVariables = function(items) {
      _.forEach(items, function(item) {
        self._setCustomVariable(item[0], item[1], item[2], 'visit');
      });
    };

    this.setPageVariables = function(index, name, value) {
      this._setCustomVariable(index, name, value, 'page');
    };

    this.$get = function(avAnalyticsUtils, avUsersResource, AV_ANALYTICS, $injector, $log, $q, $document, $location) {

      var AvPiwikAnalytics = function() {
        window._paq = window._paq || [];
      };

      var proto = AvPiwikAnalytics.prototype;

      proto.trackEvent = function(properties) {

        if (!window._paq) {
          $log.warn('Piwik object `_paq` not found in global scope');
          return $q.when(false);
        }

        // http://piwik.org/docs/event-tracking/
        //
        // PAQ requires that eventValue be an integer.
        // Check to make sure value is a number if not convert it to 0.
        //
        if (properties.value) {
          properties.value = avAnalyticsUtils.toNum(properties.event);
        }

        // check to make sure that data being sent to piwik is a string and not null, empty or undefined
        if (!avAnalyticsUtils.isValid(properties)) {
          $log.warn('Invalid properties being passed. Tracking info will not be sent.');
          return $q.when(false);
        }

        return $q.when(window._paq.push(['trackEvent', properties.category, properties.action || properties.event, properties.label, properties.value]));
      };

      proto.trackPageView  = function(url) {

        if (!window._paq) {
          $log.warn('Piwik object `_paq` not found in global scope');
          return $q.when(false);
        }

        return $q.when([
          window._paq.push(['setCustomUrl', url]),
          window._paq.push(['trackPageView', url])]
        );

      };

      proto.init = function() {

        avUsersResource.me().then(function(user) {
          window._paq.push(['setUserId', user.id]);
          // self.trackPageView(); //send another page track when the user data loads
        });

        if (!_.isFinite(siteId)) {
          $log.warn('Invalid Piwik Site Id.  Piwik analytics has been disabled.');
          return;
        }

        var url;

        if ($location.$$host === AV_ANALYTICS.ENV.PROD.DOMAIN) {
          url = AV_ANALYTICS.ENV.PROD.URL;
        } else {
          url = AV_ANALYTICS.ENV.QA.URL;
        }

        window._paq.push(['enableLinkTracking']);
        window._paq.push(['setTrackerUrl', url + 'piwik.php']);
        window._paq.push(['setSiteId', siteId]);

        _.forEach(customVariables, function(variable) {
          window._paq.push(variable);
        });

        $.getScript(url + 'piwik.js', function() {

        });

      };


      proto.isEnabled = function() {
        return enabled && siteId;
      };

      return new AvPiwikAnalytics();
    };

  });

})(window);

(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.provider('avPiwikAnalyticsService', function() {

    this.setVisitVariable = function(index, valueName, value) {
      if(!index || isNaN(index)) {
        throw new Error('index must be a number');
      } else if(!valueName) {
        throw new Error('valueName must be declared');
      } else {
        root._paq.push(['setCustomVariable', index, valueName, value, 'visit']);
      }
    };

    this.$get = function(avAnalyticsUtils, $injector, $log, $q) {

      var PiwikAnalyticsService = function() {};

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

      return new PiwikAnalyticsService();
    };

  });

})(window);

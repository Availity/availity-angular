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
      var PiwikAnalyticService = function() {};

      var proto = PiwikAnalyticService.prototype;
      proto.trackEvent = function(properties) {
        var deferred = $q.defer();

        // PAQ requires that eventValue be an integer, see:
        // http://piwik.org/docs/event-tracking/
        // check to make sure value is a number if not convert it to 0 see link above for reason
        if(properties.value) {
          properties.value = avAnalyticsUtils.checkIsNum(properties.event);
        }

        // check to make sure that data being sent to piwik is a string and not null, empty or undefined
        if(!avAnalyticsUtils.isValid(properties)) {
          deferred.resolve($log.warn('Invalid properties being passed. Tracking info will not be sent.'));
          return deferred.promise;
        }
        // send call off to Piwik to track if the object tracking code is present
        if(root._paq) {
          deferred.resolve(root._paq.push(['trackEvent', properties.category, properties.event, properties.label, properties.value]));
          return deferred.promise;
        }
      };

      proto.trackPageView  = function(url) {
        if(root._paq) {
          var deferred = $q.defer();
          deferred.resolve(root._paq.push(['trackPageView', url]));
          return deferred.promise;
        }
      };

      return new PiwikAnalyticService();
    };


  });

})(window);

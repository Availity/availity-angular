(function(root) {
  'use strict';

  var availity = root.availity;

  var AnalyticsPiwikServiceFactory = function($log, avAnalyticsUtils) {

    var PiwikAnalyticService = function() {};

    var proto = PiwikAnalyticService.prototype;
    proto.trackEvent = function(properties) {
      // PAQ requires that eventValue be an integer, see:
      // http://piwik.org/docs/event-tracking/
      // check to make sure value is a number if not convert it to 0 see link above for reason
      if(properties.value) {
        properties.value = avAnalyticsUtils.checkIsNum(properties.event);
      }

      // check to make sure that data being sent to piwik is a string and not null, empty or undefined
      if(!avAnalyticsUtils.isValid(properties)) {
        $log.info('Piwik not tracking.');
        return;
      }
      // send call off to Piwik to track if the object tracking code is present
      if(root._paq) {
        root._paq.push(['trackEvent', properties.category, properties.event, properties.label, properties.value]);
      }
    };

    proto.trackPageView  = function(url) {
      if(root._paq) {
        root._paq.push(['trackPageView', url]);
      }
    };

    return new PiwikAnalyticService();
  };

  availity.core.factory('PiwikAnalyticService', AnalyticsPiwikServiceFactory);

})(window);

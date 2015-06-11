(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avSplunkAnalytics', function($log, avLogMessagesResource, $location) {

    var SplunkAnalyticsService = function() {};

    var proto = SplunkAnalyticsService.prototype;

    proto.trackEvent = function(properties) {
      properties.url = $location.$$absUrl || 'N/A';
      properties.level = properties.level || 'info';

      return avLogMessagesResource[properties.level](properties);
    };

    proto.trackPageView  = function(url) {

      var properties = {
        event: 'page',
        level: 'info',
        url:url
      };
      return avLogMessagesResource[properties.level](properties);
    };

    return new SplunkAnalyticsService();
  });

})(window);

(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avSplunkAnalyticsService', function($log, avLogMessagesResource, $location) {

    var SplunkAnalyticService = function() {};
    var proto = SplunkAnalyticService.prototype;

    proto.trackEvent = function(properties) {
      properties.url = $location.$$absUrl || 'URL could not be detected';
      return avLogMessagesResource[properties.level](properties);
    };

    proto.trackPageView  = function(url) {
      var properties = {};
      properties.event = 'URL visited';
      properties.level = 'info';
      properties.url = url;
      return avLogMessagesResource[properties.level](properties);
    };

    return new SplunkAnalyticService();
  });

})(window);

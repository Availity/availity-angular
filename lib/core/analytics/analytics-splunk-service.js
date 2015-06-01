(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avSplunkAnalyticsService', function($log, avLogMessagesResource) {

    var SplunkAnalyticService = function() {};
    var proto = SplunkAnalyticService.prototype;

    proto.trackEvent = function(properties) {
      return avLogMessagesResource[properties.level](properties);
    };

    proto.trackPageView  = function(url) {
      var properties = {};
      properties.event = 'URL visited';
      properties.level = 'info';
      properties.url = url;
      return avLogMessagesResource[properties.level](properties);
      // // $log.log('URL visited', url);
    };

    return new SplunkAnalyticService();
  });

})(window);

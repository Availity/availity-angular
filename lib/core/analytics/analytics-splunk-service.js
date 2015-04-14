(function(root) {
  'use strict';

  var availity = root.availity;

  var AnalyticsSplunkServiceFactory = function($log, avLogMessagesResource) {

    var SplunkAnalyticService = function() {};
    var proto = SplunkAnalyticService.prototype;

    proto.trackEvent = function(properties) {
      return avLogMessagesResource[properties.level](properties);
    };

    proto.trackPageView  = function(url) {
      $log.log('URL visited', url);
    };

    return new SplunkAnalyticService();
  };

  availity.core.factory('SplunkAnalyticsService', AnalyticsSplunkServiceFactory);

})(window);

(function(root) {
  'use strict';

  var availity = root.availity;

  var AnalyticsLogServiceFactory = function($log) {

    var AnalyticsLogResource = function() {
      this.trackEvent = function(properties) {
        $log.log('Event tracked', properties);
      };

      this.trackPageView  = function(url) {
        $log.log('URL visited', url);
      };
    };

    return new AnalyticsLogResource();
  };

  availity.core.factory('avAnalyticsLogResource', AnalyticsLogServiceFactory);

})(window);
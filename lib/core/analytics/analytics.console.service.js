define(function(require) {
  "use strict";


  var module = require('foundation/js/av-core/utils/logger/logger.config');

  var AnalyticsSplunkServiceFactory = function($log) {

    var service = {};

    service.trackEvent = function(properties) {
      $log.log("Event tracked", properties);
    };

    service.trackPageView  = function(url) {
      $log.log("URL visited", url);
    };

    return service;
  };

  module.service('analyticsSplunkService', AnalyticsSplunkServiceFactory);

  return module;
});

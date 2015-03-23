define(function(require) {
  "use strict";

  var module = require("foundation/js/av-core/core");
  require('foundation/js/av-core/api/api.log.messages');

  var AnalyticsSplunkServiceFactory = function($log, logMessagesResource) {

    var service = {};

    service.trackEvent = function(properties) {
      return logMessagesResource[properties.level](properties);
    };

    service.trackPageView  = function(url) {
      $log.log("URL visited", url);
    };

    return service;
  };

  module.service('analyticsSplunkService', AnalyticsSplunkServiceFactory);

  return module;
});

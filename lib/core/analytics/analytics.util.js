define(function(require) {
  "use strict";

  var module = require("foundation/js/av-core/core");
  var _ = require('underscore');

  module.constant('ANALYTICS_CONFIG', {
    PRE_FIX: /^avAnalytics(.*)$/,
    // should ignore these since they are part of the directives API
    IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
  });

  var AnalyticsUtilsFactory = function(ANALYTICS_CONFIG) {

    var service = {};

    service.getProperties = function(attributes) {
      var self = this;
      var props = {};

      _.each(attributes, function(value, key) {
        if(self.isValidAttribute(key) && self.isNotIgnored(key)) {
          var result = self.getAttribute(key, value);
          props[result.key] = result.value;
        }
      });

      return props;
    };

    service.isExternalLink = function(attrs) {
      return attrs.href && !attrs.ngClick;
    };

    service.isNotIgnored = function(key) {
      var ignored = _.contains(ANALYTICS_CONFIG.IGNORE, key);
      return !ignored;
    };

    service.isValidAttribute = function(key) {
      return ANALYTICS_CONFIG.PRE_FIX.test(key);
    };

    service.lowercase = function(str) {
      return str.substr(0, 1).toLowerCase() + str.substr(1);
    };

    service.isNotIgnored = function(key) {
      var ignored = _.contains(ANALYTICS_CONFIG.IGNORE, key);
      return !ignored;
    };

    service.getAttribute = function(key, value) {
      var simpleKey = key.match(ANALYTICS_CONFIG.PRE_FIX);
      if(simpleKey && simpleKey[1]) {
        return {
          key: this.lowercase(simpleKey[1]),
          value: value
        };
      }
    };

    return service;
  };

  module.service('analyticsUtils', AnalyticsUtilsFactory);

  return module;
});

(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('ANALYTICS_CONFIG', {
    PRE_FIX: /^avAnalytics(.*)$/,
    // should ignore these since they are part of the directives API
    IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
  });

  var AnalyticsUtilsFactory = function(ANALYTICS_CONFIG) {

    var AnalyticsUtils = function() {};

    var proto = AnalyticsUtils.prototype;

    proto.getProperties = function(attributes) {
      var self = this;
      var props = {};
      _.forEach(attributes, function(value, key) {
        if(self.isValidAttribute(key) && self.isNotIgnored(key)) {
          var result = self.getAttribute(key, value);
          props[result.key] = result.value;
        }
      });

      return props;
    };

    proto.isExternalLink = function(attrs) {
      return attrs.href && !attrs.ngClick;
    };

    proto.isNotIgnored = function(key) {
      var ignored = _.includes(ANALYTICS_CONFIG.IGNORE, key);
      return !ignored;
    };

    proto.isValidAttribute = function(key) {
      return ANALYTICS_CONFIG.PRE_FIX.test(key);
    };

    proto.lowercase = function(str) {
      return str.substr(0, 1).toLowerCase() + str.substr(1);
    };

    proto.isNotIgnored = function(key) {
      var ignored = _.includes(ANALYTICS_CONFIG.IGNORE, key);
      return !ignored;
    };

    proto.getAttribute = function(key, value) {
      var simpleKey = key.match(ANALYTICS_CONFIG.PRE_FIX);
      if(simpleKey && simpleKey[1]) {
        return {
          key: this.lowercase(simpleKey[1]),
          value: value
        };
      }
    };

    return new AnalyticsUtils();
  };

  availity.core.factory('avAnalyticsUtils', AnalyticsUtilsFactory);
})(window);
(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_ANALYTICS_CONFIG', {
    PRE_FIX: /^avAnalytics(.*)$/,
    // should ignore these since they are part of the directives API
    IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
  });

  availity.core.factory('avAnalyticsUtils', function(AV_ANALYTICS_CONFIG, $log) {

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
      var ignored = _.includes(AV_ANALYTICS_CONFIG.IGNORE, key);
      return !ignored;
    };

    proto.isValidAttribute = function(key) {
      return AV_ANALYTICS_CONFIG.PRE_FIX.test(key);
    };

    proto.lowercase = function(str) {
      return str.substr(0, 1).toLowerCase() + str.substr(1);
    };

    proto.getAttribute = function(key, value) {
      var simpleKey = key.match(AV_ANALYTICS_CONFIG.PRE_FIX);

      if(simpleKey && simpleKey[1]) {
        return {
          key: this.lowercase(simpleKey[1]),
          value: value
        };
      }
    };

    proto.checkIsNum = function(value) {
      var parsed = parseInt(value, 10);
      value = isNaN(parsed) ? 0 : parsed;
      return value;
    };

    proto.isValid = function(trackingValues) {
      if(trackingValues.value || trackingValues.value === 0) {
        delete trackingValues.value;
      }
      for(var key in trackingValues) {
        if(availity.isBlank(trackingValues[key]) || trackingValues[key] === undefined) {
          $log.warn('The analytic tracking value for ' + key.toUpperCase() +' is not defined. ' + '\n' + 'http://availity.github.io/availity-uikit/');
          return false;
        }
      }
      return true;
    };

    return new AnalyticsUtils();
  });
})(window);

'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('avAnalyticsUtils', function (avAnalyticsConfig, $log) {
  var AnalyticsUtils = function () {
    function AnalyticsUtils() {
      _classCallCheck(this, AnalyticsUtils);
    }

    AnalyticsUtils.prototype.getProperties = function getProperties(attributes) {

      var self = this;
      var props = {};

      Object.keys(attributes).forEach(function (key) {
        if (self.isValidAttribute(key) && self.isNotIgnored(key)) {
          var result = self.getAttribute(key, attributes[key]);
          props[result.key] = result.value;
        }
      });

      return props;
    };

    // Function detects external links in order to allow the analytics framework to run
    // before the browser follows a link.
    //
    //    - target="_self" - This opens an anchor in the same frame
    //    - target="_parent" - Opens the in the next level up of a frame if they were nested to inside one another
    //    - target="_top" - Opens the link as top document in the browser window
    //    - target="_blank" - Opens link in new tab new tab
    //


    AnalyticsUtils.prototype.isExternalLink = function isExternalLink(attrs) {
      return attrs.href && !attrs.ngClick;
    };

    AnalyticsUtils.prototype.isNotIgnored = function isNotIgnored(key) {
      var ignored = avAnalyticsConfig.IGNORE.indexOf(key) > -1;
      return !ignored;
    };

    AnalyticsUtils.prototype.isValidAttribute = function isValidAttribute(key) {
      return avAnalyticsConfig.PRE_FIX.test(key);
    };

    AnalyticsUtils.prototype.lowercase = function lowercase(str) {
      return str.substr(0, 1).toLowerCase() + str.substr(1);
    };

    AnalyticsUtils.prototype.getAttribute = function getAttribute(key, value) {

      var simpleKey = key.match(avAnalyticsConfig.PRE_FIX);

      if (simpleKey && simpleKey[1]) {
        return {
          key: this.lowercase(simpleKey[1]),
          value: value
        };
      }
    };

    AnalyticsUtils.prototype.toNum = function toNum(value) {
      var parsed = parseInt(value, 10);
      return isNaN(parsed) ? 0 : parsed;
    };

    AnalyticsUtils.prototype.isValid = function isValid(trackingValues) {

      var valid = true;

      if (trackingValues.value || trackingValues.value === 0) {
        delete trackingValues.value;
      }

      Object.keys(trackingValues).forEach(function (key) {
        var value = trackingValues[key];
        if ((0, _utils.isBlank)(value) || _angular2.default.isUndefined(value)) {
          $log.warn('The analytic tracking value for ' + key.toUpperCase() + ' is not defined.');
          valid = false;
        }
      });

      return valid;
    };

    return AnalyticsUtils;
  }();

  return new AnalyticsUtils();
});
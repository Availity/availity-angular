'use strict';

exports.__esModule = true;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONFIG = {
  VIRTUAL_PAGE_TRACKING: true,
  SERVICES: {
    SPLUNK: 'avSplunkAnalytics'
  },
  EVENTS: {
    PAGE: '$locationChangeSuccess',
    DEFAULT: 'click'
  },
  PRE_FIX: /^avAnalytics(.*)$/,
  // should ignore these since they are part of the directives API
  IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
};

var AvAnalyticsConfigProvider = function () {
  function AvAnalyticsConfigProvider() {
    _classCallCheck(this, AvAnalyticsConfigProvider);

    this.options = CONFIG;
  }

  AvAnalyticsConfigProvider.prototype.get = function get() {
    return _angular2.default.copy(this.options);
  };

  AvAnalyticsConfigProvider.prototype.set = function set(options) {
    _lodash2.default.merge(this.options, options);
  };

  AvAnalyticsConfigProvider.prototype.$get = function $get() {
    return _angular2.default.copy(this.options);
  };

  return AvAnalyticsConfigProvider;
}();

_module2.default.provider('avAnalyticsConfig', AvAnalyticsConfigProvider);

exports.default = _module2.default;
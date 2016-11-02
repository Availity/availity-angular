'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('../../core/api/logs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('avSplunkAnalytics', function ($log, avLogMessagesResource, $location) {
  var SplunkAnalyticsService = function () {
    function SplunkAnalyticsService() {
      _classCallCheck(this, SplunkAnalyticsService);
    }

    SplunkAnalyticsService.prototype.trackEvent = function trackEvent(properties) {

      properties.url = $location.$$absUrl || 'N/A';
      properties.level = properties.level || 'info';

      return avLogMessagesResource[properties.level](properties);
    };

    SplunkAnalyticsService.prototype.trackPageView = function trackPageView(url) {

      var properties = {
        event: 'page',
        level: 'info',
        url: url || $location.$$absUrl()
      };

      return avLogMessagesResource[properties.level](properties);
    };

    SplunkAnalyticsService.prototype.isEnabled = function isEnabled() {
      return true;
    };

    return SplunkAnalyticsService;
  }();

  return new SplunkAnalyticsService();
});

exports.default = _module2.default;
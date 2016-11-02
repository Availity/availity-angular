'use strict';

exports.__esModule = true;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _tracekit = require('tracekit');

var _tracekit2 = _interopRequireDefault(_tracekit);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('../api/logs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.constant('AV_EXCEPTIONS', {
  MESSAGES: {
    NOT_APPLICABLE: 'N/A'
  },
  TYPES: {
    EXCEPTION: 'exception'
  },
  REPEAT_LIMIT_TIME: 5000
});

var AvExceptionAnalyticsProvider = function () {
  function AvExceptionAnalyticsProvider() {
    _classCallCheck(this, AvExceptionAnalyticsProvider);

    this._enabled = true;
    this.appId;
  }

  AvExceptionAnalyticsProvider.prototype.enabled = function enabled(_enabled) {
    this._enabled = !!_enabled;
  };

  AvExceptionAnalyticsProvider.prototype.setAppId = function setAppId(_id) {
    this.appId = _id;
  };

  AvExceptionAnalyticsProvider.prototype.$get = function $get($location, AV_EXCEPTIONS, $injector) {

    var that = this;

    var AvExceptionAnalytics = function () {
      function AvExceptionAnalytics() {
        _classCallCheck(this, AvExceptionAnalytics);
      }

      AvExceptionAnalytics.prototype.init = function init() {

        var self = this;

        if (!that._enabled) {
          return;
        }

        _tracekit2.default.remoteFetching = false;
        _tracekit2.default.surroundingLinesToCollect = 11;

        // subscribe() hooks into window.error
        _tracekit2.default.report.subscribe(function (stacktrace) {
          self.onError(stacktrace);
        });

        this.messageTimestampMap = {};
      };

      AvExceptionAnalytics.prototype.prettyPrint = function prettyPrint(stacktrace) {

        var message = '';

        var length = stacktrace.stack.length;

        for (var i = 0; i < length; i++) {
          message += ['[' + i.toString().padStart(2, '0') + '] ', stacktrace.stack[i].func, ' ', stacktrace.stack[i].url, ':', stacktrace.stack[i].line, ':', stacktrace.stack[i].column, i + 1 < length ? '\n' : ''].join('');
        }

        return message;
      };

      AvExceptionAnalytics.prototype.onError = function onError(stacktrace) {

        var userAgent = window.navigator && window.navigator.userAgent ? window.navigator.userAgent : AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE;

        var message = {
          errorDate: (0, _moment2.default)(new Date()).format('YYYY-MM-DDTHH:mm:ssZZ'),
          errorName: stacktrace.name,
          errorMessage: stacktrace.message,
          errorStack: this.prettyPrint(stacktrace),
          url: $location.$$absUrl,
          appId: that.appId || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
          appVersion: APP_VERSION || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
          userAgent: userAgent,
          userLanguage: navigator.userLanguage,
          referrer: document.referrer,
          host: document.domain,
          screenWidth: (0, _jquery2.default)(window).width(),
          screenHeight: (0, _jquery2.default)(window).height(),
          sdkVersion: process.env.VERSION
        };

        return this.log(message);
      };

      AvExceptionAnalytics.prototype.log = function log(message) {
        var avLogMessagesResource = $injector.get('avLogMessagesResource');
        return avLogMessagesResource.error(message);
      };

      AvExceptionAnalytics.prototype.trackEvent = function trackEvent(exception) {

        if (!that._enabled) {
          return null;
        }

        // If we've already logged this error recently, don't log it again (no need to spam the API)
        if (this._isRepeatError(exception)) {
          return;
        }

        var stacktrace = _tracekit2.default.computeStackTrace(exception);

        return this.onError(stacktrace);
      };

      // Check to see if this error was reported within the last 5 seconds


      AvExceptionAnalytics.prototype._isRepeatError = function _isRepeatError(exception) {
        var timestamp = (0, _moment2.default)();
        var message = exception.message;
        var lastTimestamp = this.messageTimestampMap[message];
        var isRepeat = false;

        if (lastTimestamp && timestamp.diff(lastTimestamp) < AV_EXCEPTIONS.REPEAT_LIMIT_TIME) {
          isRepeat = true;
        }

        this.messageTimestampMap[message] = timestamp;
        return isRepeat;
      };

      return AvExceptionAnalytics;
    }();

    return new AvExceptionAnalytics();
  };

  return AvExceptionAnalyticsProvider;
}();

_module2.default.provider('avExceptionAnalytics', AvExceptionAnalyticsProvider);

_module2.default.config(function ($provide) {

  $provide.decorator('$exceptionHandler', function ($delegate, $injector) {

    return function (exception, cause) {
      $delegate(exception, cause);
      var errorTacking = $injector.get('avExceptionAnalytics');
      errorTacking.trackEvent(exception);
    };
  });
});

_module2.default.run(function (avExceptionAnalytics) {
  return avExceptionAnalytics.init();
});

exports.default = _module2.default;
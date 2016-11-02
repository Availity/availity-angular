'use strict';

exports.__esModule = true;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

require('./config-provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvAnalyticsProvider = function (_Base) {
  _inherits(AvAnalyticsProvider, _Base);

  function AvAnalyticsProvider() {
    _classCallCheck(this, AvAnalyticsProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.plugins = [];
    _this.virtualPageTracking = _this.av.avAnalyticsConfigProvider.get().VIRTUAL_PAGE_TRACKING;
    _this.appId;
    _this.plugins;

    return _this;
  }

  AvAnalyticsProvider.prototype.registerPlugins = function registerPlugins(_plugins) {

    if (_angular2.default.isString(_plugins)) {
      this.plugins = [_plugins];
    } else if (Array.isArray(_plugins)) {
      this.plugins = _plugins;
    } else {
      throw new Error('AvAnalytics.registerPlugins() expects a string or an array.');
    }

    return this.plugins;
  };

  AvAnalyticsProvider.prototype.setVirtualPageTracking = function setVirtualPageTracking(value) {
    if (arguments.length) {
      this.virtualPageTracking = !!value;
    }
  };

  AvAnalyticsProvider.prototype.isVirtualPageTracking = function isVirtualPageTracking() {
    return this.virtualPageTracking;
  };

  AvAnalyticsProvider.prototype.setAppID = function setAppID(id) {
    this.appId = id;
    return this.appId;
  };

  AvAnalyticsProvider.prototype.$get = function $get($injector, $q, $log, $rootScope, $location, avAnalyticsConfig) {

    var self = this;

    var AvAnalytics = function () {
      function AvAnalytics() {
        var _this2 = this;

        _classCallCheck(this, AvAnalytics);

        this.services = {};

        if (!self.plugins || self.plugins.length === 0) {
          self.plugins = [avAnalyticsConfig.SERVICES.SPLUNK];
        }

        _angular2.default.forEach(self.plugins, function (plugin) {

          try {
            _this2.services[plugin] = $injector.get(plugin);
          } catch (err) {
            $log.error('Could not load ' + plugin + ' plugin');
          }
        });
      }

      AvAnalytics.prototype.init = function init() {
        var _this3 = this;

        if (this.isVirtualPageTracking()) {

          $rootScope.$on(avAnalyticsConfig.EVENTS.PAGE, function () {
            _this3.trackPageView($location.absUrl());
          });
        }

        _angular2.default.forEach(this.services, function (handler) {

          if (handler.isEnabled() && handler.init) {
            handler.init();
          }
        });
      };

      AvAnalytics.prototype.trackEvent = function trackEvent(properties) {

        var promises = [];

        _angular2.default.forEach(this.services, function (handler) {
          var promise = handler.trackEvent(properties);
          promises.push(promise);
        });

        return $q.all(promises);
      };

      AvAnalytics.prototype.getAppId = function getAppId() {
        return self.appId;
      };

      AvAnalytics.prototype.isVirtualPageTracking = function isVirtualPageTracking() {
        return self.virtualPageTracking;
      };

      AvAnalytics.prototype.trackPageView = function trackPageView(url) {

        var promises = [];

        _angular2.default.forEach(this.services, function (handler) {
          var promise = handler.trackPageView(url);
          promises.push(promise);
        });

        return $q.all(promises);
      };

      return AvAnalytics;
    }();

    return new AvAnalytics();
  };

  return AvAnalyticsProvider;
}(_base2.default);

AvAnalyticsProvider.$inject = ['avAnalyticsConfigProvider'];


_module2.default.provider('avAnalytics', AvAnalyticsProvider);

exports.default = _module2.default;
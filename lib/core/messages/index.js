'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/kylewelsby/angular-post-message/blob/master/src/angular-post-message.js
var AvMessageProvider = function () {
  function AvMessageProvider() {
    _classCallCheck(this, AvMessageProvider);

    this.enabled = true;
  }

  AvMessageProvider.prototype.enable = function enable(value) {

    if (arguments.length) {
      this.enabled = !!value;
    }

    return this.enabled;
  };

  AvMessageProvider.prototype.$get = function $get($rootScope, $log, AV_MESSAGES) {

    var that = this;

    var AvMessages = function () {
      function AvMessages() {
        var _this = this;

        _classCallCheck(this, AvMessages);

        this.onResize = _.debounce(function () {

          var height = (0, _jquery2.default)('html').height();
          _this.send({
            event: AV_MESSAGES.EVENTS.AV_RESIZE,
            height: height
          });
        }, AV_MESSAGES.RESIZE_DEBOUNCE);
      }

      AvMessages.prototype.init = function init() {

        var $window = (0, _jquery2.default)(window);

        $window.on(AV_MESSAGES.EVENTS.MESSAGE, this.onMessage.bind(this));

        $window.on(AV_MESSAGES.EVENTS.RESIZE, this.onResize.bind(this));

        $window.on(AV_MESSAGES.EVENTS.UNLOAD, this.onUnload.bind(this));

        $rootScope.$on('$destroy', this.destroy.bind(this));
      };

      AvMessages.prototype.destroy = function destroy() {

        (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.MESSAGE);
        (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.RESIZE);
        (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.UNLOAD);
      };

      AvMessages.prototype.onUnload = function onUnload() {

        this.send({
          event: AV_MESSAGES.EVENTS.UNLOAD
        });
      };

      AvMessages.prototype.isDomain = function isDomain(url) {

        if (AV_MESSAGES.DOMAIN.test(this.domain())) {
          return AV_MESSAGES.DOMAIN.test(url);
        }

        return AV_MESSAGES.LOCAL.test(url);
      };

      AvMessages.prototype.isEnabled = function isEnabled() {
        return that.enabled;
      };

      AvMessages.prototype.onMessage = function onMessage(_event) {

        var event = _event;

        event = event.originalEvent || event; // jQuery wraps in `originalEvent`

        if (!event && !event.data) {
          // no op
          return;
        }

        // don't process messages emitted from same window
        if (event.source === window) {
          return;
        }

        if (!this.isDomain(event.origin)) {
          $log.warn('avMessages rejected a cross domain message since it does not match an *.availity.com  or localhost');
          return;
        }

        var data = event.data;

        try {
          data = _angular2.default.fromJson(data);
        } catch (err) {
          $log.warn('avMessages.onMessage() failed to convert event to json payload');
        }

        if (_angular2.default.isString(data)) {
          event = data;
          data = null;
        } else {
          event = data.event ? data.event : AV_MESSAGES.AV_RECEIVED;
        }

        $rootScope.$root.$broadcast(event, data);
      };

      AvMessages.prototype.isIframe = function isIframe() {
        return window.self !== window.parent;
      };

      AvMessages.prototype.domain = function domain() {

        if (window.location.origin) {
          return window.location.origin;
        }

        if (window.location.hostname) {
          return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }

        return '*';
      };

      AvMessages.prototype.send = function send(payload) {

        try {

          var message = _.isString(payload) ? payload : JSON.stringify(payload);
          this.postMessage(message, this.domain());
        } catch (err) {
          $log.error('avMessages.send() ', err);
        }
      };

      AvMessages.prototype.postMessage = function postMessage(message, domain) {
        window.parent.postMessage(message, domain);
      };

      return AvMessages;
    }();

    return new AvMessages();
  };

  return AvMessageProvider;
}();

_module2.default.provider('avMessages', AvMessageProvider);

_module2.default.run(function (avMessages) {

  if (avMessages.isEnabled()) {
    avMessages.init();
  }
});
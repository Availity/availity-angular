'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./resource');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogMessagesProvider = function () {
  function LogMessagesProvider() {
    _classCallCheck(this, LogMessagesProvider);
  }

  LogMessagesProvider.prototype.$get = function $get(AvApiResource) {
    var AvLogMessagesResource = function (_AvApiResource) {
      _inherits(AvLogMessagesResource, _AvApiResource);

      function AvLogMessagesResource() {
        _classCallCheck(this, AvLogMessagesResource);

        return _possibleConstructorReturn(this, _AvApiResource.call(this, {
          version: '/v1',
          name: '/log-messages'
        }));
      }

      AvLogMessagesResource.prototype.request = function request(level, entries) {

        var requestPayload = {};

        if (entries.level) {
          delete entries.level;
        }

        requestPayload.level = level;
        requestPayload.entries = entries;

        return requestPayload;
      };

      AvLogMessagesResource.prototype.debug = function debug(entries) {
        return this.create(this.request('debug', entries));
      };

      AvLogMessagesResource.prototype.info = function info(entries) {
        return this.create(this.request('info', entries));
      };

      AvLogMessagesResource.prototype.warn = function warn(entries) {
        return this.create(this.request('warn', entries));
      };

      AvLogMessagesResource.prototype.error = function error(entries) {
        return this.create(this.request('error', entries));
      };

      return AvLogMessagesResource;
    }(AvApiResource);

    return new AvLogMessagesResource();
  };

  return LogMessagesProvider;
}();

_module2.default.provider('avLogMessagesResource', LogMessagesProvider);

exports.default = _module2.default;
'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

require('../../core/analytics/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvAnalyticsController = function (_Base) {
  _inherits(AvAnalyticsController, _Base);

  function AvAnalyticsController() {
    _classCallCheck(this, AvAnalyticsController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
  }

  AvAnalyticsController.prototype.onEvent = function onEvent(event, element, options) {
    var _this2 = this;

    var properties = _angular2.default.extend({
      level: 'info',
      label: element.text()
    }, {
      event: event.type
    }, options);

    if (this.av.avAnalyticsUtils.isExternalLink(properties)) {
      event.preventDefault();
      event.stopPropagation();
    }

    var promise = this.av.avAnalytics.trackEvent(properties);
    promise.finally(function () {
      if (_this2.av.avAnalyticsUtils.isExternalLink(properties)) {
        document.location = element.attr('href');
      }
    });
  };

  return AvAnalyticsController;
}(_base2.default);

AvAnalyticsController.$inject = ['avAnalyticsUtils', 'avAnalytics'];


_module2.default.controller('AvAnalyticsController', AvAnalyticsController);
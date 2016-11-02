'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONFIG = {
  animationConfig: {
    duration: 250
  },
  showAnimation: 'transition.fadeIn',
  showEvent: 'mouseenter',
  hideAnimation: 'transition.fadeOut',
  hideEvent: 'mouseleave',
  overlaySelector: '.dimmer-content'
};

var AvDimmerConfig = function () {
  function AvDimmerConfig() {
    _classCallCheck(this, AvDimmerConfig);

    this.options = CONFIG;
  }

  AvDimmerConfig.prototype.get = function get() {
    return _angular2.default.copy(this.options);
  };

  AvDimmerConfig.prototype.set = function set(options) {
    _angular2.default.extend(this.options, options);
  };

  AvDimmerConfig.prototype.$get = function $get() {
    return _angular2.default.copy(this.options);
  };

  return AvDimmerConfig;
}();

_module2.default.provider('avDimmerConfig', AvDimmerConfig);

exports.default = _module2.default;
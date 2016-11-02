'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
  showDelay: 10000
};

var AvTooltipConfig = function () {
  function AvTooltipConfig() {
    _classCallCheck(this, AvTooltipConfig);
  }

  AvTooltipConfig.prototype.set = function set(options) {
    _extends(config, options);
  };

  AvTooltipConfig.prototype.$get = function $get() {
    return _extends({}, config);
  };

  return AvTooltipConfig;
}();

_module2.default.provider('avTooltipConfig', AvTooltipConfig);
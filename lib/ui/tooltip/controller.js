'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvTooltipController = function () {
  function AvTooltipController($element, $scope, AV_TOOLTIP, $timeout, avTooltipConfig) {
    _classCallCheck(this, AvTooltipController);

    this.di = { $element: $element, $scope: $scope, AV_TOOLTIP: AV_TOOLTIP, $timeout: $timeout };
    this.options = _extends({}, avTooltipConfig);
  }

  AvTooltipController.prototype.listeners = function listeners() {
    var _this = this;

    ['show', 'shown', 'hide', 'hidden'].forEach(function (name) {
      _this.di.$element.on(name + '.bs.tooltip', function (ev) {
        return _this.di.$scope.$emit('av:tooltip:' + name, ev);
      });
    });

    this.di.$scope.$on('$destroy', this.destroy.bind(this));
  };

  AvTooltipController.prototype.plugin = function plugin() {
    return this.di.$element.data(this.di.AV_TOOLTIP.NAME);
  };

  AvTooltipController.prototype.show = function show() {
    this.di.$element.tooltip('show');
  };

  AvTooltipController.prototype.hide = function hide() {
    this.di.$element.tooltip('hide');
  };

  AvTooltipController.prototype.toggle = function toggle() {
    this.di.$element.tooltip('toggle');
  };

  AvTooltipController.prototype.destroy = function destroy() {
    this.di.$element.tooltip('destroy');
  };

  AvTooltipController.prototype.init = function init() {
    this.listeners();

    if (this.di.$scope.show) {

      // give the UI a chance to settle first.
      this.di.$timeout(this.show.bind(this), 0, false);

      if (this.di.$scope.delay && this.di.$scope.delay.hide) {
        this.di.$timeout(this.hide.bind(this), this.di.$scope.delay.hide, false);
        return;
      }

      // If no delay is found or cannot be parsed, set a default timeout so that the tooltip doesn't stick around forever
      this.di.$timeout(this.hide.bind(this), this.options.showDelay, false);
    }
  };

  return AvTooltipController;
}();

_module2.default.controller('AvTooltipController', AvTooltipController);
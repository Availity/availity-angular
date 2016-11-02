'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvPopoverController = function () {
  function AvPopoverController($element, $scope, AV_POPOVER, $timeout, avPopoverConfig) {
    _classCallCheck(this, AvPopoverController);

    this.di = { $element: $element, $scope: $scope, AV_POPOVER: AV_POPOVER, $timeout: $timeout };
    this.options = _extends({}, avPopoverConfig);
  }

  AvPopoverController.prototype.listeners = function listeners() {
    var _this = this;

    ['show', 'shown', 'hide', 'hidden'].forEach(function (name) {
      _this.di.$element.on(name + '.bs.popover', function (ev) {
        return _this.di.$scope.$emit('av:popover:' + name, ev);
      });
    });

    this.di.$scope.$on('$destroy', this.destroy.bind(this));
  };

  AvPopoverController.prototype.plugin = function plugin() {
    return this.di.$element.data(this.di.AV_POPOVER.NAME);
  };

  AvPopoverController.prototype.show = function show() {
    this.di.$element.popover('show');
  };

  AvPopoverController.prototype.hide = function hide() {
    this.di.$element.popover('hide');
  };

  AvPopoverController.prototype.toggle = function toggle() {
    this.di.$element.popover('toggle');
  };

  AvPopoverController.prototype.destroy = function destroy() {
    this.di.$element.popover('destroy');
  };

  AvPopoverController.prototype.init = function init() {
    this.listeners();

    if (this.di.$scope.show) {

      // give the UI a chance to settle first.
      this.di.$timeout(this.show.bind(this), 0, false);

      if (this.di.$scope.delay && this.di.$scope.delay.hide) {
        this.di.$timeout(this.hide.bind(this), this.di.$scope.delay.hide, false);
        return;
      }

      // If no delay is found or cannot be parsed, set a default timeout so that the popover doesn't stick around forever
      this.di.$timeout(this.hide.bind(this), this.options.showDelay, false);
    }
  };

  return AvPopoverController;
}();

_module2.default.controller('AvPopoverController', AvPopoverController);
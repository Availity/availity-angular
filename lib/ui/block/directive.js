'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _utils = require('./utils');

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Inspiration from https://github.com/McNull/angular-block-ui.
//
//  - Need npm compatible library
//  - Re-factor with better life-cycle hooks for starting and stopping animations

var BlockController = function (_Base) {
  _inherits(BlockController, _Base);

  function BlockController() {
    _classCallCheck(this, BlockController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Expose the blockMessageClass attribute value on the scope
    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.av.$attrs.$observe('blockMessageClass', function (value) {
      _this.av.$scope.$_blockMessageClass = value;
    });

    // Create the block instance
    // Prefix underscore to prevent integers:
    // https://github.com/McNull/angular-block-ui/pull/8

    _this.instanceId = _this.av.$attrs.avBlock || '_' + _this.av.$scope.$id;
    _this.serviceInstance = _this.av.avBlockManager.get(_this.instanceId);

    // Locate the parent block instance
    var parentInstance = _this.av.$element.inheritedData('av-block');

    if (parentInstance) {
      _this.serviceInstance._parent = parentInstance;
    }

    // Expose the state on the scope
    _this.av.$scope.$_blockState = _this.serviceInstance.state();

    _this.av.$scope.$watch('$_blockState.blocking', function (value) {
      // Set the aria-busy attribute if needed
      _this.av.$element.attr('aria-busy', !!value);
      _this.av.$element.toggleClass('av-block-visible', !!value);
    });

    _this.av.$scope.$watch('$_blockState.blockCount > 0', function (value) {
      _this.av.$element.toggleClass('av-block-active', !!value);
    });

    // If a pattern is provided assign it to the state
    var pattern = _this.av.$attrs.blockPattern;

    if (pattern) {
      var regExp = (0, _utils.buildRegExp)(pattern);
      _this.serviceInstance.pattern(regExp);
    }

    // Store a reference to the service instance on the element

    _this.av.$element.data('av-block', _this.serviceInstance);

    return _this;
  }

  BlockController.prototype.moduleLoaded = function moduleLoaded(name) {

    try {
      _angular2.default.module(name);
    } catch (ex) {
      return false;
    }

    return true;
  };

  BlockController.prototype.registerLocationChange = function registerLocationChange() {

    this.av.$scope.$on('$locationChangeStart', function (event) {

      if (this.serviceInstance.$_blockLocationChange && this.serviceInstance.state().blockCount > 0) {
        event.preventDefault();
      }
    });

    this.av.$scope.$on('$locationChangeSuccess', function () {
      this.serviceInstance.$_blockLocationChange = this.serviceInstance.blockBrowserNavigation;
    });
  };

  BlockController.prototype.blockNavigation = function blockNavigation() {
    var _this2 = this;

    if (this.av.avBlockConfig.blockBrowserNavigation) {

      if (this.moduleLoaded('ngRoute')) {
        (function () {

          // After the initial content has been loaded we'll spy on any location
          // changes and discard them when needed.
          //
          var fn = _this2.av.$scope.$on('$viewContentLoaded', function () {

            // Unhook the view loaded and hook a function that will prevent
            // location changes while the block is active.

            fn();
            _this2.registerLocationChange();
          });
        })();
      } else {
        this.registerLocationChange();
      }
    }
  };

  // Ensure the instance is released when the scope is destroyed


  BlockController.prototype.$destroy = function $destroy() {
    this.serviceInstance.release();
    this.av.$element.data('av-block', null);
  };

  BlockController.prototype.$postLink = function $postLink() {

    this.container = this.av.$compile('<av-block-container class="av-block-container"></av-block-container >')(this.av.$scope);
    this.av.$element.append(this.container);

    // If the element does not have the class 'av-block' set, we set the
    // default css classes from the config.

    if (!this.av.$element.hasClass('av-block')) {
      this.av.$element.addClass(this.av.avBlockConfig.cssClass);
    }
  };

  return BlockController;
}(_base2.default);

BlockController.$inject = ['$element', 'avBlockManager', 'avBlockConfig', '$attrs', '$scope', '$compile'];


_module2.default.directive('avBlock', function () {
  return {
    scope: {},
    restrict: 'AE',
    controller: BlockController
  };
});
'use strict';

exports.__esModule = true;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvDimmerController = function (_Base) {
  _inherits(AvDimmerController, _Base);

  function AvDimmerController() {
    _classCallCheck(this, AvDimmerController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.config = _angular2.default.extend({}, _this.av.avDimmerConfig, _this.av.$scope.avDimmerConfig || {});
    return _this;
  }

  AvDimmerController.prototype.show = function show() {
    this.av.$element.find(this.config.overlaySelector).velocity('stop', true).velocity(this.config.showAnimation, this.config.animationConfig);
  };

  AvDimmerController.prototype.hide = function hide() {
    this.av.$element.find(this.config.overlaySelector).velocity(this.config.hideAnimation, this.config.animationConfig);
  };

  AvDimmerController.prototype.createListeners = function createListeners() {
    this.av.$element.on(this.config.showEvent, this.show.bind(this));
    this.av.$element.on(this.config.hideEvent, this.hide.bind(this));
  };

  AvDimmerController.prototype.destroyListeners = function destroyListeners() {
    this.av.$element.off(this.config.showEvent, this.show.bind(this));
    this.av.$element.off(this.config.hideEvent, this.hide.bind(this));
  };

  AvDimmerController.prototype.$onChanges = function $onChanges(changesObj) {
    if (changesObj && changesObj.avDimmerConfig) {
      var newConfig = _angular2.default.extend({}, this.av.avDimmerConfig, changesObj.avDimmerConfig.currentValue);

      var resetListeners = !_angular2.default.equals(this.config.showEvent, newConfig.showEvent) || !_angular2.default.equals(this.config.hideEvent, newConfig.hideEvent);

      if (resetListeners) {
        this.destroyListeners();
      }

      this.config = newConfig;

      if (resetListeners) {
        this.createListeners();
      }
    }
  };

  AvDimmerController.prototype.$onInit = function $onInit() {
    this.createListeners();
  };

  AvDimmerController.prototype.$destroy = function $destroy() {
    this.destroyListeners();
  };

  return AvDimmerController;
}(_base2.default);

AvDimmerController.$inject = ['$scope', '$element', 'avDimmerConfig'];
exports.default = AvDimmerController;
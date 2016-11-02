'use strict';

exports.__esModule = true;

require('velocity-animate');

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

var _base = require('../../base');

var _base2 = _interopRequireDefault(_base);

var _module = require('../../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvLoaderController = function (_Base) {
  _inherits(AvLoaderController, _Base);

  function AvLoaderController() {
    _classCallCheck(this, AvLoaderController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.endAnimation = function () {
      this.av.$element.find('.loading-bullet').velocity('stop', true);
      this.av.$element.removeData();
    };

    _this.active = false;
    return _this;
  }

  AvLoaderController.prototype.start = function start() {
    this.active = true;
    this.animate();
  };

  AvLoaderController.prototype.animate = function animate() {

    var self = this;

    this.av.$element.find('.loading-bullet').velocity('transition.slideRightIn', { stagger: 250 }).velocity({ opacity: 0 }, {
      delay: 750,
      duration: 500,
      complete: function complete() {
        if (self.active) {
          setTimeout(function () {
            self.animate();
          }, 500);
        } else {
          self.endAnimation();
        }
      }
    });
  };

  AvLoaderController.prototype.$destroy = function $destroy() {
    this.active = false;
  };

  AvLoaderController.prototype.$postLink = function $postLink() {
    this.start();
  };

  return AvLoaderController;
}(_base2.default);

AvLoaderController.$inject = ['$element'];


_module2.default.directive('avLoader', function () {
  return {
    restrict: 'AE',
    replace: true,
    controller: AvLoaderController,
    templateUrl: _template2.default
  };
});

exports.default = _module2.default;
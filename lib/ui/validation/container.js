'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvValContainerController = function (_Base) {
  _inherits(AvValContainerController, _Base);

  function AvValContainerController() {
    _classCallCheck(this, AvValContainerController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
  }

  AvValContainerController.prototype.message = function message(context) {
    var _this2 = this;

    var ngModel = context.ngModel;


    var message = null;
    var violations = Object.keys(ngModel.$error);
    if (violations.length) {
      var validator = violations[0];
      var constraint = ngModel.$validators[validator] && ngModel.$validators[validator].constraint;
      if (constraint) {
        message = constraint.message;
      } else {
        message = this.av.AV_UI.FALLBACK_VALIDATION_MESSAGE;
      }
    } else {
      message = null;
    }

    // $timeout is needed to update the UI from $broadcast events
    this.av.$timeout(function () {
      _this2.av.$scope.vm.message = _this2.av.$sce.trustAsHtml(message);
    });
  };

  return AvValContainerController;
}(_base2.default);

AvValContainerController.$inject = ['$sce', '$scope', '$timeout', 'AV_UI'];


_module2.default.directive('avValContainer', function () {
  return {
    restrict: 'A',
    controller: AvValContainerController,
    template: '<p class="help-block" data-ng-bind-html="vm.message"></p>',
    replace: true,
    scope: {},

    link: function link(scope) {
      scope.vm = { message: null, id: null };
    }
  };
});
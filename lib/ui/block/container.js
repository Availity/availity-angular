'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvBlockContainerDirective = function (_Base) {
  _inherits(AvBlockContainerDirective, _Base);

  function AvBlockContainerDirective() {
    _classCallCheck(this, AvBlockContainerDirective);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.scope = true;
    _this.restrict = 'AE';

    _this.templateUrl = _this.av.avBlockConfig.templateUrl;

    return _this;
  }

  AvBlockContainerDirective.prototype.controller = function controller($scope, $element) {

    var service = $element.inheritedData('av-block');

    if (!service) {
      throw new Error('No parent av-block service instance located.');
    }

    // add state to scope of this directive
    $scope.state = service.state();
  };

  return AvBlockContainerDirective;
}(_base2.default);

AvBlockContainerDirective.$inject = ['avBlockConfig'];


_module2.default.directive('avBlockContainer', function (avBlockConfig) {
  return new AvBlockContainerDirective(avBlockConfig);
});
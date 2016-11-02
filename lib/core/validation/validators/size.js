'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _validator = require('./validator');

var _validator2 = _interopRequireDefault(_validator);

var _module = require('../../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValSize', function (avValUtils) {
  var SizeValidator = function (_Validator) {
    _inherits(SizeValidator, _Validator);

    function SizeValidator() {
      _classCallCheck(this, SizeValidator);

      return _possibleConstructorReturn(this, _Validator.call(this, 'size'));
    }

    SizeValidator.prototype.validate = function validate(context) {
      var value = context.value,
          constraint = context.constraint;

      var _value = value;

      var min = constraint.min || 0;
      var max = constraint.max;
      var type = constraint.type ? constraint.type.toLowerCase() : 'text';

      if (_value === null || _angular2.default.isUndefined(_value)) {
        _value = '';
      }

      if (type === 'text') {
        _value = '' + _value;
        return avValUtils.isEmpty(_value) || _value.length >= min && (max === undefined || _value.length <= max);
      }

      // ... must be a Number
      if (!_angular2.default.isNumber(_value) && /^\d+$/.test(_value)) {
        _value = parseInt(_value, 10);
      }

      return avValUtils.isEmpty(_value) || _value >= min && (max === undefined || _value <= max);
    };

    return SizeValidator;
  }(_validator2.default);

  return new SizeValidator();
});
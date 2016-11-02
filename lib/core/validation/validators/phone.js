'use strict';

var _module = require('../../module');

var _module2 = _interopRequireDefault(_module);

var _validator = require('./validator');

var _validator2 = _interopRequireDefault(_validator);

require('./pattern');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValPhone', function (avValPattern) {

  var PHONE_PATTERN = /^([0-9][\.\-]?)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;

  var PhoneValidator = function (_Validator) {
    _inherits(PhoneValidator, _Validator);

    function PhoneValidator() {
      _classCallCheck(this, PhoneValidator);

      return _possibleConstructorReturn(this, _Validator.call(this, 'phone'));
    }

    PhoneValidator.prototype.validate = function validate(context) {
      context.constraint = context.contraint || {};
      context.constraint.value = PHONE_PATTERN;
      return avValPattern.validate(context);
    };

    return PhoneValidator;
  }(_validator2.default);

  return new PhoneValidator();
});
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

_module2.default.factory('avValEmail', function (avValPattern) {

  var EMAIL_PATTERN = /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

  var EmailValidator = function (_Validator) {
    _inherits(EmailValidator, _Validator);

    function EmailValidator() {
      _classCallCheck(this, EmailValidator);

      return _possibleConstructorReturn(this, _Validator.call(this, 'email'));
    }

    EmailValidator.prototype.validate = function validate(context) {

      context.constraint = context.constraint || {};
      context.constraint.value = EMAIL_PATTERN;

      return avValPattern.validate(context);
    };

    return EmailValidator;
  }(_validator2.default);

  return new EmailValidator();
});
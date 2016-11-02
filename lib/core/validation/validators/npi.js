'use strict';

var _module = require('../../module');

var _module2 = _interopRequireDefault(_module);

var _validator = require('./validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValNpi', function (avValUtils) {
  var NpiValidator = function (_Validator) {
    _inherits(NpiValidator, _Validator);

    function NpiValidator() {
      _classCallCheck(this, NpiValidator);

      var _this = _possibleConstructorReturn(this, _Validator.call(this, 'npi'));

      _this.INTEGER_REGEX = /^\d*$/;
      return _this;
    }

    NpiValidator.prototype.validate = function validate(context) {
      var value = context.value;


      var npi = value || '';

      if (avValUtils.isEmpty(npi)) {
        return true;
      }

      if (!this.INTEGER_REGEX.test(npi) || npi.length !== 10) {
        return false;
      }

      var firstDigit = npi.charAt(0);
      if (!['1', '2', '3', '4'].includes(firstDigit)) {
        return false;
      }

      var digit = parseInt(npi.charAt(9), 10);
      npi = npi.substring(0, 9);
      npi = '80840' + npi;

      var alternate = true;
      var total = 0;

      for (var i = npi.length; i > 0; i--) {
        var next = parseInt(npi.charAt(i - 1), 10);
        if (alternate) {
          next = next * 2;
          if (next > 9) {
            next = next % 10 + 1;
          }
        }
        total += next;
        alternate = !alternate;
      }

      var roundUp = Math.ceil(total / 10) * 10;
      var calculatedCheck = roundUp - total;

      return calculatedCheck === digit;
    };

    return NpiValidator;
  }(_validator2.default);

  return new NpiValidator();
});
'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _module = require('../../module');

var _module2 = _interopRequireDefault(_module);

var _validator = require('./validator');

var _validator2 = _interopRequireDefault(_validator);

require('../constants');

require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValDate', function (AV_VAL, avValUtils) {
  var DateValidator = function (_Validator) {
    _inherits(DateValidator, _Validator);

    function DateValidator() {
      _classCallCheck(this, DateValidator);

      return _possibleConstructorReturn(this, _Validator.call(this, 'dateFormat'));
    }

    DateValidator.prototype.validate = function validate(_ref) {
      var value = _ref.value,
          constraint = _ref.constraint,
          format = _ref.format;


      var _format = constraint && format ? format : AV_VAL.DATE_FORMAT.SIMPLE;
      return avValUtils.isEmpty(value) || _angular2.default.isDate(value) || (0, _moment2.default)(value, _format, true).isValid();
    };

    return DateValidator;
  }(_validator2.default);

  return new DateValidator();
});
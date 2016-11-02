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

_module2.default.factory('avValDateRange', function (AV_VAL, avValUtils) {
  var DateRangeValidator = function (_Validator) {
    _inherits(DateRangeValidator, _Validator);

    function DateRangeValidator() {
      _classCallCheck(this, DateRangeValidator);

      return _possibleConstructorReturn(this, _Validator.call(this, 'dateRange'));
    }

    DateRangeValidator.prototype.getStartDate = function getStartDate(start) {
      return this.setMin((0, _moment2.default)().add(start.value, start.units));
    };

    DateRangeValidator.prototype.getEndDate = function getEndDate(end) {
      return this.setMax((0, _moment2.default)().add(end.value, end.units));
    };

    DateRangeValidator.prototype.setMin = function setMin(value) {

      value.set('hours', 0);
      value.set('minutes', 0);
      value.set('seconds', 0);

      return value;
    };

    DateRangeValidator.prototype.setMax = function setMax(value) {

      value.set('hours', 23);
      value.set('minutes', 59);
      value.set('seconds', 59);

      return value;
    };

    DateRangeValidator.prototype.validation = function validation(_ref) {
      var value = _ref.value,
          constraint = _ref.constraint;


      var startDate = void 0;
      var endDate = void 0;

      var date = _angular2.default.isDate(value) ? (0, _moment2.default)(value) : (0, _moment2.default)(value, constraint.format || AV_VAL.DATE_FORMAT.SIMPLE);
      date.set('hours', 0);
      date.set('minutes', 0);
      date.set('seconds', 0);

      if (!avValUtils.isEmpty(constraint.start.units) && !avValUtils.isEmpty(constraint.end.units)) {
        startDate = this.getStartDate(constraint.start);
        endDate = this.getEndDate(constraint.end);
      } else {
        startDate = (0, _moment2.default)(constraint.start.value, constraint.start.format || constraint.format);
        endDate = this.setMax((0, _moment2.default)(constraint.end.value, constraint.end.format || constraint.format));
      }
      return (_angular2.default.isDate(value) || date.isValid()) && (date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day'));
    };

    DateRangeValidator.prototype.validate = function validate(context) {
      return avValUtils.isEmpty(context.value) || this.validation(context);
    };

    return DateRangeValidator;
  }(_validator2.default);

  return new DateRangeValidator();
});
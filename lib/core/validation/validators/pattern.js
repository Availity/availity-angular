'use strict';

var _module = require('../../module');

var _module2 = _interopRequireDefault(_module);

var _validator = require('./validator');

var _validator2 = _interopRequireDefault(_validator);

require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValPattern', function (avValUtils) {
  var PatternValidator = function (_Validator) {
    _inherits(PatternValidator, _Validator);

    function PatternValidator() {
      _classCallCheck(this, PatternValidator);

      var _this = _possibleConstructorReturn(this, _Validator.call(this, 'pattern'));

      _this.REGEX = /^\/(.*)\/([gim]*)$/; // regular expression to test a regular expression
      return _this;
    }

    PatternValidator.prototype.asRegExp = function asRegExp(pattern) {

      // if regex then return it
      if (pattern.test) {
        return pattern;
      }

      // if string then test for valid regex then convert to regex and return
      var match = pattern.match(this.REGEX);
      if (match) {
        return new RegExp(match[1], match[2]);
      }

      throw new Error('Expected ' + pattern + ' to be a RegExp');
    };

    PatternValidator.prototype.validate = function validate(context) {
      var value = context.value,
          constraint = context.constraint;


      var self = this;

      var values = Array.isArray(constraint.value) ? constraint.value : [constraint.value];

      var valid = false;

      values.forEach(function (expression) {
        var pattern = self.asRegExp(expression);
        if (avValUtils.isEmpty(value) || pattern.test(value)) {
          valid = true;
        }
      });

      return valid;
    };

    return PatternValidator;
  }(_validator2.default);

  return new PatternValidator();
});
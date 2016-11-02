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

_module2.default.factory('avValRequired', function (avValUtils) {
  var RequiredValidator = function (_Validator) {
    _inherits(RequiredValidator, _Validator);

    function RequiredValidator() {
      _classCallCheck(this, RequiredValidator);

      return _possibleConstructorReturn(this, _Validator.call(this, 'required'));
    }

    RequiredValidator.prototype.validate = function validate(context) {
      var value = context.value,
          element = context.element;

      // Using ngModelController.$isEmpty for required checks.  A form component being empty is dependent on the
      // type of field:
      //
      //    - radio
      //    - checkbox
      //    - text
      //    - lists
      //
      // You can override $isEmpty for input directives whose concept of being empty is different to the
      // default. Radio and checkboxes directive do this because in its case a value of `false`
      // implies empty.
      //

      var ctrl = element && element.data('$ngModelController');
      if (ctrl) {
        return !ctrl.$isEmpty(value);
      }

      return !avValUtils.isEmpty(value);
    };

    return RequiredValidator;
  }(_validator2.default);

  return new RequiredValidator();
});
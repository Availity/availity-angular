'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _utils = require('../../core/utils');

require('../../core/validation');

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvValFieldController = function (_Base) {
  _inherits(AvValFieldController, _Base);

  function AvValFieldController() {
    _classCallCheck(this, AvValFieldController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.ngModel = null;
    _this.rule = null;
    _this.avValForm = null;
    _this.avValInvalid = false;
    _this.noEvent = {};
    _this.placeholder = _this.av.$element[0].placeholder;

    return _this;
  }

  AvValFieldController.prototype.init = function init(options) {
    _extends(this, options);
    this.createId();
    this.setupValidators();
  };

  AvValFieldController.prototype.createId = function createId() {
    this.ngModel.avId = (0, _utils.uuid)('avVal');
  };

  AvValFieldController.prototype.updateElement = function updateElement() {

    this.av.avValAdapter.element({
      element: this.av.$element,
      ngModel: this.ngModel
    });

    this.av.avValAdapter.message({
      element: this.av.$element,
      ngModel: this.ngModel
    });
  };

  AvValFieldController.prototype.setupValidators = function setupValidators() {

    var self = this;

    var schemaName = this.avValForm.rulesSchema;
    var ruleConfig = this.av.avVal.getRule(schemaName);

    if (!ruleConfig) {
      this.av.$log.error('Failed to get rules schema named [' + schemaName + '].  Forms must be tagged with a rules schema name for validation to work.');
      return;
    }

    var constraints = ruleConfig[this.ruleName];
    if (!constraints) {
      this.av.$log.info('Rule named [' + this.ruleName + '] could not be found in the current schema.');
      constraints = {};
    }

    Object.keys(constraints).forEach(function (constraintName) {
      var constraint = constraints[constraintName];
      if (!constraint) {

        // When extending rule sets, previous rules can be overridden with null so
        // delete the previous $validator
        delete self.ngModel.$validators[constraintName];
        return;
      }

      var validator = self.av.avVal.getService(constraintName);

      if (_angular2.default.isUndefined(validator)) {
        self.av.$log.warn('No validator defined for ' + constraintName);
        return;
      }

      self.ngModel.$validators[constraintName] = function contraintValidator(modelValue, viewValue) {

        var value = modelValue || viewValue;

        var valid = validator.validate({
          value: value,
          constraint: constraint,
          element: self.av.$element
        });

        return valid;
      };

      // Attach the constrain to the validator so that the message is available
      // to the validation container that is going to paint the message on screen.
      self.ngModel.$validators[constraintName].constraint = constraint;
    });
  };

  AvValFieldController.prototype.reset = function reset() {
    this.ngModel.$setPristine();
    this.ngModel.$setUntouched();
    this.ngModel.$error = {};
    this.av.avValAdapter.reset(this.av.$element);
  };

  AvValFieldController.prototype.onRunValidators = function onRunValidators() {

    if (this.ngModel.$dirty) {
      this.updateElement();
    }
  };

  return AvValFieldController;
}(_base2.default);

AvValFieldController.$inject = ['$element', 'avValAdapter', 'avVal', '$log', '$timeout', '$scope'];


_module2.default.controller('AvValFieldController', AvValFieldController);

_module2.default.directive('avValField', function ($log, $timeout, avVal, avValAdapter, AV_VAL) {
  return {
    restrict: 'A',
    controller: 'AvValFieldController',
    require: ['^avValForm', 'ngModel', 'avValField'],
    link: function link(scope, element, attrs, controllers) {

      var ruleName = attrs.avValField;

      var avValForm = controllers[0];
      var ngModel = controllers[1];
      var avValField = controllers[2];

      var avValOn = scope.avValOn || avValForm.avValOn || 'default';
      var avValDebounce = scope.avValDebounce || avValForm.avValDebounce || AV_VAL.DEBOUNCE;
      var avValInvalid = attrs.avValInvalid || avValForm.avValInvalid || false;

      ngModel.$$setOptions({
        updateOnDefault: true,
        updateOn: avValOn,
        allowInvalid: avValInvalid,
        debounce: avValDebounce
      });

      // Wrap $$runValidators with our own function so we can intercept when the validation
      // pipeline finishes.
      var $$runValidators = ngModel.$$runValidators;
      var runValidators = function runValidators(modelValue, viewValue, doneCallback) {

        $$runValidators(modelValue, viewValue, function (allValid) {
          doneCallback(allValid);
          avValField.onRunValidators();
        });
      };

      ngModel.$$runValidators = runValidators;

      if (!ngModel && !ruleName) {
        $log.error('avValField requires ngModel and a validation rule name to run.');
        return;
      }

      avValField.init({
        ngModel: ngModel,
        ruleName: ruleName,
        avValForm: avValForm
      });

      scope.$on(AV_VAL.EVENTS.REVALIDATE, function () {
        ngModel.$validate();
      });

      scope.$on(AV_VAL.EVENTS.SUBMITTED, function () {
        ngModel.$dirty = true;
        ngModel.$validate();
      });

      // - Removes all errors on page,
      // - does not reset view or model values.  This should to be handled by the application.
      scope.$on(AV_VAL.EVENTS.RESET, function () {
        avValField.reset();
      });
    }
  };
});
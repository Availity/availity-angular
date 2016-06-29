import _ from 'lodash';

import ngModule from '../module';
import { uuid } from '../../core/utils';
import '../../core/validation';
import Base from '../base';

class AvValFieldController extends Base {

  static $inject = ['$element', 'avValAdapter', '$attrs', 'avVal', '$log', '$timeout', '$scope', '$sniffer'];

  constructor(...args) {

    super(...args);

    this.ngModel = null;
    this.rule = null;
    this.avValForm = null;
    this.avValInvalid = false;
    this.noEvent = {};
    this.placeholder = this.av.$element[0].placeholder;

  }

  init(options) {
    _.merge(this, options);
    this.createId();
    this.setupValidators();
  }

  createId() {
    this.ngModel.avId = uuid('avVal');
  }

  updateElement() {

    this.av.avValAdapter.element({
      element: this.av.$element,
      ngModel: this.ngModel
    });

    this.av.avValAdapter.message({
      element: this.av.$element,
      ngModel: this.ngModel
    });

  }

  setupValidators() {

    const self = this;

    const schemaName = this.avValForm.rulesSchema;
    const ruleConfig = this.av.avVal.getRule(schemaName);

    if (!ruleConfig) {
      this.av.$log.error(`Failed to get rules schema named [${schemaName}].  Forms must be tagged with a rules schema name for validation to work.`);
      return;
    }

    let constraints = ruleConfig[this.ruleName];
    if (!constraints) {
      this.av.$log.info(`Rule named [${this.ruleName}] could not be found in the current schema.`);
      constraints = [];
    }

    _.forEach(constraints, (constraint, constraintName) => {

      if (!constraint) {

        // When extending rule sets, previous rules can be overridden with null so
        // delete the previous $validator
        delete self.ngModel.$validators[constraintName];
        return;
      }

      const validator = self.av.avVal.getService(constraintName);

      if (_.isUndefined(validator)) {
        self.vm.$log.warn(`No validator defined for ${constraintName}`);
        return;
      }

      self.ngModel.$validators[constraintName] = function contraintValidator(modelValue, viewValue) {

        const value = modelValue || viewValue;

        const valid = validator.validate({
          value,
          constraint,
          element: self.av.$element
        });

        return valid;

      };

      // Attach the constrain to the validator so that the message is available
      // the the validation container that is going to paint the message on screen.
      self.ngModel.$validators[constraintName].constraint = constraint;

    });

  }

  onRunValidators() {

    if (!this.ngModel.$pristine) {
      this.updateElement();
    }

  }

}

ngModule.controller('AvValFieldController', AvValFieldController);

ngModule.directive('avValField', function($log, $timeout, avVal, avValAdapter, AV_VAL) {
  return {
    restrict: 'A',
    controller: 'AvValFieldController',
    require: ['^avValForm', 'ngModel', 'avValField'],
    scope: {
      avValShow: '=?'
    },
    link(scope, element, attrs, controllers) {

      const ruleName = attrs.avValField;

      const avValForm = controllers[0];
      const ngModel = controllers[1];
      const avValField = controllers[2];

      // Wrap $$runValidators with our own function so we can intercept when the validation
      // pipeline finishes.
      const runValidators = _.wrap(ngModel.$$runValidators, (func, modelValue, viewValue, doneCallback) => {

        func(modelValue, viewValue, (allValid) => {
          doneCallback(allValid);
          avValField.onRunValidators();
        });

      });

      ngModel.$$runValidators = runValidators;

      if (!ngModel && !ruleName) {
        $log.error('avValField requires ngModel and a validation rule name to run.');
        return;
      }

      avValField.init({
        ngModel,
        ruleName,
        avValForm
      });

      scope.$on(AV_VAL.EVENTS.REVALIDATE, function() {
        ngModel.$validate();
      });

      scope.$on(AV_VAL.EVENTS.SUBMITTED, function() {
        ngModel.$dirty = true;
        ngModel.$validate();
      });

      // - Removes all errors on page,
      // - does not reset view or model values.  This should to be handled by the application.
      scope.$on(AV_VAL.EVENTS.RESET, function() {
        // avValField.reset();
      });

      scope.$on('$destroy', function() {
        avValForm.unrecord(ngModel.avId);
      });

    }
  };
});

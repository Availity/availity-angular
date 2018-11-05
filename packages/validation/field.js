import angular from 'angular';

import ngModule from '../module';
import { uuid } from '../../core/utils';
import '../../core/validation';

class AvValFieldController {

  constructor($element, avValAdapter, avVal, $log, $scope, $attrs) {

    this.av = { $element, avValAdapter, avVal, $log, $scope, $attrs };

    this.ngModel = null;
    this.rule = null;
    this.avValForm = null;
    this.avValInvalid = false;
    this.noEvent = {};
    this.placeholder = this.av.$element[0].placeholder;

  }

  init(options) {
    Object.assign(this, options);
    this.createId();
    this.setupValidators();
  }

  createId() {
    this.ngModel.avId = uuid('avVal');
  }

  isRadio() {
    return this.av.$element.is('input') && this.av.$attrs.type === 'radio';
  }

  isCheckbox() {
    return this.av.$element.is('input') && this.av.$attrs.type === 'checkbox';
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
      constraints = {};
    }


    Object.keys(constraints).forEach(constraintName => {

      const constraint = constraints[constraintName];
      if (!constraint) {

        // When extending rule sets, previous rules can be overridden with null so
        // delete the previous $validator
        delete self.ngModel.$validators[constraintName];
        return;
      }

      const validator = self.av.avVal.getService(constraintName);

      if (angular.isUndefined(validator)) {
        self.av.$log.warn(`No validator defined for ${constraintName}`);
        return;
      }

      self.ngModel.$validators[constraintName] = function constraintValidator(modelValue, viewValue) {

        const value = modelValue || viewValue;

        const valid = validator.validate({
          value,
          constraint,
          element: self.av.$element
        });

        return valid;

      };

      // Attach the constraint to the validator so that the message is available
      // to the validation container that is going to paint the message on screen.
      self.ngModel.$validators[constraintName].constraint = constraint;

    });

  }

  reset() {
    this.ngModel.$setPristine();
    this.ngModel.$setUntouched();
    this.ngModel.$error = {};
    this.av.avValAdapter.reset(this.av.$element);
  }

  onRunValidators() {
    if (this.ngModel.$dirty) {
      this.updateElement();
    }
  }

}

ngModule.controller('AvValFieldController', AvValFieldController);

ngModule.directive('avValField', ($log, avVal, avValAdapter, AV_VAL) => ({
    restrict: 'A',
    controller: 'AvValFieldController',
    require: ['^avValForm', 'ngModel', 'avValField', '?ngModelOptions', '?^ngModelOptions'],
    link(scope, element, attrs, controllers) {

      const ruleName = attrs.avValField;

      const avValForm = controllers[0];
      const ngModel = controllers[1];
      const avValField = controllers[2];
      const ngModelOptions = controllers[3];
      const ngModelOptionsParent = controllers[4];

      if (!ngModelOptions || !ngModelOptionsParent) {

        ngModel.$options.createChild({
          '*': '$inherit',
          debounce: avValField.isCheckbox() || avValField.isRadio() ? AV_VAL.DEBOUNCE_QUICK : AV_VAL.DEBOUNCE
        });

      }

      // Wrap $$runValidators with our own function so we can intercept when the validation
      // pipeline finishes.
      const $$runValidators = ngModel.$$runValidators;
      const runValidators = (modelValue, viewValue, doneCallback) => {

        $$runValidators.call(ngModel, modelValue, viewValue, allValid => {
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
        ngModel,
        ruleName,
        avValForm
      });

      const reValidateOff = scope.$on(AV_VAL.EVENTS.REVALIDATE, () => {
        ngModel.$validate();
      });

      const submittedOff = scope.$on(AV_VAL.EVENTS.SUBMITTED, () => {
        ngModel.$dirty = true;
        ngModel.$validate();
      });

      // - Removes all errors on page,
      // - Does not reset view or model values.  This should to be handled by the application.
      const resetOff = scope.$on(AV_VAL.EVENTS.RESET, () => {
        avValField.reset();
      });

      scope.$on('$destroy', () => {
        reValidateOff();
        submittedOff();
        resetOff();
      });

    }
  }));

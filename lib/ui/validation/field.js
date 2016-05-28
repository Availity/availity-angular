import angular from 'angular';
import _ from 'lodash';

import ngModule from '../module';
import { uuid } from '../../core/utils';
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

  createId() {
    this.ngModel.avId = uuid('avVal');
  }

  set(options) {
    _.merge(this, options);
  }

  updateModel(results) {
    const self = this;

    const validationKeys = [];

    this.ngModel.avResults = results;

    // set state for each violation
    angular.forEach(results.violations, result => {

      const key = `av-${result.contraintName}`;
      validationKeys.push(key);
      self.ngModel.$setValidity(key, result.valid);

    });

    // set overall state for validation state
    this.ngModel.$setValidity('av', this.ngModel.avResults.isValid);

    // store violations
    this.ngModel.avViolations = this.ngModel.avResults.violations;

    // record the id and violation count in the av-form controller.  this determines if the form is
    // valid if sum of violations for all form inputs === zero
    this.avValForm.record(this.ngModel.avId, this.ngModel.avResults.violations.length);

    // remove violation keys that are no longer falsy
    angular.forEach(this.ngModel.$error, function(value, key) {

      if (_.indexOf(validationKeys, key) === -1 && key.lastIndexOf('av-', 0) === 0) {
        self.ngModel.$setValidity(key, true);
      }
    });
  }

  updateView() {
    if (this.ngModel.$dirty || this.av.$scope.avValShow) {
      this.av.avValAdapter.element(this.av.$element, this.ngModel, this.ngModel.avResults.isValid);
      this.av.avValAdapter.message(this.av.$element, this.ngModel);
    }
  }

  validate(value) {

    this.av.$log.info(`validating value [${value}]`);

    const rulesKey = this.avValForm.rulesKey;
    const results = this.av.avVal.validate(rulesKey, this.av.$element, value, this.rule);

    // validate function is called within the context of angular so fn.call and set the context
    // to "this"
    self.updateModel.call(self, results);
    self.updateView.call(self);

    return results;
  }

  validateModel(value) {
    this.validate(value);
    return value;
  }

  validateView(value) {

    const results = this.validate(value);

    if (this.avValForm.avValInvalid || this.avValInvalid) {
      // allows invalid data from view to update model for dirty saving
      return value;
    }

    // prevent invalid data from view to update model
    return results.isValid ? value : undefined;

  }

  onDebounce() {

    const value = this.av.$element.val().trim();

    if (this.isCheckbox()) {
      this.ngModel.$setViewValue(this.av.$element[0].checked);
    } else if (this.isRadio()) {
      this.ngModel.$setViewValue(this.av.$attrs.value);
    } else {
      this.ngModel.$setViewValue(value);
    }

  }

  isRadio() {
    return this.av.$element.is('input') && this.av.$attrs.type === 'radio';
  }

  isCheckbox() {
    return this.av.$element.is('input') && this.av.$attrs.type === 'checkbox';
  }

  reset() {

    const violations = this.ngModel.avResults.violations;
    violations.splice(0, violations.length);

    this.av.avValAdapter.message(this.av.$element, this.ngModel);
    this.av.avValAdapter.reset(this.av.$element);

  }

  event(event, avValDebounce) {

    const self = this;

    this.av.$element.unbind('input');
    const debounce = null;

    this.av.$element.on(event, () => {

      // https://github.com/angular/angular.js/blob/v1.2.27/src/ng/directive/input.js#L508
      if (self.av.$sniffer.msie <= 11 && (event || self.noEvent).type === 'input' && self.av.$element[0].placeholder !== self.placeholder) {
        self.placeholder = this.av.$element[0].placeholder;
        return;
      }

      self.av.$timeout.cancel(debounce);
      debounce = self.av.$timeout(function() {
        self.av.$scope.$apply(function() {
          self.onDebounce();
        });
      }, avValDebounce);

    });

  }

}

ngModule.controller('AvValFieldController', AvValFieldController);

// Events:
//
//  click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown
//  keyup keypress submit focus blur copy cut paste
ngModule.directive('avValField', function($log, $timeout, avVal, avValAdapter, AV_VAL) {
  return {
    restrict: 'A',
    controller: 'AvValFieldController',
    require: ['^avValForm', 'ngModel', 'avValField'],
    scope: {
      avValDebounce: '@?',
      avValOn: '@?',
      avValShow: '=?'
    },
    link(scope, element, attrs, controllers) {

      const rule = attrs.avValField;

      const avValForm = controllers[0];
      const ngModel = controllers[1];
      const avValField = controllers[2];

      // const avValOn = scope.avValOn || avValForm.avValOn || 'input';

      if (!ngModel && !rule) {
        $log.error('avValField requires ngModel and a validation rule to run.');
        return;
      }

      // Allows fields to update with invalid data for dirty form saving
      avValField.avValInvalid = attrs.avValInvalid || false;

      avValField.set({
        ngModel,
        avValForm,
        rule
      });

      avValField.createId();

      // DEBOUNCE
      // const avValDebounce = parseInt(scope.avValDebounce || (avValForm.avValDebounce || AV_VAL.DEBOUNCE), 10);
      // avValDebounce = _.isNumber(avValDebounce) ? avValDebounce : AV_VAL.DEBOUNCE;

      // const debounceAllowed = !avValField.isRadio() && !avValField.isCheckbox() && avValOn !== 'blur';

      // if (!debounceAllowed) {
      //   avValDebounce = 0;
      // }

      // EVENT LISTENER
      // avValField.event(avValOn, avValDebounce);

      // (view to model)
      // ngModel.$parsers.push(avValField.validateView);

      // (model to view) - added to beginning of array because formatters
      // are processed in reverse order thus allowing the model to be transformed
      // before the validation framework check for validity.
      // ngModel.$formatters.unshift(avValField.validateModel);

      scope.$on(AV_VAL.EVENTS.REVALIDATE, function() {
        ngModel.$validate();
      });

      // SUBMITTED EVENT
      scope.$on(AV_VAL.EVENTS.SUBMITTED, function() {
        ngModel.$dirty = true;
        ngModel.$validate();
        // avValField.validate(ngModel.$viewValue);
      });

      // - Removes all errors on page,
      // - does not reset view or model values.  This is to be handled by the app.
      scope.$on(AV_VAL.EVENTS.RESET, function() {
        avValField.reset();
      });

      scope.$on('$destroy', function() {
        avValForm.unrecord(ngModel.avId);
      });

    }
  };
});

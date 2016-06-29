import _ from 'lodash';

import ngModule from '../module';
import '../../core/validation';

import './constants';
import './adapter';
import './field';

class AvValController {

  constructor() {

    this.ngForm = null;
    this.rulesSchema = null;
    this.avValOn = null;
    this.avValDebounce = null;
    this.avValInvalid = false;

    // Object that stores the unique id (key) and violation count (value) of all the form fields
    //
    // EX:
    //
    // {
    //  avVal001: 0
    //  avVal002: 2
    //  avVal003: 1
    // }
    this.violations = {};

  }

  init(options) {
    _.merge(this, options);
  }

  /**
   * Records id of the form field and number of violations
   * @param  {[type]} id    [description]
   * @param  {[type]} count [description]
   * @return {[type]}       [description]
   */
  record(id, count) {

    this.violations[id] = count;

    const violocationCount = _.reduce(this.violations, (sum, num) => {
      return sum + num;
    }, 0);

    this.ngForm.$setValidity('av', violocationCount === 0);
  }

  unrecord(id) {
    if (id && this.violations[id]) {
      delete this.violations[id];
    }
  }

  reset() {
    this.ngForm.$setPristine();
    this.ngForm.$submitted = false;
  }

  $setSubmitted() {
    this.ngForm.$submitted = true;
  }

}

ngModule.controller('AvValFormController', AvValController);

// $pristine - True if user has not interacted with the form yet.
// $dirty - True if user has already interacted with the form.
// $valid - True if all of the containing forms and controls are valid.
// $invalid - True if at least one containing control or form is invalid.
// $pending - True if at least one containing control or form is pending.
// $submitted - True if user has submitted the form even if its invalid.
//
ngModule.directive('avValForm', ($log, $timeout, $parse, AV_VAL, avValAdapter, $rootScope) => ({

  restrict: 'A',
  priority: 10,
  require: ['form', 'avValForm'],
  controller: 'AvValFormController',
  compile() {
    return {

      pre(scope, iEl, iAttrs, controllers) {

        const ruleFn = $parse(iAttrs.avValForm);
        let rulesSchema = ruleFn(scope);

        const ngForm = controllers[0];
        const avForm = controllers[1];

        rulesSchema = rulesSchema || iAttrs.avValForm; // interpolated rule from scope || fixed string

        if (!rulesSchema) {
          $log.error('avValForm requires a rules schema in order to run the proper set of validation rules');
          return;
        }

        scope.$watch(ruleFn, (_rulesSchema, _oldRulesSchema) => {

          if (_rulesSchema !== _oldRulesSchema) {
            $timeout(() => {
              $log.info('avValForm revalidate');
              $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
            });
          }

        });

        // Allow form attributes to define the validation behavior of the form fields
        // inside it.  If `av-val-on` or `av-val-debounce` are on the form then all form
        // fields inside the form would inherit this behavior.
        avForm.avValOn = iAttrs.avValOn || null;
        avForm.avValDebounce = iAttrs.avValDebounce || null;
        // Allows fields to update with invalid data for dirty form saving
        avForm.avValInvalid = iAttrs.avValInvalid || false;

        avForm.init({
          ngForm,
          rulesSchema
        });

      },

      post(scope, iEl, iAttrs, controllers) {

        // Prevent HTML5 validation from kicking in
        iEl.attr('novalidate', 'novalidate');

        // Disable ng-submit or ng-click handlers and store the function to call for submitting
        let fn;
        if (iAttrs.ngSubmit) {
          // Disable ng-submit event
          iEl.off('submit');
          fn = $parse(iAttrs.ngSubmit, null, true);
        } else if (iAttrs.ngClick) {
          // Disable ng-click event
          iEl.off('click');
          fn = $parse(iAttrs.ngClick, null, true);
        }

        const ngForm = controllers[0];
        const avForm = controllers[1];

        scope.$on(AV_VAL.EVENTS.RESET, () => {
          avForm.reset();
        });

        iEl.bind('submit', event => {

          scope.$broadcast(AV_VAL.EVENTS.SUBMITTED);
          avForm.$setSubmitted();

          if (ngForm.$invalid) {

            scope.$broadcast(AV_VAL.EVENTS.FAILED);

            $log.info('avValForm is invalid.  Preventing default submit action');

            event.preventDefault();
            event.stopImmediatePropagation();
            scope.$broadcast(event);

            avValAdapter.scroll(iEl);

            return;
          }

          ngForm.$setPristine();

          if (!fn) {
            return;
          }

          const callback = () => {
            fn(scope, {$event: event});
          };

          scope.$apply(callback);

        });

      }
    };
  }
}));

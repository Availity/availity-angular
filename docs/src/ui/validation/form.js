import ngModule from '../module';
import '../../core/validation';
import './constants';
import './adapter';
import './field';

class AvValController {

  constructor($scope) {

    this.ngForm = null;
    this.rulesSchema = null;
    this.avValOn = null;
    this.avValDebounce = null;
    this.avValInvalid = false;
    this.di = {$scope};

  }

  init(options) {
    Object.assign(this, options);
  }

  reset() {
    this.ngForm.$setPristine();
    this.ngForm.$setUntouched();
    this.ngForm.$submitted = false;
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
          $log.error('avValForm requires a rules schema in order to run a set of validation rules');
          return;
        }

        scope.$watch(ruleFn, (_rulesSchema, _oldRulesSchema) => {

          if (_rulesSchema !== _oldRulesSchema) {
            $timeout(() => {
              $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
            });
          }

        });

        avForm.init({
          ngForm,
          rulesSchema
        });

      },

      post(scope, el, iAttrs, controllers) {

        // Prevent HTML5 validation from kicking in
        el.attr('novalidate', 'novalidate');

        // Disable ng-submit or ng-click handlers and store the function to call for submitting
        let fn;
        if (iAttrs.ngSubmit) {
          // Disable ng-submit event
          el.off('submit');
          fn = $parse(iAttrs.ngSubmit, null, true);
        } else if (iAttrs.ngClick) {
          // Disable ng-click event
          el.off('click');
          fn = $parse(iAttrs.ngClick, null, true);
        }

        const ngForm = controllers[0];
        const avForm = controllers[1];

        scope.$on(AV_VAL.EVENTS.RESET, () => {
          avForm.reset();
        });

        const watcher = () => ngForm.$pending;
        let unwatch;

        el.bind('submit', event => {

          scope.$broadcast(AV_VAL.EVENTS.SUBMITTED);
          ngForm.$setSubmitted();

          if (ngForm.$invalid || ngForm.$pending) {

            event.preventDefault();
            event.stopImmediatePropagation();
            scope.$broadcast(event);

            if (ngForm.$pending) {

              unwatch = scope.$watch(watcher, (pending) => {
                if (!pending) {
                  avValAdapter.scroll(el);
                }
              });

            } else {
              avValAdapter.scroll(el);
            }

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

        scope.$on('$destroy', () => {
          try {
            unwatch();
          } catch (e) { /* no op */ }
        });

      }
    };
  }
}));

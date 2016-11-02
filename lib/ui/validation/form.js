'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('../../core/validation');

require('./constants');

require('./adapter');

require('./field');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvValController = function () {
  function AvValController($scope) {
    _classCallCheck(this, AvValController);

    this.ngForm = null;
    this.rulesSchema = null;
    this.avValOn = null;
    this.avValDebounce = null;
    this.avValInvalid = false;
    this.di = { $scope: $scope };
  }

  AvValController.prototype.init = function init(options) {
    _extends(this, options);
  };

  AvValController.prototype.reset = function reset() {
    this.ngForm.$setPristine();
    this.ngForm.$setUntouched();
    this.ngForm.$submitted = false;
  };

  return AvValController;
}();

_module2.default.controller('AvValFormController', AvValController);

// $pristine - True if user has not interacted with the form yet.
// $dirty - True if user has already interacted with the form.
// $valid - True if all of the containing forms and controls are valid.
// $invalid - True if at least one containing control or form is invalid.
// $pending - True if at least one containing control or form is pending.
// $submitted - True if user has submitted the form even if its invalid.
//
_module2.default.directive('avValForm', function ($log, $timeout, $parse, AV_VAL, avValAdapter, $rootScope) {
  return {

    restrict: 'A',
    priority: 10,
    require: ['form', 'avValForm'],
    controller: 'AvValFormController',
    compile: function compile() {
      return {
        pre: function pre(scope, iEl, iAttrs, controllers) {

          var ruleFn = $parse(iAttrs.avValForm);
          var rulesSchema = ruleFn(scope);

          var ngForm = controllers[0];
          var avForm = controllers[1];

          rulesSchema = rulesSchema || iAttrs.avValForm; // interpolated rule from scope || fixed string

          if (!rulesSchema) {
            $log.error('avValForm requires a rules schema in order to run a set of validation rules');
            return;
          }

          scope.$watch(ruleFn, function (_rulesSchema, _oldRulesSchema) {

            if (_rulesSchema !== _oldRulesSchema) {
              $timeout(function () {
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
            ngForm: ngForm,
            rulesSchema: rulesSchema
          });
        },
        post: function post(scope, el, iAttrs, controllers) {

          // Prevent HTML5 validation from kicking in
          el.attr('novalidate', 'novalidate');

          // Disable ng-submit or ng-click handlers and store the function to call for submitting
          var fn = void 0;
          if (iAttrs.ngSubmit) {
            // Disable ng-submit event
            el.off('submit');
            fn = $parse(iAttrs.ngSubmit, null, true);
          } else if (iAttrs.ngClick) {
            // Disable ng-click event
            el.off('click');
            fn = $parse(iAttrs.ngClick, null, true);
          }

          var ngForm = controllers[0];
          var avForm = controllers[1];

          scope.$on(AV_VAL.EVENTS.RESET, function () {
            avForm.reset();
          });

          var watcher = function watcher() {
            return ngForm.$pending;
          };
          var unwatch = void 0;

          scope.$watch(watcher, function (pending) {
            if (!pending) {
              // pendingWatch();
              // performSubmit();
            }
          });

          el.bind('submit', function (event) {

            scope.$broadcast(AV_VAL.EVENTS.SUBMITTED);
            ngForm.$setSubmitted();

            if (ngForm.$invalid || ngForm.$pending) {

              // scope.$broadcast(AV_VAL.EVENTS.FAILED);
              // $log.info('avValForm is invalid.  Preventing default submit action');

              event.preventDefault();
              event.stopImmediatePropagation();
              scope.$broadcast(event);

              if (ngForm.$pending) {

                unwatch = scope.$watch(watcher, function (pending) {
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

            var callback = function callback() {
              fn(scope, { $event: event });
            };

            scope.$apply(callback);
          });

          scope.$on('$destroy', function () {
            try {
              unwatch();
            } catch (e) {/* no op */}
          });
        }
      };
    }
  };
});
/**
 * 1. All fields should be pristine on first load
 * 2. If field is modified an invalid the field should be marked with an error
 *
 */
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.controller('avValFormController', function() {

    this.ngForm  = null;
    this.rulesKey = null;
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

    this.init = function(form) {
      this.ngForm = form;
    };

    /**
     * Records id of the form field and number of violations
     * @param  {[type]} id    [description]
     * @param  {[type]} count [description]
     * @return {[type]}       [description]
     */
    this.record = function(id, count) {
      this.violations[id] = count;

      var violocationCount = _.reduce(this.violations, function(sum, num) {
        return sum + num;
      }, 0);

      this.ngForm.$setValidity('av', violocationCount === 0);
    };

    this.unrecord = function(id) {
      if(id && this.violations[id]) {
        delete this.violations[id];
      }
      if(_.isEmpty(this.violations)) {
        this.ngForm.$setValidity('av', true);
      }
    };

    this.reset = function() {
      this.ngForm.$setPristine();
      this.ngForm.$submitted = false;
    };

    this.$setSubmitted = function() {
      this.ngForm.$submitted = true;
    };

    this.setRulesKey = function(key) {
      this.rulesKey = key;
    };

  });

  // form.$error = {};
  // form.$$success = {};
  // form.$pending = undefined;
  // form.$name = $interpolate(attrs.name || attrs.ngForm || '')($scope);
  // form.$dirty = false;
  // form.$pristine = true;
  // form.$valid = true;
  // form.$invalid = false;
  // form.$submitted = false;

  availity.ui.directive('avValForm', function($log, $timeout, $parse, AV_VAL, avValAdapter, $rootScope) {
    return {
      restrict: 'A',
      priority: 10,
      require: ['form', 'avValForm'],
      controller: 'avValFormController',
      compile: function() {
        return {
          pre: function(scope, iEl, iAttrs, controllers) {

            var ruleFn = $parse(iAttrs.avValForm);
            var rulesKey = ruleFn(scope);
            rulesKey = rulesKey || iAttrs.avValForm; // interpolated rule from scope || fixed string

            if(!rulesKey) {
              $log.error('avValForm requires a rules key in order to run the proper validation rules.');
              return;
            }

            var ngForm = controllers[0];
            var avForm = controllers[1];

            scope.$watch(ruleFn, function(_rulesKey, _oldRulesKey) {
              if(_rulesKey) {

                avForm.setRulesKey(_rulesKey);

                if(_rulesKey !== _oldRulesKey) {
                  $timeout(function() {
                    $log.info('avValForm revalidate');
                    $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
                  });
                }

              }

            });

            // Allow form attributes to define the validation behavior of the form fields
            // inside it.  If `av-val-on`, `av-val-debounce`, or `av-val-show` are on the form then all form
            // fields inside the form would inherit this behavior.
            avForm.avValOn = iAttrs.avValOn || null;
            avForm.avValDebounce = iAttrs.avValDebounce || null;
            avForm.avValShow = iAttrs.avValShow || null;
            // Allows fields to update with invalid data for dirty form saving
            avForm.avValInvalid = iAttrs.avValInvalid || false;

            avForm.init(ngForm);
            avForm.setRulesKey(rulesKey);

          },
          post: function(scope, iEl, iAttrs, controllers) {

            iEl.attr('novalidate', 'novalidate');  // prevent HTML5 validation from kicking in

            // Disable ng-submit or ng-click handlers and store the function to call for submitting
            var fn;
            if(iAttrs.ngSubmit) {
              // Disable ng-submit event
              iEl.off('submit');
              fn = $parse(iAttrs.ngSubmit, /* expensiveChecks */ true);
            }else if(iAttrs.ngClick) {
              // Disable ng-click event
              iEl.off('click');
              fn = $parse(iAttrs.ngClick, /* expensiveChecks */ true);
            }

            var ngForm = controllers[0];
            var avForm = controllers[1];

            scope.$on(AV_VAL.EVENTS.RESET, function () {
              avForm.reset();
            });

            iEl.bind('submit', function(event) {

              scope.$broadcast(AV_VAL.EVENTS.SUBMITTED);
              avForm.$setSubmitted();

              if(ngForm.$invalid) {

                scope.$broadcast(AV_VAL.EVENTS.FAILED);

                $log.info('avValForm invalid.  preventing default submit action');

                event.preventDefault();
                event.stopImmediatePropagation();
                scope.$broadcast(event);

                avValAdapter.scroll(iEl);
                return;
              }

              ngForm.$setPristine();

              if(!fn) {
                return;
              }

              var callback = function() {
                fn(scope, {$event:event});
              };

              scope.$apply(callback);

            });

          }
        };
      }
    };
  });


})(window);

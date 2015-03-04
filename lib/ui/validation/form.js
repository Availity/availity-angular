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
    };

    this.$setSubmitted = function() {
      //$animate.addClass(element, SUBMITTED_CLASS);
      this.ngForm.$submitted = true;
      // parentForm.$setSubmitted();
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

  availity.ui.directive('avValForm', function($log, $timeout, $parse, AV_VAL) {
    return {
      restrict: 'A',
      priority: 10,
      require: ['form', 'avValForm', '?ngSubmit'],
      controller: 'avValFormController',
      compile: function() {
        return {
          pre: function(scope, iEl, iAttrs, controllers) {


            $log.info('avValForm pre');

            var ngForm = controllers[0];
            var avForm = controllers[1];
            avForm.init(ngForm);

            $log.info('avValForm setting form to invalid state');

          },
          post: function(scope, iEl, iAttrs, controllers) {

            $log.info('avValForm post');

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
            iEl.bind('submit', function(event) {

              avForm.$setSubmitted();

              if(ngForm.$invalid) {

                $log.info('avValForm invalid.  preventing default submit action');

                event.preventDefault();
                event.stopImmediatePropagation();
                scope.$broadcast(event);

                scope.$broadcast(AV_VAL.EVENTS.SUBMITTED);

                return;
              }

              $log.info('avValForm $setPristine');
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

(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.controller('AvValFieldController', function($element, avValAdapter, avVal, $log, $timeout, $scope) {

    this.ngModel = null;
    this.rule = null;
    this.avValForm = null;

    var self = this;

    this.createId = function() {
      this.ngModel.avId = availity.uuid('avVal');
    };

    this.setNgModel = function(ngModel) {
      this.ngModel = ngModel;
    };

    this.setRule = function(rule) {
      this.rule = rule;
    };

    this.avValForm = function(avValForm) {
      this.avValForm = avValForm;
    };

    this.updateModel = function(results) {
      var self = this;
      var validationKeys = [];

      this.ngModel.avResults = results;

      // set state for each violation
      angular.forEach(results.violations, function (result) {
        var key = 'av-' + result.contraintName;
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

        if(_.indexOf(validationKeys, key) === -1 && key.lastIndexOf('av-', 0) === 0) {
          self.ngModel.$setValidity(key, true);
        }
      });
    };

    this.updateView = function() {
      if(this.ngModel.$dirty) {
        avValAdapter.element($element, this.ngModel, this.ngModel.avResults.isValid);
        avValAdapter.message($element, this.ngModel);
      }
    };

    this.validate = function(value) {

      $log.info('validating value [' + value + ']');

      var rulesKey = self.avValForm.rulesKey;
      var results = avVal.validate(rulesKey, $element, value, self.rule);

      // validate function is called within the context of angular so fn.call
      self.updateModel.call(self, results);
      self.updateView.call(self);

      return results;
    };

    this.validateModel = function(value) {

      self.validate(value, true);
      return value;

    };

    this.validateView = function(value) {

      var results = self.validate(value);
      // prevent invalid data from view to update model
      return results.isValid ? value : undefined;

    };

    this.event = function(event, avValDebounce) {

      var self = this;

      $element.unbind('input');

      var debounce;
      $element.on(event, function() {
        $timeout.cancel(debounce);
        debounce = $timeout( function() {
          if(self.model.$dirty) {
            $scope.$apply(function() {
              self.ngModel.$setViewValue($element.val());
            });
          }
        }, avValDebounce);
      });
    };

  });

  // Events:
  //
  //  click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown
  //  keyup keypress submit focus blur copy cut paste
  availity.ui.directive('avValField', function($log, $timeout, avVal, avValAdapter, AV_VAL) {
    return {
      restrict: 'A',
      controller: 'AvValFieldController',
      require: ['^avValForm', '?ngModel', 'avValField'],
      scope: {
        avValDebounce: '@?',
        avValOn: '@?'
      },
      link: function(scope, element, attrs, controllers) {

        var rule = attrs.avValField; // not always string?
        var avValForm = controllers[0];
        var ngModel = controllers[1];
        var avValField = controllers[2];

        var avValOn = scope.avValOn || avValForm.avValOn || 'input';

        if(!ngModel && !rule) {
          $log.error('avValField requires ngModel and a validation rule to run.');
          return;
        }

        avValField.setNgModel(ngModel);
        avValField.avValForm(avValForm);
        avValField.setRule(rule);
        avValField.createId();

        var avValDebounce = parseInt(scope.avValDebounce || (avValForm.avValDebounce || AV_VAL.DEBOUNCE), 10);
        avValDebounce = _.isNumber(avValDebounce) ? avValDebounce : AV_VAL.DEBOUNCE;

        var debounceAllowed = (element.is('input') &&
          !(attrs.type === 'radio' || attrs.type === 'checkbox') &&
          avValOn !== 'blur');

        if(!debounceAllowed) {
          avValDebounce = 0;
        }

        avValField.event(avValOn, avValDebounce);

        // (view to model)
        ngModel.$parsers.push(avValField.validateView);

        // (model to view) - added to beginning of array because formatters
        // are processed in reverse order thus allowing the model to be transformed
        // before the validation framework check for validity.
        ngModel.$formatters.unshift(avValField.validateModel);

        scope.$on(AV_VAL.EVENTS.REVALIDATE, function() {
          avValField.validate(ngModel.$viewValue);
        });

        scope.$on(AV_VAL.EVENTS.SUBMITTED, function() {
          ngModel.$dirty = true;
          avValField.validate(ngModel.$viewValue);
        });

        scope.$on('$destroy', function () {
          avValForm.unrecord(ngModel.avId);
        });

      }
    };
  });


})(window);

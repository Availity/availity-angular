/*global availity, describe, it, beforeEach, expect, module, jasmine*/

describe('avForm', function() {

  'use strict';

  beforeEach(function() {
    module('availity', function(avValProvider) {
      avValProvider.addRules({
        'default': {
          'firstName': {
            'size': {
              'min': 2,
              'max': 10,
              'message': 'First name must be between 2 and 10 characters.'
            },
            'required': {
              'message': 'First name is required.'
            }
          },
          'lastName': {
            'size': {
              'min': 2,
              'max': 10,
              'message': 'Last name must be between 2 and 10 characters.'
            },
            'required': {
              'message': 'Last name is required.'
            }
          }
        }
      });
    });
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();

  var $el;

  beforeEach(function() {

    availity.mock.$scope.submit = jasmine.createSpy('submit');

    availity.mock.$scope.demo = {};
    availity.mock.$scope.demo.rules = 'default';

    var template = '' +
    '<form name="myForm2" ng-submit="submit()" data-av-val-form="demo.rules" data-av-val-debounce="1000" data-av-val-on="input" >' +
      '<input data-ng-model="demo.firstName" name="firstName" type="text" data-av-val-field="firstName"/>' +
      '<input data-ng-model="demo.lastName" name="lastName" type="text" data-av-val-field="lastName"/>' +
      '<input data-ng-model="demo.invalidAllowed" name="invalidAllowed" type="text" data-av-val-field="lastName"/>' +
      '<button type="submit">login</button>' +
    '</form>';

    $el = availity.mock.compileDirective(template);

  });

  it('should be $dirty', function() {
    availity.mock.$scope.myForm2.lastName.$setViewValue('lastName');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.myForm2.$dirty).toBe(true);
    expect($el.hasClass('ng-dirty')).toBe(true);

  });

  it('should be $pristine', function() {
    expect(availity.mock.$scope.myForm2.$pristine).toBe(true);
    expect($el.hasClass('ng-pristine')).toBe(true);
  });

  it('should allow form to override debounce/event attribute for all fields', function() {
    var controller = $el.data('$avValFormController');
    expect(controller.avValDebounce).toBe('1000');
    expect(controller.avValOn).toBe('input');
  });

  it('should NOT be valid and model should NOT be updated', function() {
    availity.mock.$scope.myForm2.lastName.$setViewValue('1');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.myForm2.lastName.$invalid).toBe(true);
    expect(availity.mock.$scope.demo.lastName).toBeUndefined();
  });

  it('should NOT be valid and model should be updated', function() {
    var template = '' +
    '<form name="myForm2" ng-submit="submit()" data-av-val-form="demo.rules" data-av-val-debounce="1000" data-av-val-on="input" data-av-val-invalid="true">' +
      '<input data-ng-model="demo.firstName" name="firstName" type="text" data-av-val-field="firstName"/>' +
      '<input data-ng-model="demo.lastName" name="lastName" type="text" data-av-val-field="lastName"/>' +
      '<input data-ng-model="demo.invalidAllowed" name="invalidAllowed" type="text" data-av-val-field="lastName"/>' +
      '<button type="submit">login</button>' +
    '</form>';

    $el = availity.mock.compileDirective(template);

    availity.mock.$scope.myForm2.invalidAllowed.$setViewValue('1');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.myForm2.invalidAllowed.$invalid).toBe(true);
    expect(availity.mock.$scope.demo.invalidAllowed).toBe('1');
  });

  describe('submit', function() {

    it('should prevent default action', function() {
      availity.mock.$scope.myForm2.invalidAllowed.$setViewValue('1');

      $el.triggerHandler('submit');
      availity.mock.$scope.$digest();

      expect(availity.mock.$scope.submit).not.toHaveBeenCalled();
    });

    it('should NOT prevent default action', function() {

      availity.mock.$scope.myForm2.lastName.$setViewValue('lastName');
      availity.mock.$scope.myForm2.firstName.$setViewValue('firstName');
      availity.mock.$scope.myForm2.invalidAllowed.$setViewValue('lastName');
      availity.mock.$scope.$digest();

      $el.triggerHandler('submit');

      availity.mock.$scope.$digest();

      //availity.mock.flush();
      expect(availity.mock.$scope.submit).toHaveBeenCalled();

    });
  });

});

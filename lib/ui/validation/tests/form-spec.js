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
              'message': 'Last name must be between 2 and 10 characters.'
            },
            'required': {
              'message': 'Last name is required.'
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
    '<form name="myForm" ng-submit="submit()" data-av-val-form="demo.rules">' +
      '<input data-ng-model="model.firstName" name="firstName" type="text" data-av-val-field="firstName"/>' +
      '<input data-ng-model="model.lastName" name="lastName" type="text" data-av-val-field="lastName"/>' +
      '<button type="submit">login</button>' +
    '</form>';

    $el = availity.mock.compileDirective(template);

  });

  describe('$dirty', function() {

    it('should be true', function() {
      availity.mock.$scope.myForm.lastName.$setViewValue('lastName');
      availity.mock.$scope.$digest();

      expect(availity.mock.$scope.myForm.$dirty).toBe(true);
      expect($el.hasClass('ng-dirty')).toBe(true);

    });

    it('should be pristine', function() {
      expect(availity.mock.$scope.myForm.$pristine).toBe(true);
      expect($el.hasClass('ng-pristine')).toBe(true);
    });

  });

  describe('submit', function() {

    it('should prevent default action', function() {

      $el.triggerHandler('submit');
      availity.mock.$scope.$digest();

      expect(availity.mock.$scope.submit).not.toHaveBeenCalled();
    });

    it('should NOT prevent default action', function() {

      availity.mock.$scope.myForm.lastName.$setViewValue('lastName');
      availity.mock.$scope.myForm.firstName.$setViewValue('firstName');
      availity.mock.$scope.$digest();

      $el.triggerHandler('submit');

      availity.mock.$scope.$digest();

      //availity.mock.flush();
      expect(availity.mock.$scope.submit).toHaveBeenCalled();

    });
  });

});

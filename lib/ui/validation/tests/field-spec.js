/*global availity, describe, it, beforeEach, expect, module*/

describe('avValField', function() {

  'use strict';

  beforeEach(function() {
    module('availity', function(avValProvider) {
      avValProvider.addRules({
        'default': {
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

    availity.mock.$scope.demo = {};
    availity.mock.$scope.demo.rules = 'default';

    var template = '' +
    '<form name="myForm" data-av-val-form="default">' +
      '<input data-ng-model="model.firstName" name="firstName" type="text" data-av-val-field="firstName"/>' +
      '<input data-ng-model="model.lastName" name="lastName" type="text" data-av-val-field="lastName"/>' +
      '<input data-ng-model="model.city" name="city" type="text"/>' +
      '<input data-ng-model="model.state" name="state" type="text" required/>' +
    '</form>';

    $el = availity.mock.compileDirective(template);

  });

  it('should be valid', function() {
    availity.mock.$scope.myForm.lastName.$setViewValue('lastName');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.myForm.lastName.$invalid).toBe(false);
  });

  it('should NOT be valid', function() {
    availity.mock.$scope.myForm.lastName.$setViewValue('1');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.myForm.lastName.$invalid).toBe(true);
  });

});

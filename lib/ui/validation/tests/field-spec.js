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
          },
          'zip': {
            'required': {
              'message': 'Zip is required.'
            }
          },
          'dateFormat': {
            'format': 'MM/DD/YYYY',
            'message': 'Format needs to be MM/DD/YYYY'
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
      '<input data-ng-model="demo.firstName" name="firstName" type="text" data-av-val-field="firstName"/>' +
      '<input data-ng-model="demo.lastName" name="lastName" type="text" data-av-val-field="lastName"/>' +
      '<input data-ng-model="demo.city" name="city" type="text"/>' +
      '<input data-ng-model="demo.state" name="state" type="text"/>' +
      '<input data-ng-model="demo.zip" name="zip"  type="text" data-av-val-field="zip" data-av-val-on="blur"/>' +
      '<input data-ng-model="demo.date" name="date" type="text" data-av-datepicker data-av-val-field="dateFormat">' +
    '</form>';

    $el = availity.mock.compileDirective(template);

  });

  it('should be valid and model should updated with new value', function() {
    availity.mock.$scope.myForm.lastName.$setViewValue('lastName');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.myForm.lastName.$invalid).toBe(false);
    expect(availity.mock.$scope.demo.lastName).toBe('lastName');
  });

  it('should NOT be valid and model should NOT be updated', function() {
    availity.mock.$scope.myForm.lastName.$setViewValue('1');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.myForm.lastName.$invalid).toBe(true);
    expect(availity.mock.$scope.demo.lastName).toBeUndefined();
  });

  describe('events', function() {

    it('should validate on blur', function() {
      availity.mock.$scope.demo.zip = null;

      $el.find('[name="zip"]').blur();
      availity.mock.$scope.$digest();
      availity.mock.flush();
      expect(availity.mock.$scope.myForm.zip.$invalid).toBe(true);
    });

  });

  describe('with avDatePicker', function() {

    it('should validate model using default format', function() {
      availity.mock.$scope.demo.date = new Date(1986, 0, 22);
      availity.mock.$scope.$digest();

      expect(availity.mock.$scope.myForm.date.$invalid).toBe(false);
      expect(availity.mock.$scope.myForm.date.$viewValue).toBe('01/22/1986');
    });

    it('should validate ISO 8601 string date model using default format', function() {
      availity.mock.$scope.demo.date = '1986-01-22T06:00:00.000+0000';
      availity.mock.$scope.$digest();

      expect(availity.mock.$scope.myForm.date.$invalid).toBe(false);
      expect(availity.mock.$scope.myForm.date.$viewValue).toBe('01/22/1986');
    });

  });

});

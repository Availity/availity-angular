/* global describe, it, availity, expect, beforeEach, module */
describe('placeholder', function() {

  'use strict';

  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<input type="text" placeholder="testing">',
    'model': '<input type="text" name="model" data-ng-model="demo.data" placeholder="testing">',
    'testValue': '<input type="text" placeholder="testing" value="test">',
    'phone': '<input data-ng-model="demo.data" name="phone" type="text" data-av-mask="phone" placeholder="testing">',
    'datepicker': '<input data-ng-model="demo.data" name="date" type="text" data-av-mask="date" data-av-datepicker placeholder="testing">',
    'custom': '<input data-ng-model="demo.data" name="custom" type="text" data-av-mask="9a99a" placeholder="testing">'
  };
  // jscs: enable
  beforeEach(function() {
    module('availity', function (avValProvider) {
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

  beforeEach(function () {
    availity.mock.$scope.demo = {};
  });

  it('should not dirty the value', function () {
    $el = availity.mock.compileDirective(fixtures['default']);
    expect($el.val()).toEqual('');

  });
  it('should not dirty the model', function () {
    availity.mock.$scope.demo = {
      data: ''
    };
    $el = availity.mock.compileDirective(fixtures['model']);
    availity.mock.flush();
    expect(availity.mock.$scope.demo.data).toEqual('');
  });

  it('should get value', function () {
    $el = availity.mock.compileDirective(fixtures['testValue']);
    expect($el.val()).toEqual('test');

  });

  describe('with validation', function() {

    beforeEach(function() {
      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.rules = 'default';

      var template = '' +
        '<form name="myForm" data-av-val-form="default">' +
        '<input data-ng-model="demo.lastName" name="lastName" type="text" data-av-val-field="lastName" placeholder="test"/>' +
      '</form>';

      $el = availity.mock.compileDirective(template);
    });

    it('should be valid with model updated', function() {
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
  });

  describe('with plugins', function() {

    it('should work with phone mask', function() {

      availity.mock.$scope.demo.data = null;
      $el = availity.mock.compileDirective(fixtures['phone']);
      $el.val('9041234567').trigger('change');
      availity.mock.$scope.$digest();

      expect(availity.mock.$scope.demo.data).toBe('(904) 123-4567');
    });

    it('should work with avDatepicker', function() {

      availity.mock.$scope.demo.data = null;
      $el = availity.mock.compileDirective(fixtures['datepicker']);

      $el.val('12122015').trigger('change');
      availity.mock.$scope.$digest();

      var date = availity.mock.$scope.demo.data;

      expect(date instanceof Date).toBe(true);
      expect(date.getFullYear()).toBe(2015);
      expect(date.getMonth()).toBe(11);
      expect(date.getDate()).toBe(12);
    });

    it('should work with custom mask format', function() {

      availity.mock.$scope.demo.data = null;
      $el = availity.mock.compileDirective(fixtures['custom']);

      $el.val('1a234').trigger('change');
      availity.mock.$scope.$digest();

      expect(availity.mock.$scope.demo.data).toBe('1a23_');
    });
  });

});

/* global describe, it, availity, expect */
describe('utils', function() {

  'use strict';

  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<input type="text" placeholder="testing">',
    'model': '<input type="text" name="model" data-ng-model="demo.data" placeholder="testing">',
    'testValue': '<input type="text" placeholder="testing" value="test">',
    'phone': '<input data-ng-model="demo.data" name="phone" type="text" data-av-mask="phone" placeholder="testing">',
    'date': '<input data-ng-model="demo.data" name="date" type="text" data-av-mask="date" placeholder="testing">',
    'datepicker': '<input data-ng-model="demo.data" name="date" type="text" data-av-mask="date" data-av-datepicker placeholder="testing">',
    'ssn': '<input data-ng-model="demo.data" name="ssn" type="text" data-av-mask="SSN" placeholder="testing">',
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
  describe('placeholder-shim', function() {
    beforeEach(function () {
      availity.mock.$scope.demo = {};
    });

    it('Should not dirty the value', function () {
      $el = availity.mock.compileDirective(fixtures['default']);
      expect($el.val()).toEqual('');

    });
    it('Should not dirty the model', function () {
      availity.mock.$scope.demo = {
        data: ''
      };
      $el = availity.mock.compileDirective(fixtures['model']);
      availity.mock.$scope.$digest();
      expect(availity.mock.$scope.demo.data).toEqual('');
    });

    it('Able to get value', function () {
      $el = availity.mock.compileDirective(fixtures['testValue']);
      expect($el.val()).toEqual('test');

    });

    describe('Works with validation', function() {
      beforeEach(function() {
        availity.mock.$scope.demo = {};
        availity.mock.$scope.demo.rules = 'default';

        var template = '' +
          '<form name="myForm" data-av-val-form="default">' +
          '<input data-ng-model="demo.firstName" name="firstName" type="text" data-av-val-field="firstName" placeholder="test"/>' +
          '<input data-ng-model="demo.lastName" name="lastName" type="text" data-av-val-field="lastName" placeholder="test"/>' +
          '<input data-ng-model="demo.city" name="city" type="text" placeholder="test"/>' +
          '<input data-ng-model="demo.state" name="state" type="text" required  placeholder="test"/>' +
          '<input data-ng-model="demo.date" name="date" type="text" data-av-datepicker data-av-val-field="dateFormat" placeholder="test">' +
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

    describe('Does not break masks', function() {
      it('Phone', function() {
        availity.mock.$scope.demo.data = null;
        $el = availity.mock.compileDirective(fixtures['phone']);
        $el.val('9041234567').trigger('change');
        availity.mock.$scope.$digest();

        expect(availity.mock.$scope.demo.data).toBe('(904) 123-4567');
      });

      it('avDatepicker', function() {
        availity.mock.$scope.demo.data = null;
        $el = availity.mock.compileDirective(fixtures['datepicker']);

        $el.val('12122015').trigger('change');
        availity.mock.$scope.$digest();

        var date = availity.mock.$scope.demo.data;

        expect(date instanceof Date).toBe(true);
        expect(date.getFullYear()).toBe(2015);
        expect(date.getMonth()).toBe(11);
        expect(date.getDate()).toBe(12);

        expect($el.data('datepicker').picker.is(':visible')).toBe(false);
        $el.focus().focus().click(); // Yes call focus twice for IE8
        expect($el.data('datepicker').picker.is(':visible')).toBe(true);
      });



      it('custom format', function() {
        availity.mock.$scope.demo.data = null;
        $el = availity.mock.compileDirective(fixtures['custom']);

        $el.val('1a234').trigger('change');
        availity.mock.$scope.$digest();

        expect(availity.mock.$scope.demo.data).toBe('1a23_');
      });
    });

  });

});

/* global describe, it, jasmine, availity, expect, beforeEach, module, inject */
describe('placeholder', function() {

  'use strict';

  var $el;
  var placeholderSniffer;
  var $compile;
  var scope;

  // jscs: disable
  var fixtures = {
    'default': '<input type="text" id="test" placeholder="testing">',
    'model': '<input type="text" name="model" data-ng-model="demo.data" placeholder="testing">',
    'testValue': '<input type="text" placeholder="testing" value="test">',
    'phone': '<input data-ng-model="demo.data" name="phone" type="text" data-av-mask="phone" placeholder="testing">',
    'datepicker': '<input data-ng-model="demo.data" name="date" type="text" data-av-mask="date" data-av-datepicker placeholder="testing">',
    'custom': '<input data-ng-model="demo.data" name="custom" type="text" data-av-mask="9a99a" placeholder="testing">'
  };
  // jscs: enable

  beforeEach(function() {
    module('ng.shims.placeholder');
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

  beforeEach(inject(function ($injector, _placeholderSniffer_) {
    $compile = $injector.get('$compile');
    scope = $injector.get('$rootScope');
    scope.form = {};
    availity.mock.$scope.demo = {};
    placeholderSniffer = _placeholderSniffer_;
    placeholderSniffer.hasPlaceholder = function() {
      return false; //force every browser to run the shim
    };
  }));

  it('should not dirty the value', function () {

    // why does this pass on travis but fails locally?
    // $el = availity.mock.compileDirective(fixtures['default']);
    // expect($el.val()).toEqual('testing');
    // expect($el.hasClass('empty')).toBe(true);

    var field = angular.element('<input type="text" id="test" placeholder="testing">');
    $compile(field)(scope);
    expect(field.val()).toBe('testing');
    expect(field.hasClass('empty')).toBe(true);
  });

  it('should not dirty the focused value', function () {
    $el = availity.mock.compileDirective(fixtures['default']);
    $el.triggerHandler('focus');
    expect($el.val()).toEqual('');
    expect($el.hasClass('empty')).toBe(false);
    $el.triggerHandler('blur');
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
      expect(availity.mock.$scope.demo.lastName).toEqual('lastName');
    });

    it('should NOT be valid and model should NOT be updated', function() {
      availity.mock.$scope.myForm.lastName.$setViewValue('1');
      availity.mock.$scope.$digest();

      expect(availity.mock.$scope.myForm.lastName.$invalid).toBe(true);
      expect(availity.mock.$scope.demo.lastName).toBeUndefined();
    });
  });

  describe('with forms', function() {

    beforeEach(function() {

      availity.mock.$scope.demo = {};
      availity.mock.$scope.submit = jasmine.createSpy('submit');

      var template = '' +
        '<form name="myForm" data-ng-submit="submit()" id="myForm">' +
          '<input data-ng-model="demo.firstName" id="input1" name="firstName" type="text" placeholder="test"/>' +
          '<input data-ng-model="demo.lastName" id="input2" name="lastName" type="text" placeholder="test"/>' +
          '<input type="submit" id="submit" value="submit"/>' +
        '</form>';

      $el = availity.mock.compileDirective(template);
    });

    it('should not dirty empty fields', function() {

      $el.triggerHandler('submit');
      availity.mock.$scope.$digest();

      expect($('#input1').val()).toEqual('test');
      expect($('#input2').val()).toEqual('test');
      expect($('#input1').hasClass('empty')).toBe(true);
      expect($('#input2').hasClass('empty')).toBe(true);

      expect(availity.mock.$scope.demo.firstName).toBeUndefined();
      expect(availity.mock.$scope.demo.lastName).toBeUndefined();
      expect(availity.mock.$scope.submit).toHaveBeenCalled();

    });

    it('should submit correct values', function() {

      $('#input1').val('Gary');
      $('#input2').val('Oak');
      $('#myForm').on('submit', function(e) {
        e.preventDefault();
        expect($('#input1').val()).toEqual('Gary');
        expect($('#input2').val()).toEqual('Oak');
      });
      $('#myForm').submit();
    });

    it('should be able to reset', function() {
      $('#input1').val('Gary');
      $('#input2').val('Oak');
      $('#myForm').on('submit', function(e) {
        e.preventDefault();
        expect($('#input1').val()).toEqual('');
        expect($('#input2').val()).toEqual('');
      });
      $('#myForm')[0].reset();
      $('#myForm').submit();
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

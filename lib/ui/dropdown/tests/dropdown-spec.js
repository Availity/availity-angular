/*global availity, spyOn, inject, describe, it, beforeEach, expect, module*/

describe('avDropdown', function() {
  'use strict';

  var $el;
  var avCodesResource;
  var $httpBackend;
  // jscs: disable
  var fixtures = {
    'default': '<select name="demoSelect" class="form-control select2" placeholder="Select One" data-av-dropdown data-ng-model="demo.selected" data-ng-options="selection for selection in demo.selections"></select>',
    'multiple': '<select name="demoSelect" class="form-control select2" placeholder="Select Multiple" data-av-dropdown data-ng-model="demo.selected" multiple data-ng-options="selection for selection in demo.selections"></select>',
    'ajax': '<input type="hidden" name="demoSelect" id="ajaxTest" class="form-control select2" data-av-dropdown data-ng-model="demo.selected" data-placeholder="Select One" data-query="demo.myQuery" data-minimum-input-length="0" data-format-result="demo.myFormatResult" data-format-selection="demo.myFormatResult">'
  };
  // jscs: enable

  var ajaxResp = {'totalCount': 560, 'count': 50, 'offset': 0, 'limit': 50, 'codes': [{'code': '1', 'value': 'Test 1'}, {'code': '2', 'value': 'Test 2'}, {'code': '3', 'value': 'Test 3'}]};
  var exampleParams = {'q': 'charizard', 'list': 'someList', 'page': 1};

  beforeEach(function() {
    module('availity');
    module('availity.ui');
    inject(function(_$httpBackend_, _avCodesResource_) {
      $httpBackend = _$httpBackend_;
      avCodesResource = _avCodesResource_;
    });
  });

  availity.mock.directiveSpecHelper();

  it('should create DOM structure', function () {
    $el = availity.mock.compileDirective(fixtures['default']);
    availity.mock.flush();
    expect($el.siblings().is('div.select2-container')).toBe(true);
  });

  describe('$ngModelController', function() {

    it('should be $pristine on load', function() {

      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.selections = ['first', 'second', 'third'];
      availity.mock.$scope.demo.selected = null;

      $el = availity.mock.compileDirective(fixtures['default']);
      availity.mock.flush();

      expect($el.data('$ngModelController').$pristine).toBe(true);

      // this should update the model and control state. this test is here
      // just to demonstrate the behavior and refresh our memory
      $el.trigger('change');
      expect($el.data('$ngModelController').$pristine).toBe(false);
      expect($el.data('$ngModelController').$dirty).toBe(true);

    });
  });

  describe('models', function() {

    it('should update when type is array', function () {

      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.selections = ['first', 'second', 'third'];
      availity.mock.$scope.demo.selected = 'first';

      $el = availity.mock.compileDirective(fixtures['default']);

      availity.mock.flush();

      availity.mock.$scope.demo.selected = 'second';
      availity.mock.$scope.$apply();
      availity.mock.flush();
      expect($el.select2('val')).toBe('1');

    });

    it('should update when types are objects', function () {

      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.selections = [
        {
          id: 1,
          value: 'first'
        },
        {
          id: 2,
          value: 'second'
        },
        {
          id: 3,
          value: 'third'
        }
      ];
      availity.mock.$scope.demo.selected = availity.mock.$scope.demo.selections[0];

      $el = availity.mock.compileDirective(fixtures['default']);

      availity.mock.flush();

      availity.mock.$scope.demo.selected = availity.mock.$scope.demo.selections[1];
      availity.mock.$scope.$apply();
      availity.mock.flush();
      expect($el.select2('val')).toBe('1');

    });

    it('should update when types are ints for multiselect', function () {

      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.selections = [
        {
          id: 1,
          value: 'first'
        },
        {
          id: 2,
          value: 'second'
        },
        {
          id: 3,
          value: 'third'
        }
      ];
      availity.mock.$scope.demo.selected = availity.mock.$scope.demo.selections[0];

      $el = availity.mock.compileDirective(fixtures['multiple']);

      availity.mock.flush();

      availity.mock.$scope.demo.selected = [1, 2];
      availity.mock.$scope.$apply();
      availity.mock.flush();
      expect($el.select2('val')).toEqual(['1', '2']);

    });

    it('should update when types are objects for multiselect', function () {

      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.selections = [
        {
          id: 1,
          value: 'first'
        },
        {
          id: 2,
          value: 'second'
        },
        {
          id: 3,
          value: 'third'
        }
      ];
      availity.mock.$scope.demo.selected = availity.mock.$scope.demo.selections[0];

      $el = availity.mock.compileDirective(fixtures['multiple']);

      availity.mock.flush();

      availity.mock.$scope.demo.selected = [availity.mock.$scope.demo.selections[1], availity.mock.$scope.demo.selections[2]];
      availity.mock.$scope.$apply();
      availity.mock.flush();
      expect($el.select2('val')).toEqual(['1', '2']);

    });

    it('should support null values', function () {

      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.selections = [
        {
          id: 1,
          value: 'first'
        },
        {
          id: 2,
          value: 'second'
        },
        {
          id: 3,
          value: 'third'
        }
      ];
      availity.mock.$scope.demo.selected = availity.mock.$scope.demo.selections[0];

      $el = availity.mock.compileDirective(fixtures['default']);

      availity.mock.flush();

      availity.mock.$scope.demo.selected = null;
      availity.mock.$scope.$apply();
      availity.mock.flush();
      expect($el.select2('val')).toBe('');

    });

  });

  describe('query', function() {

    beforeEach(inject(function() {

      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.selected = null;
      availity.mock.$scope.demo.myQuery = function() {};
      availity.mock.$scope.demo.myFormatResult = function() {};

      spyOn(availity.mock.$scope.demo, 'myQuery').and.callFake(function() {
        return avCodesResource.getCodes(exampleParams);
      });

      spyOn(availity.mock.$scope.demo, 'myFormatResult').and.callFake(function(code) {
        return code.value;
      });

    }));

    it('should correctly setup up the DOM using hidden input', function() {

      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();
      expect($el.siblings().is('div.select2-container')).toBeDefined();

    });

    it('should NOT have results', function() {

      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();
      expect($('.select2-result').length).toEqual(0);

    });

    it('should query results', function() {

      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();
      $el.select2('open');
      $el.select2('search', 'charizard');
      $httpBackend.expect('GET','/api/v1/codes?list=someList&offset=0&q=charizard').respond(200, ajaxResp);
      $httpBackend.flush();
      expect(availity.mock.$scope.demo.myQuery).toHaveBeenCalled();

    });

    it('should format results', function() {

      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();

      $el.select2('open');
      $el.select2('data', ajaxResp.codes[0]);
      $httpBackend.expect('GET','/api/v1/codes?list=someList&offset=0&q=charizard').respond(200, ajaxResp);
      $httpBackend.flush();
      expect(availity.mock.$scope.demo.myFormatResult).toHaveBeenCalled();

    });

    it('should update model', function() {

      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();

      var validValue = ajaxResp.codes[0];
      validValue.id = '1';

      var event = jQuery.Event('change');
      event.added = validValue;
      $el.trigger(event);
      availity.mock.flush();

      expect(availity.mock.$scope.demo.selected).toBe(validValue);

    });

  });

});

/*global availity, spyOn, inject, describe, it, beforeEach, expect, module*/

describe('avDropdown', function() {

  'use strict';

  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<select name="demoSelect" class="form-control select2" placeholder="Select One" data-av-dropdown data-ng-model="demo.selected" data-ng-options="selection for selection in demo.selections"></select>',
    'ajax': '<input type="hidden" name="demoSelect" id="ajaxTest" class="form-control select2" data-av-dropdown data-ng-model="demo.selected" data-placeholder="Select One" data-query="myQuery" data-minimum-input-length="0" data-format-result="myFormatResult" data-format-selection="myFormatResult">'
  };
  // jscs: enable

  var ajaxResp = {'totalCount': 560, 'count': 50, 'offset': 0, 'limit': 50, 'codes': [{'code': '1', 'value': 'Test 1'}, {'code': '2', 'value': 'Test 2'}, {'code': '3', 'value': 'Test 3'}]};

  beforeEach(function() {
    module('availity');
    module('availity.ui');
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

        debugger;

        var myResults = ajaxResp.codes;
        if(_.isEmpty(myResults[0].id)) {
          _.each(myResults, function (code) {
            code.id = code.code;
          });
        }

        return availity.mock.$q.when({
          results: myResults
        });
      });

      spyOn(availity.mock.$scope.demo, 'myFormatResult').and.callFake(function(code) {
        debugger;
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

    it('should get results', function() {

      $el = availity.mock.compileDirective(fixtures['ajax']);
      debugger;


      $el.select2('open');


    });

    // it('should get a value from results', function() {
    //   availity.mock.$httpBackend.expectGET('/api/v1/codes').respond(200, ajaxResp);
    //   AvCodesResource.getCodes = function () {
    //     //config for the api resource query
    //     return AvCodesResource.query().then(function (response) {
    //       //format the response into something select2 can read
    //       var myResults = response.data.codes;
    //       if(_.isEmpty(myResults[0].id)) {
    //         _.each(myResults, function (code) {
    //           code.id = code.code;
    //         });
    //       }
    //       testCallback(myResults);
    //       return {
    //         results: myResults
    //       };

    //     });
    //   };
    //   $el = availity.mock.compileDirective(fixtures['ajax']);
    //   availity.mock.flush();
    //   $el.select2('open');
    //   var testCallback = function(results) {
    //     availity.mock.$scope.demo.selected = results[0];
    //     availity.mock.flush();
    //     availity.mock.$scope.$apply();
    //     expect(availity.mock.$scope.demo.selected).not.toBeNull();
    //   };
    //   availity.mock.$httpBackend.flush();
    // });

  });

});

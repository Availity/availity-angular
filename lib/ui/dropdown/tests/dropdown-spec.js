/*global availity, describe, it, beforeEach, expect, module*/

describe('avDropdown', function() {

  'use strict';

  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<select name="demoSelect" class="form-control select2" placeholder="Select One" data-av-dropdown data-ng-model="demo.selected" data-ng-options="selection for selection in demo.selections"></select>',
    'ajax': '<input type="hidden" name="demoSelect" id="ajaxTest" class="form-control select2" data-av-dropdown data-ng-model="demo.selected" data-placeholder="Select One" data-ajax="myAjax" data-minimum-input-length="0" data-format-result="myFormatResult" data-format-selection="myFormatResult">'
  };
  // jscs: enable

  var ajaxResp = {"totalCount" : 560, "count" : 50, "offset" : 0, "limit" : 50, "codes" : [ {"code" : "1", "value" : "Test 1"}, {"code" : "2", "value" : "Test 2"}, {"code" : "3", "value" : "Test 3"}]};

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

  describe('$ngModelController should be in proper state ', function() {

    it('to be $pristine on load', function() {

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

  describe('should update dropdown model', function() {

    it('for string array', function () {

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

    it('for object array', function () {

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

    it('for null value', function () {

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


  describe("should work with ajax", function() {

    beforeEach(function() {
      $.mockjax({
        url:"/api/v1/codes.json",
        status: 200,
        response: function(settings) {
          this.responseText = ajaxResp;
        }
      });

      availity.mock.$scope.demo = {};
      availity.mock.$scope.demo.selected = null;

      availity.mock.$scope.myAjax = {
        url: "/api/v1/codes.json",
        dataType: 'json',
        delay: 0,
        data: function (term, page) {
          var limit = 50;
          var p = (page - 1) % 2; // we have two data sets to show off offsets. this alternates between them
          return {
            q: term, // search term
            offset: ( p * limit )
          };
        },
        results: function (data, page) {
          var myResults = data.codes;
          if(_.isEmpty(myResults[0].id)) {
            _.each(myResults, function (code) {
              code.id = code.code;
            });
          }
          return {
            results: myResults
          };
        },
        cache: true
      };

      availity.mock.$scope.myFormatResult = function(code) {
        return code.value;
      };
    });

    it('should set up the DOM (since it works differently)', function() {
      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();
      expect($el.siblings().is('div.select2-container')).toBe(true);
    });

    it('should not already have results', function(done) {
      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();
      expect($(".select2-result").length).toEqual(0);
      setTimeout(function() {
        done()
      }, 500);
    });

    it('should get results', function(done) {
      var test = {
        testCallback: function(results) {
          expect(results.length).not.toEqual(0);
          done();
        }
      };
      availity.mock.$scope.myAjax.results = function (data, page) { // overriding for test callback
        var myResults = data.codes;
        if(_.isEmpty(myResults[0].id)) {
          _.each(myResults, function(code){
            code.id = code.code;
          });
        }
        test.testCallback(myResults);
        return {
          results: myResults
        }
      };

      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();
      $el.select2('open');
      setTimeout(function() {
        done();
      }, 1000);
    });

    it('should get a value from results', function(done) {
      availity.mock.$scope.myAjax.results = function (data, page) { // overriding for test callback
        var myResults = data.codes;
        if(_.isEmpty(myResults[0].id)) {
          _.each(myResults, function(code){
            code.id = code.code;
          });
        }
        testCallback(myResults);
        return {
          results: myResults
        }
      };
      $el = availity.mock.compileDirective(fixtures['ajax']);
      availity.mock.flush();
      $el.select2('open');
      var testCallback = function(results) {
        availity.mock.$scope.demo.selected = results[0];
        availity.mock.flush();
        availity.mock.$scope.$apply();
        expect(availity.mock.$scope.demo.selected).not.toBeNull();
      };

      setTimeout(function() {
        done();
      }, 1000);

    });



  });

});

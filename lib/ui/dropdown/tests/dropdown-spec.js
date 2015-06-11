/*global availity, describe, it, beforeEach, expect, module*/

describe('avDropdown', function() {

  'use strict';

  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<select name="demoSelect" class="form-control select2" placeholder="Select One" data-av-dropdown data-ng-model="demo.selected" data-ng-options="selection for selection in demo.selections"></select>'
  };
  // jscs: enable

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

    it('should update types are objects', function () {

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

});

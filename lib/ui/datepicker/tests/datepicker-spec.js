/* global beforeEach, availity, afterEach, expect, module, describe, it */
/**
 * Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/test/unit/directives/datepickerSpec.js
 */
describe('avDatepicker', function() {

  'use strict';

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();
  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker>',
    'formatted-alt': '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker data-format="\'dd-mm-yyyy\'">',
    'addon': '<input type="text" ng-model="selectedDate" data-av-datepicker><span class="input-group-btn" data-toggle="datepicker"> <button class="btn btn-default" type="button"><span class="icon icon-calendar"></span></button></span>'
  };
  // jscs: enable

  afterEach(function() {
    $el.data('datepicker').picker.remove();
  });

  it('should open on click', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.data('datepicker').picker.is(':visible')).toBe(false);
    $el.focus().focus().click(); // Yes call focus twice for IE8
    expect($el.data('datepicker').picker.is(':visible')).toBe(true);
  });

  it('should correctly initialize date from MODEL', function() {
    availity.mock.$scope.selectedDate = new Date(1986, 0, 22);
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('01/22/1986');
  });

  it('should correctly initialize ISO 8601 date from MODEL', function() {
    availity.mock.$scope.selectedDate = '1986-01-22T06:00:00.000+0000';
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('01/22/1986');
  });

  it('should correctly ignore undefined date from MODEL', function() {
    availity.mock.$scope.selectedDate = undefined;
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('');
  });

  it('should correctly ignore null date from MODEL', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('');
  });

  it('should correctly ignore empty date from MODEL', function() {
    availity.mock.$scope.selectedDate = '';
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('');
  });

  it('should correctly parse formatted date from VIEW', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['default']);

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('01/20/1987');

    var date = availity.mock.$scope.selectedDate;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1987);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(20);
  });

  it('should correctly parse ALTERNATE formatted date', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['formatted-alt']);

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('13-01-1978');

    var date = availity.mock.$scope.selectedDate;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1978);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(13);
  });

  it('should not default to current date when input is invalid', function() {

    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['formatted-alt']);

    var ngModel = $el.data('$ngModelController');
    $el.focus().focus().click(); // Yes call focus twice for IE8
    ngModel.$setViewValue('apple');
    $el.blur().blur().click();
    var date = ngModel.$viewValue;
    expect(date).toBe('apple');
  });

});

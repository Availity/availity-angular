/* global beforeEach, availity, afterEach, expect, module, describe, it */
/**
 * Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/test/unit/directives/datepickerSpec.js
 */
describe('datepicker', function() {

  'use strict';

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();
  var $el;

  var fixtures = {
    'default': '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker>',
    'formatted-alt': '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker data-format="\'dd-mm-yyyy\'">',
    'addon': '<input type="text" ng-model="selectedDate" data-av-datepicker><span class="input-group-btn" data-toggle="datepicker"> <button class="btn btn-default" type="button"><span class="icon icon-calendar"></span></button></span>'
  };

  afterEach(function() {
    $el.data('datepicker').picker.remove();
  });

  it('should open on click', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['default']);
    availity.mock.flush();

    expect($el.data('datepicker').picker.is(':visible')).toBe(false);
    $el.focus().focus().click(); // Yes call focus twice for IE8
    expect($el.data('datepicker').picker.is(':visible')).toBe(true);
  });

  it('should correctly intialize date from model', function() {
    availity.mock.$scope.selectedDate = new Date(1986, 0, 22);
    $el = availity.mock.compileDirective(fixtures['default']);
    availity.mock.flush();

    expect($el.val()).toBe('01/22/1986');
  });

  it('should correctly parse formatted date from view', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['default']);
    availity.mock.flush();

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
    availity.mock.flush();

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('13-01-1978');

    var date = availity.mock.$scope.selectedDate;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1978);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(13);
  });

  // it('should show the datepicker on [data-toggle="datepicker"] click', function() {
  //   availity.mock.$scope.selectedDate = null;
  //   $el = availity.mock.compileDirective(fixtures['addon']);
  //   availity.mock.flush();
  //   $el.next('[data-toggle="datepicker"]').click();
  //   expect($el.data('datepicker').picker.is(':visible')).toBe(true);
  // });


});

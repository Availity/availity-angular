/*global beforeEach, availity, afterEach, expect, module, describe, it */

describe('datepicker', function() {

  'use strict';

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();
  var $el, template;

  beforeEach(function() {
    template = '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker>';
  });

  afterEach(function() {
    $el.data('datepicker').picker.remove();
  });

  it('should open on click', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(template);
    availity.mock.flush();

    expect($('body').find('.datepicker-dropdown').length).toBe(0);
    $el.focus().focus().click(); // Yes call focus x2 for IE8
    expect($('body').find('.datepicker-dropdown').length).toBe(1);
  });

  it('should correctly intialize date from model', function() {
    availity.mock.$scope.selectedDate = new Date(1986, 0, 22);
    $el = availity.mock.compileDirective(template);
    availity.mock.flush();

    expect($el.val()).toBe('01/22/1986');
  });

  it('should correctly parse formatted date from view', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(template);
    availity.mock.flush();

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('01/20/1987');

    var date = availity.mock.$scope.selectedDate;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1987);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(20);
  });



});

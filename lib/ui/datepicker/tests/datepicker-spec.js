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

  it('should correctly display initialized date', function() {
    availity.mock.$scope.selectedDate = new Date(1986, 1, 22);
    $el = availity.mock.compileDirective(template);
    availity.mock.flush();

    expect($el.val()).toBe('02/22/1986');
  });



});

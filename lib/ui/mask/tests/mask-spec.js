/* global describe, beforeEach, module, availity, it, expect */
describe('avMask', function() {

  'use strict';

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();
  var $el;

  var fixtures = {
    'phone': '<input id="input" data-ng-model="data" name="phone" type="text" data-av-mask="PHONE">',
    'date': '<input id="input" data-ng-model="data" name="date" type="text" data-av-mask="DATE">',
    'ssn': '<input id="input" data-ng-model="data" name="ssn" type="text" data-av-mask="SSN">',
    'custom': '<input id="input" data-ng-model="data" name="custom" type="text" data-av-mask="9a99a">'
  };

  it('should change 9041234567 to (904)123-4567', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['phone']);

    $el.val("9041234567");

    expect($el.val()).toBe('(904)123-4567');
  });

  it('should change 90412345aa to (904)123-45__', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['phone']);

    $el.val("90412345aa");

    expect($el.val()).toBe('(904)123-45__');
  });

  it('should change 11112015 to 11/11/2015', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['date']);

    $el.val("11112015");

    expect($el.val()).toBe('11/11/2015');
  });

  it('should change 123456789 to 123-45-6789', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['ssn']);

    $el.val("123456789");

    expect($el.val()).toBe('123-45-6789');
  });

  it('should change 1a234 to 1a23_', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['custom']);

    $el.val("1a234");

    expect($el.val()).toBe('1a23_');
  });
});

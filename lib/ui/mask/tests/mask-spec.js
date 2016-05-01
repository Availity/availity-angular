/* global describe, xit, beforeEach, module, availity, it, expect */
/* global describe, xit, beforeEach, module, availity, it, expect */
describe('avMask', function() {

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();

  let $el;
  const fixtures = {
    'phone': '<input data-ng-model="demo.data" name="phone" type="text" data-av-mask="phone">',
    'date': '<input data-ng-model="demo.data" name="date" type="text" data-av-mask="date">',
    'datepicker': '<input data-ng-model="demo.data" name="date" type="text" data-av-mask="date" data-av-datepicker>',
    'ssn': '<input data-ng-model="demo.data" name="ssn" type="text" data-av-mask="SSN">',
    'custom': '<input data-ng-model="demo.data" name="custom" type="text" data-av-mask="9a99a">'
  };

  beforeEach(function() {
    availity.mock.$scope.demo = {};
  });

  it('should format phone number using AV_MASK.DEFAULTS.phone', function() {

    availity.mock.$scope.demo.data = null;
    $el = availity.mock.compileDirective(fixtures.phone);
    $el.val('9041234567').trigger('change');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.demo.data).toBe('(904) 123-4567');
  });

  it('should format date using AV_MASK.DEFAULTS.date', function() {

    availity.mock.$scope.demo.data = null;
    $el = availity.mock.compileDirective(fixtures.date);
    $el.val('11112015').trigger('change');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.demo.data).toBe('11/11/2015');
  });

  it('should format SSN using AV_MASK.DEFAULTS.SSN', function() {

    availity.mock.$scope.demo.data = null;
    $el = availity.mock.compileDirective(fixtures.ssn);
    $el.val('123456789').trigger('change');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.demo.data).toBe('123-45-6789');
  });

  xit('should show default mask format on focus or hover', function() {
    $el = availity.mock.compileDirective(fixtures.phone);
    $el.focus().focus();

    expect($el.val()).toBe('(___) ___-____');
    $el.trigger('blur').trigger('mouseenter');
    expect($el.val()).toBe('(___) ___-____');
  });

  it('should integrate avDatepicker', function() {
    availity.mock.$scope.demo.data = null;
    $el = availity.mock.compileDirective(fixtures.datepicker);

    $el.val('12122015').trigger('change');
    availity.mock.$scope.$digest();

    const date = availity.mock.$scope.demo.data;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(2015);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(12);
  });

  it('should apply mask with custom format', function() {
    availity.mock.$scope.demo.data = null;
    $el = availity.mock.compileDirective(fixtures.custom);

    $el.val('1a234').trigger('change');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.demo.data).toBe('1a23_');
  });
});
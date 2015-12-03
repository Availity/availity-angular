/*global describe, it, beforeEach, expect, module, inject*/
describe('avValDate', function () {
  'use strict';

  var avValDate;
  var rules;

  beforeEach(module('availity'));

  beforeEach(inject(function(_avValDate_, AV_VAL) {
    avValDate = _avValDate_;
    rules = { format: AV_VAL.DATE_FORMAT.SIMPLE };
  }));

  it('should be a valid', function () {
    expect(avValDate.validate('02/02/2015', rules)).toBe(true);
  });

  it('should NOT be valid', function() {
    expect(avValDate.validate('20/02/2015', rules)).toBe(false);
  });

  it('should use default date format if one is not provided', function() {
    expect(avValDate.validate('02/02/2015', {})).toBe(true);
  });

});

/*global describe, it, beforeEach, expect, module, inject*/
describe('avValPhone', function () {
  'use strict';

  var valPhone;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValPhone) {
    valPhone = avValPhone;
  }));

  it('should be a valid', function () {
    expect(valPhone.validate('123.456.7890')).toBe(true);
    expect(valPhone.validate('123-456-7890')).toBe(true);
    expect(valPhone.validate('(123)456.7890')).toBe(true);
    expect(valPhone.validate('(123)456-7890')).toBe(true);
    expect(valPhone.validate('1234567890')).toBe(true);
  });

  it('should NOT be valid', function() {
    expect(valPhone.validate('123-456-789')).toBe(false);
    expect(valPhone.validate('123-456-78900')).toBe(false);
    expect(valPhone.validate('abc-def-ghij')).toBe(false);
  });

});

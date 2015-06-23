/*global describe, it, beforeEach, expect, module, inject*/

describe('avValInvalid', function () {

  'use strict';

  var invalid;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValInvalid) {
    invalid = avValInvalid;
  }));

  it('should never be a valid', function () {
    expect(invalid.validate('')).toBe(false);
    expect(invalid.validate(undefined)).toBe(false);
    expect(invalid.validate('fdfdfdf')).toBe(false);
    expect(invalid.validate(1212)).toBe(false);
  });

});

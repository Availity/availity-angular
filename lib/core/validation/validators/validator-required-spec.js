/*global describe, it, beforeEach, expect, module, inject*/

describe('avValRequired', function () {

  'use strict';

  var required;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValRequired) {
    required = avValRequired;
  }));

  it('should be a valid', function () {
    expect(required.validate('test')).toBe(true);

  });

  it('should Not be a valid', function () {
    expect(required.validate('')).toBe(false);
    expect(required.validate(undefined)).toBe(false);

  });

});

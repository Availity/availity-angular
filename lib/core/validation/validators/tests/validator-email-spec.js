/*global describe, it, beforeEach, expect, module, inject*/
describe('avValEmail', function () {
  'use strict';

  var valEmail;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValEmail) {
    valEmail = avValEmail;
  }));

  it('should be a valid', function () {
    expect(valEmail.validate('test@availity.com')).toBe(true);
    expect(valEmail.validate('a@a.a')).toBe(true);
    expect(valEmail.validate('1@1.1')).toBe(true);
  });

  it('should NOT be valid', function() {
    expect(valEmail.validate('test@availity')).toBe(false);
    expect(valEmail.validate('a@a')).toBe(false);
    expect(valEmail.validate('a.a')).toBe(false);
  });

});

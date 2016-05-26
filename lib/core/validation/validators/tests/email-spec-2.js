/* global describe, it, beforeEach, expect, module, inject*/

import angular from 'angular';

import '../email';

describe('avValEmail', () => {

  let valEmail;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject(avValEmail => {
    valEmail = avValEmail;
  }));

  it('should be a valid', () => {
    expect(valEmail.validate('test@availity.com')).toBe(true);
    expect(valEmail.validate('a@a.a')).toBe(true);
    expect(valEmail.validate('1@1.1')).toBe(true);
  });

  it('should NOT be valid', () => {
    expect(valEmail.validate('test@availity')).toBe(false);
    expect(valEmail.validate('a@a')).toBe(false);
    expect(valEmail.validate('a.a')).toBe(false);
  });

});

/* global describe, it, beforeEach, expect, module, inject*/

import angular from 'angular';

import '../required';

describe('avValRequired', () => {
  let required;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject(avValRequired => {
    required = avValRequired;
  }));

  it('should be a valid', () => {
    expect(required.validate('test')).toBe(true);

  });

  it('should Not be a valid', () => {
    expect(required.validate('')).toBe(false);
    expect(required.validate(undefined)).toBe(false);

  });
});

/* global describe, it, beforeEach, expect, module, inject */

import angular from 'angular';

import '../required';

describe('avValRequired', () => {

  let required;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject(avValRequired => {
    required = avValRequired;
  }));

  it('should be a valid', () => {
    expect(required.validate({value: 'test'})).toBe(true);

  });

  it('should Not be a valid', () => {
    expect(required.validate({value: ''})).toBe(false);
    expect(required.validate({value: undefined})).toBe(false);

  });
});

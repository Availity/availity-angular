/* global describe, it, beforeEach, expect, module, inject */

import angular from 'angular';

import '../phone';

describe('avValPhone', () => {
  let valPhone;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject(avValPhone => {
    valPhone = avValPhone;
  }));

  it('should be a valid', () => {
    expect(valPhone.validate({value: '123.456.7890'})).toBe(true);
    expect(valPhone.validate({value: '123-456-7890'})).toBe(true);
    expect(valPhone.validate({value: '(123)456.7890'})).toBe(true);
    expect(valPhone.validate({value: '(123)456-7890'})).toBe(true);
    expect(valPhone.validate({value: '1234567890'})).toBe(true);
  });

  it('should NOT be valid', () => {
    expect(valPhone.validate({value: '123-456-789'})).toBe(false);
    expect(valPhone.validate({value: '123-456-78900'})).toBe(false);
    expect(valPhone.validate({value: 'abc-def-ghij'})).toBe(false);
  });

});

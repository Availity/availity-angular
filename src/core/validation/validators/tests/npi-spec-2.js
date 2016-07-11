/* global describe, it, beforeEach, expect, module, inject*/

import angular from 'angular';

import '../npi';

describe('avValNpi', () => {

  let avValNpi;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject(_avValNpi_ => {
    avValNpi = _avValNpi_;
  }));

  it('should validate if NPI is empty, undefined or null', () => {
    expect(avValNpi.validate({value: undefined})).toBe(true);
    expect(avValNpi.validate({value: ''})).toBe(true);
    expect(avValNpi.validate({value: null})).toBe(true);
  });

  it('should NOT validate if NPI contains non-digits', () => {
    expect(avValNpi.validate({value: 'i2eh56789o'})).toBe(false);
  });

  it('should NOT validate if NPI is not 10 digits in length', () => {
    expect(avValNpi.validate({value: '123456789'})).toBe(false);
    expect(avValNpi.validate({value: '12345678901'})).toBe(false);
  });

  it('should NOT validate if NPI does not start with a 1, 2, 3, or 4', () => {
    expect(avValNpi.validate({value: '5678901234'})).toBe(false);
  });

  it('should NOT validate if NPI checksum does not match check digit', () => {
    expect(avValNpi.validate({value: '1234567890'})).toBe(false);
  });

  it('should validate if NPI is valid', () => {
    expect(avValNpi.validate({value: '1234567893'})).toBe(true);
  });

});

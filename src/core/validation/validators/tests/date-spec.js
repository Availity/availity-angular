/* global describe, it, beforeEach, expect, module, inject */

import angular from 'angular';

import '../date';

describe('avValDate', () => {
  let avValDate;
  let constraint;
  let constraintWithFormat;

  beforeEach(angular.mock.module('availity'));

  beforeEach(
    inject((_avValDate_, AV_VAL) => {
      avValDate = _avValDate_;
      constraint = { format: AV_VAL.DATE_FORMAT.SIMPLE };
      constraintWithFormat = { format: 'MMDDYYYY' };
    })
  );

  it('should be a valid', () => {
    expect(avValDate.validate({ value: '02/02/2015', constraint })).toBe(true);
  });

  it('should NOT be valid', () => {
    expect(avValDate.validate({ value: '20/02/2015', constraint })).toBe(false);
  });

  it('custom format, should be a valid', () => {
    expect(
      avValDate.validate({
        value: '02022015',
        constraint: constraintWithFormat
      })
    ).toBe(true);
  });

  it('custom format, should NOT be valid', () => {
    expect(
      avValDate.validate({
        value: '02/02/2015',
        constraint: constraintWithFormat
      })
    ).toBe(false);
  });

  it('should use default date format if one is not provided', () => {
    expect(avValDate.validate({ value: '02/02/2015', constraint: {} })).toBe(
      true
    );
  });
});

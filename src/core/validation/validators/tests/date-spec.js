/* global describe, it, beforeEach, expect, module, inject */

import angular from 'angular';

import '../date';

describe('avValDate', () => {
  let avValDate;
  let contraint;
  let contraintWithFormat;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject((_avValDate_, AV_VAL) => {
    avValDate = _avValDate_;
    contraint = { format: AV_VAL.DATE_FORMAT.SIMPLE };
    contraintWithFormat = { format: 'MMDDYYYY' };
  }));

  it('should be a valid', () => {
    expect(avValDate.validate({value: '02/02/2015', constraint: contraint})).toBe(true);
  });

  it('should NOT be valid', () => {
    expect(avValDate.validate({value: '20/02/2015', constraint: contraint})).toBe(false);
  });

  it('custom format, should be a valid', () => {
    expect(avValDate.validate({value: '02022015', constraint: contraintWithFormat})).toBe(true);
  });

  it('custom format, should NOT be valid', () => {
    expect(avValDate.validate({value: '02/02/2015', constraint: contraintWithFormat})).toBe(false);
  });

  it('should use default date format if one is not provided', () => {
    expect(avValDate.validate({value: '02/02/2015', contraint: {}})).toBe(true);
  });
});

/* global describe, it, beforeEach, expect, module, inject */

import angular from 'angular';

import '../date';

describe('avValDate', () => {
  let avValDate;
  let rules;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject((_avValDate_, AV_VAL) => {
    avValDate = _avValDate_;
    rules = { format: AV_VAL.DATE_FORMAT.SIMPLE };
  }));

  it('should be a valid', () => {
    expect(avValDate.validate('02/02/2015', rules)).toBe(true);
  });

  it('should NOT be valid', () => {
    expect(avValDate.validate('20/02/2015', rules)).toBe(false);
  });

  it('should use default date format if one is not provided', () => {
    expect(avValDate.validate('02/02/2015', {})).toBe(true);
  });
});

/* global describe, it, sinon, beforeEach, afterEach, expect, module, inject */

import angular from 'angular';

import '../date-range';

describe('avValDateRange', () => {

  let dateRange;
  let rules;
  let rulesFromTo;
  let clock;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject(avValDateRange => {

    clock = sinon.useFakeTimers(new Date(2015, 4, 15).getTime());

    dateRange = avValDateRange;

    rules = {
      'start': {
        'value': '-1',
        'units': 'days'
      },
      'end': {
        'value': '1',
        'units': 'months'
      },
      'format': 'MMDDYYYY',
      'message': 'Date Range is not correct.'
    };

    rulesFromTo = {
      'start': {
        'value': '05022015'
      },
      'end': {
        'value': '05152015'
      },
      'format': 'MMDDYYYY',
      'message': 'Date Range is not correct.'
    };

  }));

  afterEach(() => {
    clock.restore();
  });

  it('should be a valid', () => {

    // Fake today set to 05152015
    expect(dateRange.validate({value: '05142015', constraint: rules})).toBe(true);
    expect(dateRange.validate({value: '06142015', constraint: rules})).toBe(true);
    expect(dateRange.validate({value: '05022015', constraint: rulesFromTo})).toBe(true);
    expect(dateRange.validate({value: '05052015', constraint: rulesFromTo})).toBe(true);
  });

  it('should be a invalid', () => {

    // Fake today set to 05152015
    expect(dateRange.validate({value: '04292015', constraint: rules})).toBe(false);
    expect(dateRange.validate({value: '05132015', constraint: rules})).toBe(false);
    expect(dateRange.validate({value: '06292015', constraint: rules})).toBe(false);
    expect(dateRange.validate({value: '05012015', constraint: rulesFromTo})).toBe(false);
    expect(dateRange.validate({value: '05162015', constraint: rulesFromTo})).toBe(false);

    // Format Checks
    expect(dateRange.validate({value: '04452015', constraint: rules})).toBe(false);
    expect(dateRange.validate({value: '04462015', constraint: rules})).toBe(false);
    expect(dateRange.validate({value: '04472015', constraint: rules})).toBe(false);
    expect(dateRange.validate({value: '17132014', constraint: rulesFromTo})).toBe(false);
    expect(dateRange.validate({value: '17142014', constraint: rulesFromTo})).toBe(false);

  });

});

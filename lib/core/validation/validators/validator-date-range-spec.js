/*global describe, it, sinon, beforeEach, afterEach, expect, module, inject*/
describe('avValDateRange', function () {
  'use strict';

  var dateRange;
  var rules;
  var rulesFromTo;
  var clock;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValDateRange) {

    clock = sinon.useFakeTimers(new Date(2015,4,15).getTime());

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

  afterEach(function() {
    clock.restore();
  });

  it('should be a valid', function () {

    // fake today set to 05152015
    expect(dateRange.validate('05142015', rules)).toBe(true);
    expect(dateRange.validate('06142015', rules)).toBe(true);
    expect(dateRange.validate('05022015', rulesFromTo)).toBe(true);
    expect(dateRange.validate('05052015', rulesFromTo)).toBe(true);
  });

  it('should be a invalid', function () {

    // fake today set to 05152015
    //
    expect(dateRange.validate('04292015', rules)).toBe(false);
    expect(dateRange.validate('05132015', rules)).toBe(false);
    expect(dateRange.validate('06292015', rules)).toBe(false);
    expect(dateRange.validate('05012015', rulesFromTo)).toBe(false);
    expect(dateRange.validate('05162015', rulesFromTo)).toBe(false);
    //Format Checks
    expect(dateRange.validate('04452015', rules)).toBe(false);
    expect(dateRange.validate('04462015', rules)).toBe(false);
    expect(dateRange.validate('04472015', rules)).toBe(false);
    expect(dateRange.validate('17132014', rulesFromTo)).toBe(false);
    expect(dateRange.validate('17142014', rulesFromTo)).toBe(false);

  });


});

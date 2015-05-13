/*global describe, it, beforeEach, expect, module, inject*/
describe('avValDate', function () {
  'use strict';

  var dateRange, rules, rulesFromTo;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValDateRange) {
    dateRange = avValDateRange;
    rules = { 
      'start': {
        'value': '-10',
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

  it('should be a valid', function () {
    expect(dateRange.validate('05032015', rules)).toBe(true);
    expect(dateRange.validate('06122015', rules)).toBe(true);
    
    expect(dateRange.validate('05022015', rulesFromTo)).toBe(true);
    expect(dateRange.validate('05052015', rulesFromTo)).toBe(true);
  });

  it('should be a invalid', function () {
    expect(dateRange.validate('04292015', rules)).toBe(false);
    expect(dateRange.validate('06292015', rules)).toBe(false);
    expect(dateRange.validate('05012015', rulesFromTo)).toBe(false);
    expect(dateRange.validate('05162015', rulesFromTo)).toBe(false);
  });



});
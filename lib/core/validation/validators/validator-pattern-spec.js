/*global describe, it, beforeEach, expect, module, inject*/
describe('avValPattern', function () {
  'use strict';

  var patternTest;
  var zipRule;
  var icd9Rule;
  var ssnRule;
  var taxidRule;
  var taxidRuleArray;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValPattern) {
    patternTest = avValPattern;
    zipRule = {value: /^\d{5}$/};
    icd9Rule = {value: /^(V\d{2}(\.\d{1,2})?|\d{3}(\.\d{1,2})?|E\d{3}(\.\d)?)$/};
    ssnRule = {value: /^\d{3}-?\d{2}-?\d{4}$/};
    taxidRule = {value: /^(\d{3}-?\d{2}-?\d{4}|[0-9]{2}-[0-9]{7}|9\d{2}-[7,8]\d-\d{4}|[Pp]?-?\d{8})$/};
    taxidRuleArray = {
      value: [
        /^\d{3}-?\d{2}-?\d{4}$/,
        /^[0-9]{2}-[0-9]{7}$/,
        /^9\d{2}-[7,8]\d-\d{4}$/,
        /^[Pp]?-?\d{8}$/
      ]
    };
  }));

  it('should be a valid ZIP', function() {
    expect(patternTest.validate('12345', zipRule)).toBe(true);
  });

  it('should NOT be a valid ZIP', function() {
    expect(patternTest.validate('123453', zipRule)).toBe(false);
  });

  it('should be a valid ICD-9 code', function() {
    expect(patternTest.validate('V10.12', icd9Rule)).toBe(true);
    expect(patternTest.validate('V12', icd9Rule)).toBe(true);
    expect(patternTest.validate('E000.0', icd9Rule)).toBe(true);
    expect(patternTest.validate('E002', icd9Rule)).toBe(true);
    expect(patternTest.validate('730.12', icd9Rule)).toBe(true);
    expect(patternTest.validate('730', icd9Rule)).toBe(true);
  });

  it('should NOT be a valid ICD-9 code', function() {
    expect(patternTest.validate('V103.12', icd9Rule)).toBe(false);
    expect(patternTest.validate('V123', icd9Rule)).toBe(false);
    expect(patternTest.validate('E0003.0', icd9Rule)).toBe(false);
    expect(patternTest.validate('E0021', icd9Rule)).toBe(false);
    expect(patternTest.validate('7301.12', icd9Rule)).toBe(false);
    expect(patternTest.validate('7301', icd9Rule)).toBe(false);

  });

  it('should be a valid SSN', function() {
    expect(patternTest.validate('123-45-6789', ssnRule)).toBe(true);
    expect(patternTest.validate('123456789', ssnRule)).toBe(true);
  });

  it('should NOT be a valid SSN', function() {
    expect(patternTest.validate('123-45-67890', ssnRule)).toBe(false);
    expect(patternTest.validate('1234567890', ssnRule)).toBe(false);
    expect(patternTest.validate('123', ssnRule)).toBe(false);
    expect(patternTest.validate('1234-567-890', ssnRule)).toBe(false);
  });

  it('should be a valid TAX ID', function() {
    expect(patternTest.validate('123-45-6789', taxidRule)).toBe(true);
    expect(patternTest.validate('123456789', taxidRule)).toBe(true);
    expect(patternTest.validate('12-3456789', taxidRule)).toBe(true);
    expect(patternTest.validate('923-45-6789', taxidRule)).toBe(true);
    expect(patternTest.validate('P-12345678', taxidRule)).toBe(true);
    expect(patternTest.validate('P12345678', taxidRule)).toBe(true);

    expect(patternTest.validate('123-45-6789', taxidRuleArray)).toBe(true);
    expect(patternTest.validate('123456789', taxidRuleArray)).toBe(true);
    expect(patternTest.validate('12-3456789', taxidRuleArray)).toBe(true);
    expect(patternTest.validate('923-45-6789', taxidRuleArray)).toBe(true);
    expect(patternTest.validate('P-12345678', taxidRuleArray)).toBe(true);
    expect(patternTest.validate('P12345678', taxidRuleArray)).toBe(true);
  });

  it('should NOT be a valid TAX ID', function() {
    expect(patternTest.validate('123-45-67890', taxidRule)).toBe(false);
    expect(patternTest.validate('1234567890', taxidRule)).toBe(false);
    expect(patternTest.validate('12-34567890', taxidRule)).toBe(false);
    expect(patternTest.validate('923-45-67890', taxidRule)).toBe(false);
    expect(patternTest.validate('P-123456780', taxidRule)).toBe(false);
    expect(patternTest.validate('P123456780', taxidRule)).toBe(false);
    expect(patternTest.validate('P12345', taxidRule)).toBe(false);
    expect(patternTest.validate('123456', taxidRule)).toBe(false);

    expect(patternTest.validate('123-45-67890', taxidRuleArray)).toBe(false);
    expect(patternTest.validate('1234567890', taxidRuleArray)).toBe(false);
    expect(patternTest.validate('12-34567890', taxidRuleArray)).toBe(false);
    expect(patternTest.validate('923-45-67890', taxidRuleArray)).toBe(false);
    expect(patternTest.validate('P-123456780', taxidRuleArray)).toBe(false);
    expect(patternTest.validate('P123456780', taxidRuleArray)).toBe(false);
    expect(patternTest.validate('P12345', taxidRuleArray)).toBe(false);
    expect(patternTest.validate('123456', taxidRuleArray)).toBe(false);
  });



});

/* global describe, it, beforeEach, expect, module, inject */

import angular from 'angular';

import '../pattern';

describe('avValPattern', () => {

  let patternTest;
  let zipRule;
  let icd9Rule;
  let ssnRule;
  let taxidRule;
  let taxidRuleArray;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject(avValPattern => {
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

  it('should be a valid ZIP', () => {
    expect(patternTest.validate({value: '12345', constraint: zipRule})).toBe(true);
  });

  it('should NOT be a valid ZIP', () => {
    expect(patternTest.validate({value: '123453', constraint: zipRule})).toBe(false);
  });

  it('should be a valid ICD-9 code', () => {
    expect(patternTest.validate({value: 'V10.12', constraint: icd9Rule})).toBe(true);
    expect(patternTest.validate({value: 'V12', constraint: icd9Rule})).toBe(true);
    expect(patternTest.validate({value: 'E000.0', constraint: icd9Rule})).toBe(true);
    expect(patternTest.validate({value: 'E002', constraint: icd9Rule})).toBe(true);
    expect(patternTest.validate({value: '730.12', constraint: icd9Rule})).toBe(true);
    expect(patternTest.validate({value: '730', constraint: icd9Rule})).toBe(true);
  });

  it('should NOT be a valid ICD-9 code', () => {
    expect(patternTest.validate({value: 'V103.12', constraint: icd9Rule})).toBe(false);
    expect(patternTest.validate({value: 'V123', constraint: icd9Rule})).toBe(false);
    expect(patternTest.validate({value: 'E0003.0', constraint: icd9Rule})).toBe(false);
    expect(patternTest.validate({value: 'E0021', constraint: icd9Rule})).toBe(false);
    expect(patternTest.validate({value: '7301.12', constraint: icd9Rule})).toBe(false);
    expect(patternTest.validate({value: '7301', constraint: icd9Rule})).toBe(false);

  });

  it('should be a valid SSN', () => {
    expect(patternTest.validate({value: '123-45-6789', constraint: ssnRule})).toBe(true);
    expect(patternTest.validate({value: '123456789', constraint: ssnRule})).toBe(true);
  });

  it('should NOT be a valid SSN', () => {
    expect(patternTest.validate({value: '123-45-67890', constraint: ssnRule})).toBe(false);
    expect(patternTest.validate({value: '1234567890', constraint: ssnRule})).toBe(false);
    expect(patternTest.validate({value: '123', constraint: ssnRule})).toBe(false);
    expect(patternTest.validate({value: '1234-567-890', constraint: ssnRule})).toBe(false);
  });

  it('should be a valid TAX ID', () => {
    expect(patternTest.validate({value: '123-45-6789', constraint: taxidRule})).toBe(true);
    expect(patternTest.validate({value: '123456789', constraint: taxidRule})).toBe(true);
    expect(patternTest.validate({value: '12-3456789', constraint: taxidRule})).toBe(true);
    expect(patternTest.validate({value: '923-45-6789', constraint: taxidRule})).toBe(true);
    expect(patternTest.validate({value: 'P-12345678', constraint: taxidRule})).toBe(true);
    expect(patternTest.validate({value: 'P12345678', constraint: taxidRule})).toBe(true);

    expect(patternTest.validate({value: '123-45-6789', constraint: taxidRuleArray})).toBe(true);
    expect(patternTest.validate({value: '123456789', constraint: taxidRuleArray})).toBe(true);
    expect(patternTest.validate({value: '12-3456789', constraint: taxidRuleArray})).toBe(true);
    expect(patternTest.validate({value: '923-45-6789', constraint: taxidRuleArray})).toBe(true);
    expect(patternTest.validate({value: 'P-12345678', constraint: taxidRuleArray})).toBe(true);
    expect(patternTest.validate({value: 'P12345678', constraint: taxidRuleArray})).toBe(true);
  });

  it('should NOT be a valid TAX ID', () => {
    expect(patternTest.validate({value: '123-45-67890', constraint: taxidRule})).toBe(false);
    expect(patternTest.validate({value: '1234567890', constraint: taxidRule})).toBe(false);
    expect(patternTest.validate({value: '12-34567890', constraint: taxidRule})).toBe(false);
    expect(patternTest.validate({value: '923-45-67890', constraint: taxidRule})).toBe(false);
    expect(patternTest.validate({value: 'P-123456780', constraint: taxidRule})).toBe(false);
    expect(patternTest.validate({value: 'P123456780', constraint: taxidRule})).toBe(false);
    expect(patternTest.validate({value: 'P12345', constraint: taxidRule})).toBe(false);
    expect(patternTest.validate({value: '123456', constraint: taxidRule})).toBe(false);

    expect(patternTest.validate({value: '123-45-67890', constraint: taxidRuleArray})).toBe(false);
    expect(patternTest.validate({value: '1234567890', constraint: taxidRuleArray})).toBe(false);
    expect(patternTest.validate({value: '12-34567890', constraint: taxidRuleArray})).toBe(false);
    expect(patternTest.validate({value: '923-45-67890', constraint: taxidRuleArray})).toBe(false);
    expect(patternTest.validate({value: 'P-123456780', constraint: taxidRuleArray})).toBe(false);
    expect(patternTest.validate({value: 'P123456780', constraint: taxidRuleArray})).toBe(false);
    expect(patternTest.validate({value: 'P12345', constraint: taxidRuleArray})).toBe(false);
    expect(patternTest.validate({value: '123456', constraint: taxidRuleArray})).toBe(false);
  });

});

/*global describe, it, beforeEach, expect, module, inject*/
describe('avValPattern', function () {
  'use strict';

  var patternTest, zipRules, icd9Rules, ssnRules, taxidRules;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValPattern) {
    patternTest = avValPattern;
    zipRules = {value: /^\d{5}$/};
    icd9Rules = {value: /^(V\d{2}(\.\d{1,2})?|\d{3}(\.\d{1,2})?|E\d{3}(\.\d)?)$/};
    ssnRules = {value: /^\d{3}-?\d{2}-?\d{4}$/};
    taxidRules = {value: /^(\d{3}-?\d{2}-?\d{4}|[0-9]{2}-[0-9]{7}|9\d{2}-[7,8]\d-\d{4}|[Pp]?-?\d{8})$/};
  }));
  
  it('should be a valid Zip', function(){
    expect(patternTest.validate('12345', zipRules)).toBe(true);
  });

  it('should NOT be a valid Zip', function(){
    expect(patternTest.validate('123453', zipRules)).toBe(false);
  });

  it('should be a valid ICD9 code', function(){
    expect(patternTest.validate('V10.12', icd9Rules)).toBe(true);
    expect(patternTest.validate('V12', icd9Rules)).toBe(true);
    expect(patternTest.validate('E000.0', icd9Rules)).toBe(true);
    expect(patternTest.validate('E002', icd9Rules)).toBe(true);
    expect(patternTest.validate('730.12', icd9Rules)).toBe(true);
    expect(patternTest.validate('730', icd9Rules)).toBe(true);
  });

  it('should NOT be a valid ICD9 code', function(){
    expect(patternTest.validate('V103.12', icd9Rules)).toBe(false);
    expect(patternTest.validate('V123', icd9Rules)).toBe(false);
    expect(patternTest.validate('E0003.0', icd9Rules)).toBe(false);
    expect(patternTest.validate('E0021', icd9Rules)).toBe(false);
    expect(patternTest.validate('7301.12', icd9Rules)).toBe(false);
    expect(patternTest.validate('7301', icd9Rules)).toBe(false);
    expect(patternTest.validate('', icd9Rules)).toBe(false);

  });

  it('should be a valid SSN', function(){
    expect(patternTest.validate('123-45-6789', ssnRules)).toBe(true);
    expect(patternTest.validate('123456789', ssnRules)).toBe(true);
  });

  it('should NOT be a valid SSN', function(){
    expect(patternTest.validate('123-45-67890', ssnRules)).toBe(false);
    expect(patternTest.validate('1234567890', ssnRules)).toBe(false);
    expect(patternTest.validate('', ssnRules)).toBe(false);
    expect(patternTest.validate('123', ssnRules)).toBe(false);
    expect(patternTest.validate('1234-567-890', ssnRules)).toBe(false);
  });

  it('should be a vliad TaxID', function(){
    expect(patternTest.validate('123-45-6789', taxidRules)).toBe(true);
    expect(patternTest.validate('123456789', taxidRules)).toBe(true);
    expect(patternTest.validate('12-3456789', taxidRules)).toBe(true);
    expect(patternTest.validate('923-45-6789', taxidRules)).toBe(true);
    expect(patternTest.validate('P-12345678', taxidRules)).toBe(true);
    expect(patternTest.validate('P12345678', taxidRules)).toBe(true);
  });

  it('should NOT be a vliad TaxID', function(){
    expect(patternTest.validate('123-45-67890', taxidRules)).toBe(false);
    expect(patternTest.validate('1234567890', taxidRules)).toBe(false);
    expect(patternTest.validate('12-34567890', taxidRules)).toBe(false);
    expect(patternTest.validate('923-45-67890', taxidRules)).toBe(false);
    expect(patternTest.validate('P-123456780', taxidRules)).toBe(false);
    expect(patternTest.validate('P123456780', taxidRules)).toBe(false);
    expect(patternTest.validate('P12345', taxidRules)).toBe(false);
    expect(patternTest.validate('123456', taxidRules)).toBe(false);
    expect(patternTest.validate('', taxidRules)).toBe(false);
  });

});
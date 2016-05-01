/*global describe, it, beforeEach, expect, module, inject*/
/*global describe, it, beforeEach, expect, module, inject*/
describe('avValNpi', function () {
  let avValNpi;

  beforeEach(module('availity'));

  beforeEach(inject(function(_avValNpi_) {
    avValNpi = _avValNpi_;
  }));

  it('should validate if NPI is empty, undefined or null', function () {
    expect(avValNpi.validate(undefined)).toBe(true);
    expect(avValNpi.validate('')).toBe(true);
    expect(avValNpi.validate(null)).toBe(true);
  });

  it("should NOT validate if NPI contains non-digits", function() {
    expect(avValNpi.validate('i2eh56789o')).toBe(false);
  });

  it("should NOT validate if NPI is not 10 digits in length", function() {
    expect(avValNpi.validate('123456789')).toBe(false);
    expect(avValNpi.validate('12345678901')).toBe(false);
  });

  it("should NOT validate if NPI does not start with a 1, 2, 3, or 4", function() {
    expect(avValNpi.validate('5678901234')).toBe(false);
  });

  it("should NOT validate if NPI checksum doesn't match check digit", function() {
    expect(avValNpi.validate("1234567890")).toBe(false);
  });

  it("should validate if NPI is valid", function() {
    expect(avValNpi.validate("1234567893")).toBe(true);
  });
});
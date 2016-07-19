/* global describe, module, inject, beforeEach, it, expect */
/* global describe, module, inject, beforeEach, it, expect */
describe('AV_GLOBALS', function() {
  let AV_GLOBALS;

  beforeEach(function() {
    module('availity');

    inject(function(_AV_GLOBALS_) {
      AV_GLOBALS = _AV_GLOBALS_;
    });
  });

  describe('states', function() {

    it('should be defined', function() {
      expect(AV_GLOBALS.REGIONS).toBeDefined();
      expect(AV_GLOBALS.REGIONS.length).toBe(51); // 50 + District of Columbia
    });

  });
});

/* global describe, it, availity, expect */
describe('utils', function() {
  describe('_stringify()', function() {
    it('should convert anything to a string', function() {
      expect(availity._stringify({})).toBe('[object Object]');
      expect(availity._stringify(null)).toBe('');
      expect(availity._stringify(NaN)).toBe('NaN');
    });
  });

  describe('isBlank()', function() {
    it('should be true for empty strings', function() {
      expect(availity.isBlank(null)).toBe(true);
      expect(availity.isBlank('')).toBe(true);
      expect(availity.isBlank('     ')).toBe(true);
    });
  });
});

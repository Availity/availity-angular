/* global describe, it, expect */

import { stringify, isBlank } from '../';

describe('utils', function() {

  describe('stringify()', function() {

    it('should convert anything to a string', function() {
      expect(stringify({})).toBe('[object Object]');
      expect(stringify(null)).toBe('');
      expect(stringify(NaN)).toBe('NaN');
    });

  });

  describe('isBlank()', function() {

    it('should be true for empty strings', function() {
      expect(isBlank(null)).toBe(true);
      expect(isBlank('')).toBe(true);
      expect(isBlank('     ')).toBe(true);
    });

  });
});

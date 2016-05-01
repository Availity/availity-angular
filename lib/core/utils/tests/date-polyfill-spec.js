/* global describe, module, beforeEach, it, expect */
describe('date', function() {

  'use strict';

  beforeEach(function() {
    module('availity');
  });

  it('should polyfilll toISOString()', function() {
    const today = new Date('05 October 2011 14:48 UTC');
    expect(today.toISOString()).toBe('2011-10-05T14:48:00.000Z');
  });

});

/*global availity, inject, module, describe, beforeEach, it, expect */

describe('avCache', function() {

  'use strict';

  var avCache;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avCache_) {
      avCache = _avCache_;
    });

  });

  it('should exist be initialized', function() {
    expect(avCache).toBeDefined();
    expect(avCache.caches).toEqual({});
  });

  describe('getCache', function() {
    it('should return same cache on subsequent calls', function() {
        var c1 = avCache.getCache('1');
        expect(c1).toBeDefined();
        expect(c1.cacheName);
        expect(c1.cacheItems).toEqual({});
        var c2 = avCache.getCache(1);
        expect(c2).toBe(c1);
    });
  });

  describe('AvCache.get', function() {
    it('should always return promise event without loader', function() {
      var c1 = avCache.getCache('1');
      c1.get('key1').then(function () {
        // should get resolved
      });
      expect(c1.size()).toBe(1);
    });
  });

});

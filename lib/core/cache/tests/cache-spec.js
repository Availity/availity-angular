/*global availity, inject, module, describe, beforeEach, it, expect */

describe('avCache', function() {

  'use strict';

  var avCache;
  var $q;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avCache_) {
      avCache = _avCache_;
      $q = _$q_;
    });

  });

  availity.mock.serviceSpecHelper();

  it('should exist be initialized', function() {
    expect(avCache).toBeDefined();
    expect(avCache.caches).toEqual({});
  });

  describe('getCache', function() {
    it('should return same cache on subsequent calls', function() {
      var c1 = avCache.getCache('1');
      expect(c1).toBeDefined();
      expect(c1.cacheItems).toEqual({});
      var c2 = avCache.getCache(1);
      expect(c2).toBe(c1);
    });
  });

  describe('AvCache.get', function() {
    it('should always return promise event without loader', function() {
      var c1 = avCache.getCache('1');
      c1.get('key1').then(function() {
        // should get resolved
      });
      expect(c1.size()).toBe(1);
    });

    it('should resolve promise on put', function() {
      var c1 = avCache.getCache('1');
      var p1 = null;
      c1.get('key1').then(function(value) {
        p1 = value;
      });
      expect(c1.size()).toBe(1);
      expect(p1).toBeNull();
      var val1 = 'value1';
      c1.put('key1', val1);
      expect(p1).toBeNull();
      availity.mock.$scope.$digest();
      expect(p1).toBe(val1);
    });
  });

});

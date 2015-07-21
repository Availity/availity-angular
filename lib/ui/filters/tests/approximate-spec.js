/* global beforeEach, expect, module, inject, describe, it */
describe('avApproximate', function() {

  'use strict';

  var approximate;

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  beforeEach(inject(function($filter) {
    approximate = $filter('avApproximate');
  }));

  describe('falsey value', function() {
    var falseyValues = [undefined, null, NaN, 0, '', false];

    var test = function() {
      var actual = approximate(value);
      expect(actual).toBeEqual(0);
    };

    for(var i = 0; i < falseyValues.length; i++) {
      var value = falseyValues[i];
      it('should return zero when value is "' + value + '"', test);
    }
  });

  describe('unchanged value', function() {
    var values = [1, 100, 999, 1000000000000000000000];

    var test = function() {
      var actual = approximate(value);
      expect(actual).toBeEqual(value);
    };

    for(var i = 0; i < values.length; i++) {
      var value = values[i];
      it('should return value unchanged (' + value + ')', test);
    }
  });

  function baseFormatTest(values, suffix, base) {
    var test = function() {
      var actual = approximate(value);
      expect(actual).toBeEqual(value / base + suffix);
    };

    for(var i = 0; i < values.length; i++) {
      var value = values[i];
      it('should return with ' + suffix + ' suffix (' + value + ')', test);
    }
  }

  describe('kilo', function() {
    baseFormatTest([1000, 10000, 100000], 'k', 1000);
  });

  describe('mega', function() {
    baseFormatTest([1000000, 10000000, 100000000], 'M', 1000000);
  });

  describe('giga', function() {
    baseFormatTest([1000000000, 10000000000, 100000000000], 'G', 1000000000);
  });

  describe('tera', function() {
    baseFormatTest([1000000000000, 10000000000000, 100000000000000], 'T', 1000000000000);
  });

  describe('peta', function() {
    baseFormatTest([1000000000000000, 10000000000000000, 100000000000000000], 'P', 1000000000000000);
  });

  describe('exa', function() {
    baseFormatTest([1000000000000000000, 10000000000000000000, 100000000000000000000], 'E', 1000000000000000000);
  });

});

/*global describe, it, beforeEach, expect, module, inject*/
describe('avValSize', function () {

  'use strict';

  var avSize;
  var rules;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValSize) {
    avSize = avValSize;
    rules = {'min': 2, 'max': 5};
  }));

  it('should be valid', function() {
    expect(avSize.validate('Hello', rules)).toBe(true);
    expect(avSize.validate('It', rules)).toBe(true);
    expect(avSize.validate('It\'s', rules)).toBe(true);
  });

  it('should NOT be valid', function() {
    expect(avSize.validate('I', rules)).toBe(false);
    expect(avSize.validate('Supercalafrajalisticexpealadocious', rules)).toBe(false);
  });

});

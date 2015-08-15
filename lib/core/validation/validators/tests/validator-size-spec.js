/*global describe, it, beforeEach, expect, module, inject*/
describe('avValSize', function () {

  'use strict';

  var avSize;
  var rules;

  beforeEach(module('availity'));

  beforeEach(inject(function (avValSize) {
    avSize = avValSize;
    rules = {
      'min': 2,
      'max': 5
    };
  }));

  it('should be valid', function() {

    // Default (text)
    expect(avSize.validate('Hello', rules)).toBe(true);
    expect(avSize.validate('It', rules)).toBe(true);
    expect(avSize.validate('It\'s', rules)).toBe(true);

    // Text
    rules.type = 'text';
    expect(avSize.validate('Hola', rules)).toBe(true);
    expect(avSize.validate('325', rules)).toBe(true);
    expect(avSize.validate(353, rules)).toBe(true);

    // Numbers
    rules.type = 'number';
    expect(avSize.validate(2, rules)).toBe(true);
    expect(avSize.validate(3, rules)).toBe(true);
    expect(avSize.validate(4, rules)).toBe(true);
    expect(avSize.validate(5, rules)).toBe(true);
    expect(avSize.validate('5', rules)).toBe(true);
  });

  it('should NOT be valid', function() {

    rules.type = 'text';
    expect(avSize.validate('I', rules)).toBe(false);
    expect(avSize.validate('MorThanFive', rules)).toBe(false);
    expect(avSize.validate('5 4331', rules)).toBe(false);
    expect(avSize.validate(352553, rules)).toBe(false);
    expect(avSize.validate(1, rules)).toBe(false);

    rules.type = 'number';
    expect(avSize.validate('NaN', rules)).toBe(false);
    expect(avSize.validate('-5', rules)).toBe(false);
    expect(avSize.validate('1', rules)).toBe(false);
    expect(avSize.validate(-5, rules)).toBe(false);
    expect(avSize.validate(0, rules)).toBe(false);
    expect(avSize.validate(1, rules)).toBe(false);
    expect(avSize.validate(6, rules)).toBe(false);
    expect(avSize.validate(125, rules)).toBe(false);
  });

});

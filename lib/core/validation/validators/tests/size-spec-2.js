/* global describe, it, beforeEach, expect, module, inject*/

import angular from 'angular';

import '../size';

describe('avValSize', () => {

  let avSize;
  let rules;

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject(avValSize => {
    avSize = avValSize;
    rules = {
      'min': 2,
      'max': 5
    };
  }));

  it('should be valid', () => {

    // Default (text)
    expect(avSize.validate({value: 'Hello', constraint: rules})).toBe(true);
    expect(avSize.validate({value: 'It', constraint: rules})).toBe(true);
    expect(avSize.validate({value: 'It\'s', constraint: rules})).toBe(true);

    // Text
    rules.type = 'text';
    expect(avSize.validate({value: 'Hola', constraint: rules})).toBe(true);
    expect(avSize.validate({value: '325', constraint: rules})).toBe(true);
    expect(avSize.validate({value: 353, constraint: rules})).toBe(true);

    // Numbers
    rules.type = 'number';
    expect(avSize.validate({value: 2, constraint: rules})).toBe(true);
    expect(avSize.validate({value: 3, constraint: rules})).toBe(true);
    expect(avSize.validate({value: 4, constraint: rules})).toBe(true);
    expect(avSize.validate({value: 5, constraint: rules})).toBe(true);
    expect(avSize.validate({value: '5', constraint: rules})).toBe(true);
  });

  it('should NOT be valid', () => {

    rules.type = 'text';
    expect(avSize.validate({value: 'I', constraint: rules})).toBe(false);
    expect(avSize.validate({value: 'MorThanFive', constraint: rules})).toBe(false);
    expect(avSize.validate({value: '5 4331', constraint: rules})).toBe(false);
    expect(avSize.validate({value: 352553, constraint: rules})).toBe(false);
    expect(avSize.validate({value: 1, constraint: rules})).toBe(false);

    rules.type = 'number';
    expect(avSize.validate({value: 'NaN', constraint: rules})).toBe(false);
    expect(avSize.validate({value: '-5', constraint: rules})).toBe(false);
    expect(avSize.validate({value: '1', constraint: rules})).toBe(false);
    expect(avSize.validate({value: -5, constraint: rules})).toBe(false);
    expect(avSize.validate({value: 0, constraint: rules})).toBe(false);
    expect(avSize.validate({value: 1, constraint: rules})).toBe(false);
    expect(avSize.validate({value: 6, constraint: rules})).toBe(false);
    expect(avSize.validate({value: 125, constraint: rules})).toBe(false);
  });

});

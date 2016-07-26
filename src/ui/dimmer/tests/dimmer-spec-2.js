/* global  $, describe, beforeEach, it, expect, spyOn */

import angular from 'angular';
import Tester from 'tester';

import '../';

import template from './template.html';

describe('avDimmer', () => {
  const tester = new Tester();

  let el;
  let spy;
  let spyVelocity;

  beforeEach(angular.mock.module('availity.ui'));

  tester.directive();

  beforeEach(() => {
    el = tester.compileDirective(template);
    spy = spyOn($.fn, 'find').and.callThrough();
    spyVelocity = spyOn($.fn, 'velocity').and.callThrough();
  });

  it('should show dimmer on mouseenter', ()=> {
    el.trigger('mouseenter');
    expect(spy).toHaveBeenCalled();
    expect(spyVelocity).toHaveBeenCalled();
  });

  it('should hide dimmer on mouseleave', ()=> {
    el.trigger('mouseleave');
    expect(spy).toHaveBeenCalled();
    expect(spyVelocity).toHaveBeenCalled();
  });
});

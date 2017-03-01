/* global  describe, beforeEach, it, expect */
import 'jquery';
import 'velocity-animate';

import angular from 'angular';
import Tester from 'tester';

import '../';

describe('Animations', () => {

  const tester = new Tester();

  beforeEach(angular.mock.module('availity.ui'));

  tester.directive();

  describe('avAnimate', () => {

    let el;
    let isoScope;

    beforeEach(() => {
      el = tester.compileDirective('<div av-animate="\'testVal\'" av-animate-on="click"  av-animate-type="\'transition.bounceOut\'" av-animate-on-load="false" av-animate-options="{ delay: 500 }"></div>');
      isoScope = el.isolateScope();
    });

    it('should have directive scope', () => {
      expect(isoScope).toBeDefined();
    });

    it('should have watch', () => {
      expect(isoScope.watch).toBeDefined();
      expect(isoScope.watch).toEqual('testVal');
    });

    it('should have eventType', () => {
      expect(isoScope.eventType).toBeDefined();
      expect(isoScope.eventType).toEqual('click');
    });

    it('should have animation', () => {
      expect(isoScope.animation).toBeDefined();
      expect(isoScope.animation).toEqual('transition.bounceOut');
    });

    it('should have onLoad', () => {
      expect(isoScope.onLoad).toBeDefined();
      expect(isoScope.onLoad).toEqual(false);
    });

    it('should have veclocityOptions', () => {
      expect(isoScope.veclocityOptions).toBeDefined();
      expect(isoScope.veclocityOptions).toEqual({ delay: 500 });
    });
  });

  describe('avLoader', () => {
    it('should render directive', () => {
      const el = tester.compileDirective('<div av-loader></div>');
      expect(el.find('.loading-bullet').length > 0).toBeTruthy();
    });
  });

});

/* global describe, beforeEach, it, expect */

import angular from 'angular';
import Tester from 'tester';

import '../';

describe('Animations', () => {

  const tester = new Tester();

  beforeEach(angular.mock.module('availity.ui'));

  tester.directive();

  describe('avLoader', () => {
    it('should render directive', () => {
      const el = tester.compileDirective('<div av-loader></div>');
      expect(el.hasClass('loading-indicator')).toBeTruthy();
    });
  });

});

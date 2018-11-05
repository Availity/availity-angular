/* global  describe, beforeEach, it expect */

import angular from 'angular';
import Tester from 'tester';
import template from './template.html';

import "..";

describe('avModal', () => {

  const tester = new Tester();

  beforeEach(() => {
    angular.mock.module('availity', 'availity.ui');
  });

  tester.directive();

  it('should render directive', () => {

    const el = tester.compileDirective(template, null, null);

    expect(el.hasClass('modal')).toBeTruthy();

  });

});

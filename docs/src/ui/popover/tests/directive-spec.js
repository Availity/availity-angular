/* global  describe, beforeEach, it, expect */

import angular from 'angular';
import Tester from 'tester';
import template from './template.html';

import '../';

describe('avPopover Directive', function() {

  const tester = new Tester();

  beforeEach(angular.mock.module('availity', 'availity.ui'));

  tester.directive();

  beforeEach(() => {
    this.el = tester.compileDirective(template, null, null);
  });

  it('should render directive', () => {
    expect(this.el.data('bs.popover')).toBeDefined();
  });
});

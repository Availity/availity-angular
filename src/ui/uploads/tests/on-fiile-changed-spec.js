/* global  describe, beforeEach, it, expect */

import angular from 'angular';
import Tester from 'tester';
import template from './on-file-change-spec.html';

import '../on-file-changed';

describe('onFileChanged', () => {

  const tester = new Tester();

  beforeEach(angular.mock.module('availity', 'availity.ui'));

  tester.directive();

  it('should handle change callback', () => {
    tester.$scope.cb = tester.spy;
    const $el = tester.compileDirective(template, null, null);
    $el.trigger('change');
    tester.$scope.$apply();
    expect(tester.spy).toHaveBeenCalled();
  });
});

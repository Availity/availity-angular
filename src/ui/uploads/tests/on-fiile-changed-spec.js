/* global  describe, beforeEach, xit, expect */

import angular from 'angular';
import Tester from 'tester';
import template from './on-file-change-spec.html';

import '../on-file-changed';

describe('avOnFileChanged', () => {

  const tester = new Tester();

  beforeEach(angular.mock.module('availity', 'availity.ui'));

  tester.directive();

  xit('should handle change callback', () => {
    tester.$scope.cb = tester.spy;
    const $el = tester.compileDirective(template, null, null);
    $el.triggerHandler({
      type: 'change',
      target: {
        files: []
      }
    });
    tester.$scope.$apply();
    expect(tester.spy).toHaveBeenCalled();
  });
});

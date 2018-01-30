/* global  describe, beforeEach, it, expect */

import angular from 'angular';
import Tester from 'tester';
import template from './upload-progress-bar-spec.html';

import '../upload-progress-bar';

describe('uploadProgessBar', () => {

  const tester = new Tester();

  beforeEach(angular.mock.module('availity', 'availity.ui'));

  tester.directive();

  it('should render with defaults', () => {
    tester.$scope.upload = {
      percentage: 0,
      onProgress: [],
      onSuccess: [],
      onError: []
    };
    const el = tester.compileDirective(template, null, null);
    const progressBar = el.find('.progress');
    expect(progressBar.hasClass('progress')).toBeTruthy();
  });

  it('should render with 50% progress', () => {
    tester.$scope.upload = {
      percentage: 50,
      onProgress: [],
      onSuccess: [],
      onError: [],
      completed: false
    };
    const el = tester.compileDirective(template, null, null);
    tester.$scope.upload.onProgress.forEach(cb => cb(50, 100));
    tester.$scope.$apply();
    const progressBar = el.find('.progress-bar');
    expect(progressBar.attr('style')).toBe('width: 50%;');
  });

  it('should render with 100% progress', () => {
    tester.$scope.upload = {
      percentage: 100,
      onProgress: [],
      onSuccess: [],
      onError: [],
      completed: true
    };
    const el = tester.compileDirective(template, null, null);
    tester.$scope.upload.onProgress.forEach(cb => cb(50, 100));
    tester.$scope.upload.onSuccess.forEach(cb => cb(50, 100));
    tester.$scope.$apply();
    const progress = el.find('.progress');
    const progressBar = el.find('.progress-bar');

    expect(progress.hasClass('progress-complete')).toBeTruthy();
    expect(progressBar.attr('style')).toBe('width: 100%;');
  });
});

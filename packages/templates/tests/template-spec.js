/* global describe, inject, it, beforeEach, expect */

import angular from 'angular';
import Tester from 'tester';

import '..';

describe('avTemplateCache', () => {

  let $httpBackend;
  let avTemplateCache;
  const tester = new Tester();


  beforeEach(() => {
    angular.mock.module('availity');
    angular.mock.module('availity.ui');
  });

  beforeEach(inject((_$httpBackend_, _avTemplateCache_) => {
    $httpBackend = _$httpBackend_;
    avTemplateCache = _avTemplateCache_;
  }));

  tester.service();

  const html = '<div>hi</div>';

  it('should respond with markup with option `template`', () => {

    const options = {template: html};

    avTemplateCache.get(options).then(template => {
      expect(template).toBe(html);
    });

    tester.$scope.$apply();

  });

  it('should respond with markup with option `tempalteUrl`', () => {

    $httpBackend.expectGET('demo/tpl.html').respond(html);

    const options = {templateUrl: 'demo/tpl.html'};

    avTemplateCache.get(options).then(template => {
      expect(template).toBe(html);
    });

    $httpBackend.flush();
    tester.$scope.$apply();

  });

});

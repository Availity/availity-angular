/* global describe, inject, beforeEach, it, expect, module */

import angular from 'angular';
import ngModule from '../proxy';
import Tester from 'tester';

describe('AvApiResource', () => {

  let AvProxyResource;

  Tester.matchers();

  beforeEach( () => {

    angular.mock.module(ngModule.name);

    inject(_AvProxyResource_ => {
      AvProxyResource = _AvProxyResource_;
    });

  });

  describe('urls', () => {

    it('should build url with resource name', () => {

      const proxy = new AvProxyResource({tenant: 'healthplan', name: 'users'});

      expect(proxy).toBeObject();
      expect(proxy.getUrl()).toBe('/api//v1/proxy/healthplan/users');

    });

  });
});

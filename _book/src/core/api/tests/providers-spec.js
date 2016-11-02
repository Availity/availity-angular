/* global inject, module, describe, beforeEach, it, expect */

import angular from 'angular';

import ngModule from '../providers';
import providersData from './providers.json';

import Tester from 'tester';

describe('avProvidersResource', () => {

  Tester.matchers();

  let avProvidersResource;
  let $httpBackend;

  beforeEach(() => {

    angular.mock.module(ngModule.name);

    inject((_$httpBackend_, _avProvidersResource_) => {
      $httpBackend = _$httpBackend_;
      avProvidersResource = _avProvidersResource_;
    });

  });

  it('should exist', () => {
    expect(avProvidersResource).toBeDefined();
  });

  it('should add customer id to url', () => {

    $httpBackend.expect('GET', '/api/internal/v1/providers?customerId=9999&limit=100&offset=20').respond(200, providersData);

    avProvidersResource.getProviders(9999, {params: {limit: 100, offset: 20}}).then(providers => {
      expect(providers[0].id).toBe('999999-9999-999999');
    });

    $httpBackend.flush();

  });
});

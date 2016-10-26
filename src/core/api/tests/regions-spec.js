/* global inject, module, describe, beforeEach, it, expect */

import angular from 'angular';

import ngModule from '../regions';
import regionData from './regions.json';
import userData from './user.json';

import Tester from 'tester';

describe('avRegionsResource', () => {

  Tester.matchers();

  let avRegionsResource;
  let $httpBackend;

  beforeEach(() => {

    angular.mock.module(ngModule.name);

    inject((_$httpBackend_, _avRegionsResource_) => {
      $httpBackend = _$httpBackend_;
      avRegionsResource = _avRegionsResource_;
    });

  });

  it('should exist', () => {
    expect(avRegionsResource).toBeDefined();
  });

  it('should allow add user id to url', () => {

    $httpBackend.expect('GET', '/api/sdk/platform/v1/users/me').respond(200, userData);
    $httpBackend.expect('GET', '/api/sdk/platform/v1/regions/rm3?limit=100&offset=20').respond(200, regionData);

    avRegionsResource.getRegions({params: {limit: 100, offset: 20}}).then(data => {
      expect(data).toBeTruthy();
    });

    $httpBackend.flush();

  });
});

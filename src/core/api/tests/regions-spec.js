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

    $httpBackend.expectGET(/\/api\/sdk\/platform\/v1\/users\/me\?sessionBust=\d+/).respond(200, userData);
    $httpBackend.expect('GET', '/api/sdk/platform/v1/regions?limit=100&offset=20&userId=rm3').respond(200, regionData);

    avRegionsResource.getRegions({params: {limit: 100, offset: 20}}).then(data => {
      expect(data).toBeTruthy();
    });

    $httpBackend.flush();

  });

  it('should return current selected region', () => {

    $httpBackend.expectGET(/\/api\/sdk\/platform\/v1\/users\/me\?sessionBust=\d+/).respond(200, userData);
    $httpBackend.expect('GET', '/api/sdk/platform/v1/regions?userId=rm3').respond(200, regionData);

    avRegionsResource.getCurrentRegion().then(region => {
      expect(region.id).toBe('FL');
    });
  });
});

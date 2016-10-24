/* global inject, module, describe, beforeEach, it, expect */

import angular from 'angular';
import ngModule from '../organizations';

import Tester from 'tester';

describe('avOrganizationsResource', () => {

  Tester.matchers();

  let avOrganizationsResource;
  let $httpBackend;

  const exampleParams = {params: {limit: 9001}};

  const responseData = [{a: 1, b: 2}, {a: 1, b: 2}];

  beforeEach(() => {

    angular.mock.module(ngModule.name);

    inject((_$httpBackend_, _avOrganizationsResource_) => {
      $httpBackend = _$httpBackend_;
      avOrganizationsResource = _avOrganizationsResource_;
    });

  });

  it('should exist', () => {
    expect(avOrganizationsResource).toBeDefined();
  });

  it('should allow params', () => {

    $httpBackend.expect('GET', '/api/sdk/platform/v1/organizations?limit=9001').respond(200, responseData);
    avOrganizationsResource.getOrganizations(exampleParams).then(data => {
      expect(data).toBeEqual(responseData);
    });
    $httpBackend.flush();

  });
});

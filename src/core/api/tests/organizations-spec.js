/* global inject, module, describe, beforeEach, it, expect */

import angular from 'angular';
import Tester from 'tester';

import ngModule from '../organizations';
import userData from './user.json';
import orgData from './organizations.json';

describe('avOrganizationsResource', () => {

  Tester.matchers();

  let avOrganizationsResource;
  let $httpBackend;

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

  it('should allow add user id to query params', () => {

    $httpBackend.expect('GET', '/api/sdk/platform/v1/users/me').respond(200, userData);
    $httpBackend.expect('GET', '/api/sdk/platform/v1/organizations?limit=100&offset=20&userId=rm3').respond(200, orgData);

    avOrganizationsResource.getOrganizations({params: {limit: 100, offset: 20}}).then(data => {
      expect(data[0].a).toBeTruthy();
    });
    $httpBackend.flush();

  });
});

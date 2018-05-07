/* global inject */
import angular from 'angular';
import Tester from 'tester';

import ngModule from '../organizations-select';
import userData from './fixtures/user.json';
import orgData from './fixtures/organizations.json';

describe('avSelectOrganizationsResource', () => {

  Tester.matchers();

  let avSelectOrganizationsResource;
  let $httpBackend;

  beforeEach(() => {

    angular.mock.module('availity');
    angular.mock.module(ngModule.name);

    inject((_$httpBackend_, _avSelectOrganizationsResource_) => {
      $httpBackend = _$httpBackend_;
      avSelectOrganizationsResource = _avSelectOrganizationsResource_;
    });

  });

  it('should exist', () => {
    expect(avSelectOrganizationsResource).toBeDefined();
  });

  it('should allow add user id to query params', () => {

    $httpBackend.expectGET(/\/api\/sdk\/platform\/v1\/users\/me\?sessionBust=\d+/).respond(200, userData);
    $httpBackend.expect('GET', /\/api\/sdk\/platform\/v1\/organizations\?limit=100&offset=20&sessionBust=\d+&userId=rm3/).respond(200, orgData);

    avSelectOrganizationsResource.getOrganizations({params: {limit: 100, offset: 20}}).then(response => {
      expect(response.data.organizations.length).toBe(2);
    });
    $httpBackend.flush();

  });
});

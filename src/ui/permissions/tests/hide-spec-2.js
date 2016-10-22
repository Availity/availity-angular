/* global inject, describe, it, expect, beforeEach, module */

import angular from 'angular';
import Tester from 'tester';

describe('avHasPermission', () => {

  const tester = new Tester();

  let $el;

  beforeEach( () => {
    angular.mock.module('availity', 'availity.ui');
  });

  const FIXTURES = {
    MARKUP: {
      VALID: '<div ng-cloak data-av-has-permission="1000"></button>',
      INVALID: '<div ng-cloak data-av-has-permission="2000"></button>'
    },
    REQUESTS: {
      VALID: '/api/internal/v1/axi-user-permissions?permissionId=1000',
      INVALID: '/api/internal/v1/axi-user-permissions?permissionId=2000'
    },
    RESPONSE: {
      'axiUserPermissions': [
        {
          'id': '1000',
          'description': 'Eligibility and Benefits Inquiry',
          'organizations': [
            {
              'id': '2000',
              'customerId': '1001',
              'name': 'sample org name',
              'resources': [{'id': '3000', 'payerId': 'PAYER1', 'payerName': 'Payer One'}]
            }
          ]
        }
      ]
    }
  };

  tester.directive();

  beforeEach(inject( (_$httpBackend_, _avUserAuthorizations_, avUserPermissionsResource) => {
    tester.$scope.demo = {};
    tester.$scope.demo.permissions = ['1000'];
    avUserPermissionsResource.sessionDate = null; // clear session date for tests
  }));

  it('should show content with VALID permission ', () => {
    tester.$httpBackend.expectGET(FIXTURES.REQUESTS.VALID).respond(200, FIXTURES.RESPONSE);
    $el = tester.compileDirective(FIXTURES.MARKUP.VALID);
    tester.$scope.$digest();
    tester.$httpBackend.flush();
    expect($el.is(':visible')).toBe(true);
  });

  it('should NOT show content with INVALID permission ', () => {
    tester.$httpBackend.expectGET(FIXTURES.REQUESTS.INVALID).respond(200, FIXTURES.RESPONSE);
    $el = tester.compileDirective(FIXTURES.MARKUP.INVALID);
    tester.$scope.$digest();
    tester.$httpBackend.flush();
    expect($el.is(':visible')).toBe(false);
  });

});

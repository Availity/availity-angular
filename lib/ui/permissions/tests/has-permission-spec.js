/* global inject, describe, availity, it, expect, beforeEach, module */

describe('avHasPermission', function() {

  'use strict';

  var $el;

  beforeEach(function() {
    module('availity', 'availity.ui');
  });

  availity.mock.directiveSpecHelper();

  var FIXTURES = {
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
        'organizations':
          [{
            'id': '2000',
            'customerId': '1001',
            'name': 'sample org name',
            'resources': [{'id': '3000', 'payerId': 'PAYER1', 'payerName': 'Payer One'}]
          }]
      }]
    }
  };

  beforeEach(inject(function(_$httpBackend_, _avUserAuthorizations_, avUserPermissionsResource) {
    availity.mock.$scope.demo = {};
    availity.mock.$scope.demo.permissions = ['1000'];
    avUserPermissionsResource.sessionDate = null; // clear session date for tests
  }));

  it('should show content with VALID permission ', function() {
    availity.mock.$httpBackend.expectGET(FIXTURES.REQUESTS.VALID).respond(200, FIXTURES.RESPONSE);
    $el = availity.mock.compileDirective(FIXTURES.MARKUP.VALID);
    availity.mock.$scope.$digest();
    availity.mock.$httpBackend.flush();
    expect($el.is(":visible")).toBe(true);
  });

  it('should NOT show content with INVALID permission ', function() {
    availity.mock.$httpBackend.expectGET(FIXTURES.REQUESTS.INVALID).respond(200, FIXTURES.RESPONSE);
    $el = availity.mock.compileDirective(FIXTURES.MARKUP.INVALID);
    availity.mock.$scope.$digest();
    availity.mock.$httpBackend.flush();
    expect($el.is(":visible")).toBe(false);
  });


});

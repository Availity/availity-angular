/*global availity, inject, describe, it, module, beforeEach, expect */

describe('avUserAuthorizations', function() {

  'use strict';

  var avUserAuthorizations;
  var $httpBackend;

  var fixtures = {
    valid: {
      "axiUserPermissions": [{"id": "452", "description": "Eligibility and Benefits Inquiry", "organizations": [{"id": "1435", "customerId": "1001", "name": "sample org name", "resources": [{"id": "8001", "payerId": "PAYER1", "payerName": "Payer One"}] }] }]
    },
    empty: {
      "axiUserPermissions": []
    }
  };

  beforeEach(function() {
    module('availity');
  });

  beforeEach(inject(function(_$httpBackend_,  _avUserAuthorizations_) {
    avUserAuthorizations = _avUserAuthorizations_;
    $httpBackend = _$httpBackend_;
  }));

  availity.mock.serviceSpecHelper();

  it('should exist', function() {
    expect(avUserAuthorizations).toBeDefined();
    expect(avUserAuthorizations.region).toBeNull();
  });

  it('avUserAuthorizations#toPermission should resource permission', function() {

  });

  it('should get permission 452', function() {

    availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&permissionId=452').respond(200, fixtures.valid);
    avUserAuthorizations.getPermission('452').then(function(permission) {

      expect(permission).toBeDefined();
      expect(permission.id).toBe('452');
      expect(permission.isAuthorized).toBe(true);
      expect(permission.organizations.length).toBe(1);

    });
    availity.mock.$httpBackend.flush();

  });

});

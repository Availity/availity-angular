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

  beforeEach(inject(function(_$httpBackend_,  _avUserAuthorizations_, avUserPermissionsResource) {
    avUserAuthorizations = _avUserAuthorizations_;
    $httpBackend = _$httpBackend_;
    avUserPermissionsResource.sessionDate = null; // clear session date for tests
  }));

  availity.mock.serviceSpecHelper();

  it('should exist', function() {
    expect(avUserAuthorizations).toBeDefined();
    expect(avUserAuthorizations.region).toBeNull();
  });

  it('#toPermission should resource permission', function() {

  });

  describe('getPermissions()', function() {
    it('should get have 452 but not 999', function() {
      var permission452;
      var permission999;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=452&permissionId=999').respond(200, fixtures.valid);
      avUserAuthorizations.getPermissions(['452', '999']).then(function(permissions) {
        permission452 = permissions['452'];
        permission999 = permissions['999'];
      });
      availity.mock.$httpBackend.flush();
      expect(permission452).toBeDefined();
      expect(permission452.id).toBe('452');
      expect(permission452.isAuthorized).toBe(true);
      expect(permission452.organizations.length).toBe(1);

      expect(permission999).toBeDefined();
      expect(permission999.id).toBe('999');
      expect(permission999.isAuthorized).toBe(false);
      expect(permission999.organizations.length).toBe(0);

    });
  });

  describe('getPermission()', function() {
    it('should get permission 452', function() {

      var permission452;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=452').respond(200, fixtures.valid);
      avUserAuthorizations.getPermission('452').then(function(permission) {
        permission452 = permission;
      });
      availity.mock.$httpBackend.flush();
      expect(permission452).toBeDefined();
      expect(permission452.id).toBe('452');
      expect(permission452.isAuthorized).toBe(true);
      expect(permission452.organizations.length).toBe(1);


    });

    it('should not have permission 999', function() {
      var permission999;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=999').respond(200, fixtures.empty);
      avUserAuthorizations.getPermission('999').then(function(permission) {
        permission999 = permission;
      });
      availity.mock.$httpBackend.flush();
      expect(permission999).toBeDefined();
      expect(permission999.id).toBe('999');
      expect(permission999.isAuthorized).toBe(false);
      expect(permission999.organizations.length).toBe(0);
    });
  }); // getPermission()
});

/*global availity, inject, describe, it, module, beforeEach, expect */

fdescribe('avUserAuthorizations', function() {

  'use strict';

  var avUserAuthorizations;
  var $httpBackend;

  var fixtures = {
    valid: {
      "axiUserPermissions": [{
        "id": "452",
        "description": "Eligibility and Benefits Inquiry",
        "organizations": [{"id": "1435", "customerId": "1001", "name": "sample org name", "resources": [{"id": "8001", "payerId": "PAYER1", "payerName": "Payer One"}]}]
      }]
    },
    empty: {
      "axiUserPermissions": []
    }
  };
  var expectPermission452 = function(permission) {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('452');
    expect(permission.isAuthorized).toBe(true);
    expect(permission.organizations.length).toBe(1);
  };
  var expectPermission999 = function(permission) {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('999');
    expect(permission.isAuthorized).toBe(false);
    expect(permission.organizations.length).toBe(0);
  };

  beforeEach(function() {
    module('availity');
  });

  beforeEach(inject(function(_$httpBackend_, _avUserAuthorizations_, avUserPermissionsResource) {
    avUserAuthorizations = _avUserAuthorizations_;
    $httpBackend = _$httpBackend_;
    avUserPermissionsResource.sessionDate = null; // clear session date for tests
  }));

  availity.mock.serviceSpecHelper();

  it('should exist', function() {
    expect(avUserAuthorizations).toBeDefined();
    expect(avUserAuthorizations.region).toBeNull();
  });


  describe('getPermissions()', function() {
    it('should get have 452 but not 999', function() {
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=452&permissionId=999').respond(200, fixtures.valid);
      avUserAuthorizations.getPermissions(['452', '999']).then(function(permissions) {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should include region if set', function() {
      avUserAuthorizations.setRegion('ALL');
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=452&permissionId=999&region=ALL').respond(200, fixtures.valid);
      avUserAuthorizations.getPermissions(['452', '999']).then(function(permissions) {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      availity.mock.$httpBackend.flush();
    });

  }); // getPermissions()

  describe('getPermission()', function() {
    it('should get permission 452', function() {
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=452').respond(200, fixtures.valid);
      avUserAuthorizations.getPermission('452').then(function(permission) {
        expectPermission452(permission);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should not have permission 999', function() {
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=999').respond(200, fixtures.empty);
      avUserAuthorizations.getPermission('999').then(function(permission) {
        expectPermission999(permission);
      });
      availity.mock.$httpBackend.flush();
    });
  }); // getPermission()

  describe('isAuthorized()', function() {
    it('should be authorized to 452', function() {
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=452').respond(200, fixtures.valid);
      avUserAuthorizations.isAuthorized('452').then(function(isAuthorized) {
        expect(isAuthorized).toBe(true);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should not authorized to 999', function() {
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=999').respond(200, fixtures.empty);
      avUserAuthorizations.isAuthorized('999').then(function(isAuthorized) {
        expect(isAuthorized).toBe(false);
      });
      availity.mock.$httpBackend.flush();
    });
  }); // isAuthorized()

  describe('isAnyAuthorized()', function() {
    it('should be authorized to 452', function() {
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=452').respond(200, fixtures.valid);
      avUserAuthorizations.isAnyAuthorized(['452']).then(function(isAuthorized) {
        expect(isAuthorized).toBe(true);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should not authorized to 999', function() {
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=999').respond(200, fixtures.empty);
      avUserAuthorizations.isAnyAuthorized(['999']).then(function(isAuthorized) {
        expect(isAuthorized).toBe(false);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should be authorized to 452 or 999', function() {
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?permissionId=452&permissionId=999').respond(200, fixtures.valid);
      avUserAuthorizations.isAnyAuthorized(['452', '999']).then(function(isAuthorized) {
        expect(isAuthorized).toBe(true);
      });
      availity.mock.$httpBackend.flush();
    });

  }); // isAnyAuthorized()

});

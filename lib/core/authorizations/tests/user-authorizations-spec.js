/*global availity, inject, module, describe, beforeEach, it, expect */

describe('avUserAuthorizations', function() {

  'use strict';
  var avUserAuthorizations;
  var responseResolved452 = {
    "totalCount": 1,
    "count": 1,
    "offset": 0,
    "limit": 50,
    "links": {"self": {"href": ""}},
    "axiUserPermissions": [
      {
        "id": "452",
        "description": "Eligibility and Benefits Inquiry",
        "organizations": [
          {
            "id": "1435",
            "customerId": "1001",
            "name": "Junit Org1",
            "resources": [
              {
                "id": "8001",
                "payerId": "PAYER1",
                "payerName": "Payer One"
              }
            ]
          }
        ]
      }
    ]
  };
  var responseResolvedEmpty = {
    "totalCount": 0,
    "count": 0,
    "offset": 0,
    "limit": 1000,
    "links": {
      "self": {
        "href": ""
      }
    },
    "axiUserPermissions": []
  };

  beforeEach(function() {
    module('availity');

    inject(function(_$httpBackend_, _$q_, _avUserAuthorizations_) {
      avUserAuthorizations = _avUserAuthorizations_;
    });
  });
  availity.mock.serviceSpecHelper();


  it('should exist and initialized', function() {
    expect(avUserAuthorizations).toBeDefined();
    expect(avUserAuthorizations.userPermissionsMap).toEqual({});
    expect(avUserAuthorizations.region).toEqual('');
    expect(avUserAuthorizations.invalidateUser).toEqual(true);
  });

  describe('getUserPermission', function() {
    it('should have permission 452 and should resolve to same permission with number or string', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&region=').respond(200, responseResolved452);
      avUserAuthorizations.getUserPermission(452).then(function(permission) {
        p1 = permission;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBeDefined();
      expect(p1.id).toBe('452');
      expect(p1.isAuthorized).toBe(true);
      expect(p1.organizations.length).toBe(1);
      var p2;
      avUserAuthorizations.getUserPermission('452').then(function(permission) {
        p2 = permission;
      });
      expect(p2).toBeUndefined();
      availity.mock.$scope.$digest();
      expect(p2).toBe(p1);
    });

    it('should not have permission 999', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=999&region=').respond(200, responseResolvedEmpty);
      avUserAuthorizations.getUserPermission(999).then(function(permission) {
        p1 = permission;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBeDefined();
      expect(p1.id).toBe('999');
      expect(p1.isAuthorized).toBe(false);
      expect(p1.organizations.length).toBe(0);
    });

    it('should have permission 452 in FL but not in WA', function() {
      var p1;
      avUserAuthorizations.region = 'FL';
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&region=FL').respond(200, responseResolved452);
      avUserAuthorizations.getUserPermission(452).then(function(permission) {
        p1 = permission;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBeDefined();
      expect(p1.id).toBe('452');
      expect(p1.isAuthorized).toBe(true);
      expect(p1.organizations.length).toBe(1);
      var p2;
      avUserAuthorizations.region = 'WA';
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=false&limit=1000&offset=0&permissionId=452&region=WA').respond(200, responseResolvedEmpty);
      avUserAuthorizations.getUserPermission('452').then(function(permission) {
        p2 = permission;
      });
      availity.mock.$httpBackend.flush();
      expect(p2.id).toBe('452');
      expect(p2.isAuthorized).toBe(false);
      expect(p2.organizations.length).toBe(0);
    });

  });

  describe('isAuthorizedTo', function() {
    it('should be authorized to 452', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&region=').respond(200, responseResolved452);
      avUserAuthorizations.isAuthorizedTo(452).then(function(isAuthorized) {
        p1 = isAuthorized;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBe(true);
    });

    it('should not be authorized to 999', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=999&region=').respond(200, responseResolvedEmpty);
      avUserAuthorizations.isAuthorizedTo(999).then(function(isAuthorized) {
        p1 = isAuthorized;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBe(false);
    });

  });

  describe('getOrganizationsByPermissionId', function() {
    it('should have one organization for 452', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&region=').respond(200, responseResolved452);
      avUserAuthorizations.getOrganizationsByPermissionId(452).then(function(organizations) {
        p1 = organizations;
      });
      availity.mock.$httpBackend.flush();
      expect(p1.length).toBe(1);
      expect(p1[0].id).toBe('1435');
      expect(p1[0].customerId).toBe('1001');
      expect(p1[0].name).toBe('Junit Org1');
    });

    it('should no organizations for 999', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=999&region=').respond(200, responseResolvedEmpty);
      avUserAuthorizations.getOrganizationsByPermissionId(999).then(function(organizations) {
        p1 = organizations;
      });
      availity.mock.$httpBackend.flush();
      expect(p1.length).toBe(0);
    });

  });

  describe('getPayersByPermissionIdAndOrgId', function() {
    it('should have one organization for 452', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&region=').respond(200, responseResolved452);
      avUserAuthorizations.getPayersByPermissionIdAndOrgId(452, '1435').then(function(payers) {
        p1 = payers;
      });
      availity.mock.$httpBackend.flush();
      expect(p1.length).toBe(1);
      expect(p1[0].id).toBe('8001');
      expect(p1[0].payerId).toBe('PAYER1');
      expect(p1[0].payerName).toBe('Payer One');
    });

    it('should no organizations for 999', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=999&region=').respond(200, responseResolvedEmpty);
      avUserAuthorizations.getPayersByPermissionIdAndOrgId(999).then(function(payers) {
        p1 = payers;
      });
      availity.mock.$httpBackend.flush();
      expect(p1.length).toBe(0);
    });

  });
  //
  //
  // The following test deal with getting multiple permissions in one call
  describe('getUserPermissions', function() {
    it('should get both 452 and 999 but only 452 should be valid', function() {
      var p1;
      var p2;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&permissionId=999&region=').respond(200, responseResolved452);
      avUserAuthorizations.getUserPermissions([452, 999]).then(function(permissions) {
        p1 = permissions;
      });
      // make second call while http has not resolved
      avUserAuthorizations.getUserPermission('452').then(function(permission) {
        p2 = permission;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBeDefined();
      expect(p1.length).toBe(2);
      expect(p1[0].id).toBe('452');
      expect(p1[0].isAuthorized).toBe(true);
      expect(p1[0].organizations.length).toBe(1);
      expect(p1[1].id).toBe('999');
      expect(p1[1].isAuthorized).toBe(false);
      expect(p1[1].organizations.length).toBe(0);
      expect(p2).toBe(p1[0]);
    });
  });


  describe('getUserPermissions', function() {
    it('should get both 452 and 999 but only 452 should be valid', function() {
      var p1;
      var p2;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&permissionId=999&region=').respond(200, responseResolved452);
      avUserAuthorizations.getUserPermissions([452, 999]).then(function(permissions) {
        p1 = permissions;
      });
      // make second call while http has not resolved
      avUserAuthorizations.getUserPermission('452').then(function(permission) {
        p2 = permission;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBeDefined();
      expect(p1.length).toBe(2);
      expect(p1[0].id).toBe('452');
      expect(p1[0].isAuthorized).toBe(true);
      expect(p1[0].organizations.length).toBe(1);
      expect(p1[1].id).toBe('999');
      expect(p1[1].isAuthorized).toBe(false);
      expect(p1[1].organizations.length).toBe(0);
      expect(p2).toBe(p1[0]);
    });
  });

  describe('isAuthorizedToAny', function() {
    it('should get both 452 and 999 but only 452 should be valid', function() {
      var p1;
      var p2;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&permissionId=999&region=').respond(200, responseResolved452);
      avUserAuthorizations.isAuthorizedToAny([452, 999]).then(function(isAuthorizedToAny) {
        p1 = isAuthorizedToAny;
      });
      // make second call while http has not resolved
      avUserAuthorizations.isAuthorizedTo('452').then(function(isAuthorized) {
        p2 = isAuthorized;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBe(true);
      expect(p2).toBe(true);
      avUserAuthorizations.isAuthorizedTo('999').then(function(isAuthorized) {
        p2 = isAuthorized;
      });
      availity.mock.$scope.$digest();
      expect(p2).toBe(false);
    });
  });

  describe('getAuthorizations', function() {
    it('should get both 452 and 999 but only 452 should be valid', function() {
      var p1;
      availity.mock.$httpBackend.expectGET('/api/internal/v1/axi-user-permissions?invalidateUser=true&limit=1000&offset=0&permissionId=452&permissionId=999&region=').respond(200, responseResolved452);
      avUserAuthorizations.getAuthorizations([452, 999]).then(function(authorizations) {
        p1 = authorizations;
      });
      availity.mock.$httpBackend.flush();
      expect(p1).toBeDefined();
      expect(p1['452']).toBe(true);
      expect(p1['999']).toBe(false);
    });
  });

});

/*global availity, inject, describe, it, module, beforeEach, expect */

describe('avUserAuthorizations', function() {

  'use strict';

  let avUserAuthorizations;


  const FIXTURES = {
    URI_452: '/api/internal/v1/axi-user-permissions?permissionId=452',
    URI_999: '/api/internal/v1/axi-user-permissions?permissionId=999',
    URI_452_999: '/api/internal/v1/axi-user-permissions?permissionId=452&permissionId=999',
    URI_452_999_1000: '/api/internal/v1/axi-user-permissions?permissionId=452&permissionId=999&permissionId=1000',
    VALID: {
      'axiUserPermissions': [
        {
        'id': '452',
        'description': 'Eligibility and Benefits Inquiry',
        'organizations':
          [{
            'id': '1435',
            'customerId': '1001',
            'name': 'sample org name',
            'resources': [{'id': '8001', 'payerId': 'PAYER1', 'payerName': 'Payer One'}]
          }]
      }]
    },
    empty: {
      'axiUserPermissions': []
    }
  };

  const expectPermission452 = function(permission) {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('452');
    expect(permission.isAuthorized).toBe(true);
    expect(permission.organizations.length).toBe(1);
  };

  const expectPermission999 = function(permission) {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('999');
    expect(permission.isAuthorized).toBe(false);
    expect(permission.organizations.length).toBe(0);
  };

  const expectPermission1000 = function(permission) {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('1000');
    expect(permission.isAuthorized).toBe(false);
    expect(permission.organizations.length).toBe(0);
  };

  beforeEach(function() {
    module('availity');
  });

  beforeEach(inject(function(_$httpBackend_, _avUserAuthorizations_, avUserPermissionsResource) {
    avUserAuthorizations = _avUserAuthorizations_;
    avUserPermissionsResource.sessionDate = null; // clear session date for tests
  }));

  availity.mock.serviceSpecHelper();

  it('should exist', function() {
    expect(avUserAuthorizations).toBeDefined();
    expect(avUserAuthorizations.region).toBeNull();
  });


  describe('getPermissions()', function() {
    it('should get have 452 but not 999', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
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
      availity.mock.$httpBackend.expectGET(`${FIXTURES.URI_452_999}&region=ALL`).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(function(permissions) {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should include merge permissionIds', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(function(permissions) {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      expect(avUserAuthorizations.permissionIds.length).toBe(2);
      availity.mock.$httpBackend.flush();
      // add third permission to fix
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452_999_1000).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '1000']).then(function(permissions) {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission1000(permissions['1000']);
      });
      expect(avUserAuthorizations.permissionIds.length).toBe(3);
      availity.mock.$httpBackend.flush();
    });

    it('should only make one call to api', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(function(permissions) {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      expect(avUserAuthorizations.permissionIds.length).toBe(2);
      availity.mock.$httpBackend.flush();
      let invoked = false;
      avUserAuthorizations.getPermissions(['452']).then(function(permissions) {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(1);
        expectPermission452(permissions['452']);
        invoked = true;
      });
      expect(avUserAuthorizations.permissionIds.length).toBe(2);
      availity.mock.flush();
      // check that httpBackend is use cache to return
      expect(invoked).toBe(true);
    });

  }); // getPermissions()

  describe('getPermission()', function() {
    it('should get permission 452', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermission('452').then(function(permission) {
        expectPermission452(permission);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should not have permission 999', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.empty);
      avUserAuthorizations.getPermission('999').then(function(permission) {
        expectPermission999(permission);
      });
      availity.mock.$httpBackend.flush();
    });
  }); // getPermission()

  describe('isAuthorized()', function() {
    it('should be authorized to 452', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAuthorized('452').then(function(isAuthorized) {
        expect(isAuthorized).toBe(true);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should not authorized to 999', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.empty);
      avUserAuthorizations.isAuthorized('999').then(function(isAuthorized) {
        expect(isAuthorized).toBe(false);
      });
      availity.mock.$httpBackend.flush();
    });
  }); // isAuthorized()

  describe('isAnyAuthorized()', function() {
    it('should be authorized to 452', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAnyAuthorized(['452']).then(function(isAuthorized) {
        expect(isAuthorized).toBe(true);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should not authorized to 999', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.empty);
      avUserAuthorizations.isAnyAuthorized(['999']).then(function(isAuthorized) {
        expect(isAuthorized).toBe(false);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should be authorized to 452 or 999', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAnyAuthorized(['452', '999']).then(function(isAuthorized) {
        expect(isAuthorized).toBe(true);
      });
      availity.mock.$httpBackend.flush();
    });

  }); // isAnyAuthorized()

  describe('getOrganizations()', function() {
    it('should have one organization for 452', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getOrganizations('452').then(function(organizations) {
        expect(_.isArray(organizations)).toBe(true);
        expect(organizations.length).toBe(1);
        const org = organizations[0];
        expect(org.id).toBe('1435');
        expect(org.customerId).toBe('1001');
        expect(org.name).toBe('sample org name');
      });
      availity.mock.$httpBackend.flush();
    });

    it('should no organizations for 999', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.empty);
      avUserAuthorizations.getOrganizations('999').then(function(organizations) {
        expect(_.isArray(organizations)).toBe(true);
        expect(organizations.length).toBe(0);
      });
      availity.mock.$httpBackend.flush();
    });
  }); // getOrganizations()

  describe('getPayers()', function() {
    it('should have one payer for 452 and 1435', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPayers('452', '1435').then(function(payers) {
        expect(_.isArray(payers)).toBe(true);
        expect(payers.length).toBe(1);
        const payer = payers[0];
        expect(payer.id).toBe('8001');
        expect(payer.payerId).toBe('PAYER1');
        expect(payer.payerName).toBe('Payer One');
      });
      availity.mock.$httpBackend.flush();
    });

    it('should no payers for 452 and 1001', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.empty);
      avUserAuthorizations.getPayers('452', '1001').then(function(payers) {
        expect(_.isArray(payers)).toBe(true);
        expect(payers.length).toBe(0);
      });
      availity.mock.$httpBackend.flush();
    });

    it('should no payers for 999', function() {
      availity.mock.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.empty);
      avUserAuthorizations.getPayers('999', '1435').then(function(payers) {
        expect(_.isArray(payers)).toBe(true);
        expect(payers.length).toBe(0);
      });
      availity.mock.$httpBackend.flush();
    });
  }); // getPayers()

});

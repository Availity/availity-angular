/* global inject, describe, it, module, beforeEach, expect */

import angular from 'angular';
import _ from 'lodash';
import Tester from 'tester';

import '../';

import FIXTURES from './fixtures/';

describe('avUserAuthorizations', () => {

  const tester = new Tester();

  let avUserAuthorizations;

  const expectPermission452 = permission => {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('452');
    expect(permission.isAuthorized).toBe(true);
    expect(permission.organizations.length).toBe(1);
  };

  const expectPermission999 = permission => {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('999');
    expect(permission.isAuthorized).toBe(false);
    expect(permission.organizations.length).toBe(0);
  };

  const expectPermission1000 = permission => {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('1000');
    expect(permission.isAuthorized).toBe(false);
    expect(permission.organizations.length).toBe(0);
  };

  beforeEach(() => angular.mock.module('availity'));

  beforeEach(inject((_$httpBackend_, _avUserAuthorizations_, avUserPermissionsResource) => {
    avUserAuthorizations = _avUserAuthorizations_;
    avUserPermissionsResource.sessionDate = null; // clear session date for tests
  }));

  tester.service();

  it('should exist', () => {
    expect(avUserAuthorizations).toBeDefined();
    expect(avUserAuthorizations.region).toBeNull();
  });

  describe('getPermissions()', () => {

    it('should get have 452 but not 999', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(permissions => {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      tester.$httpBackend.flush();

    });

    it('should include region if set', () => {

      avUserAuthorizations.setRegion('ALL');
      tester.$httpBackend.expectGET(`${FIXTURES.URI_452_999}&region=ALL`).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(permissions => {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      tester.$httpBackend.flush();
    });

    it('should include merge permissionIds', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(permissions => {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      expect(avUserAuthorizations.permissionIds.length).toBe(2);
      tester.$httpBackend.flush();
      // add third permission to fix
      tester.$httpBackend.expectGET(FIXTURES.URI_452_999_1000).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '1000']).then(permissions => {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission1000(permissions['1000']);
      });
      expect(avUserAuthorizations.permissionIds.length).toBe(3);
      tester.$httpBackend.flush();
    });

    it('should only make one call to api', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(permissions => {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(2);
        expectPermission452(permissions['452']);
        expectPermission999(permissions['999']);
      });
      expect(avUserAuthorizations.permissionIds.length).toBe(2);
      tester.$httpBackend.flush();
      let invoked = false;
      avUserAuthorizations.getPermissions(['452']).then(permissions => {
        expect(_.isArray(permissions)).toBe(false);
        expect(_.size(permissions)).toBe(1);
        expectPermission452(permissions['452']);
        invoked = true;
      });
      expect(avUserAuthorizations.permissionIds.length).toBe(2);
      tester.flush();
      // check that httpBackend is use cache to return
      expect(invoked).toBe(true);
    });

  }); // getPermissions()

  describe('getPermission()', () => {

    it('should get permission 452', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermission('452').then(permission => {
        expectPermission452(permission);
      });
      tester.$httpBackend.flush();
    });

    it('should not have permission 999', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.getPermission('999').then(permission => {
        expectPermission999(permission);
      });
      tester.$httpBackend.flush();
    });
  }); // getPermission()

  describe('isAuthorized()', () => {

    it('should be authorized to 452', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAuthorized('452').then(isAuthorized => {
        expect(isAuthorized).toBe(true);
      });
      tester.$httpBackend.flush();
    });

    it('should not authorized to 999', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.isAuthorized('999').then(isAuthorized => {
        expect(isAuthorized).toBe(false);
      });
      tester.$httpBackend.flush();
    });
  }); // isAuthorized()

  describe('isAnyAuthorized()', () => {

    it('should be authorized to 452', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAnyAuthorized(['452']).then(isAuthorized => {
        expect(isAuthorized).toBe(true);
      });
      tester.$httpBackend.flush();
    });

    it('should not authorized to 999', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.isAnyAuthorized(['999']).then(isAuthorized => {
        expect(isAuthorized).toBe(false);
      });
      tester.$httpBackend.flush();
    });

    it('should be authorized to 452 or 999', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAnyAuthorized(['452', '999']).then(isAuthorized => {
        expect(isAuthorized).toBe(true);
      });
      tester.$httpBackend.flush();
    });

  }); // isAnyAuthorized()

  describe('getOrganizations()', () => {

    it('should have one organization for 452', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getOrganizations('452').then(organizations => {
        expect(_.isArray(organizations)).toBe(true);
        expect(organizations.length).toBe(1);
        const org = organizations[0];
        expect(org.id).toBe('1435');
        expect(org.customerId).toBe('1001');
        expect(org.name).toBe('sample org name');
      });
      tester.$httpBackend.flush();
    });

    it('should no organizations for 999', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.getOrganizations('999').then(organizations => {
        expect(_.isArray(organizations)).toBe(true);
        expect(organizations.length).toBe(0);
      });
      tester.$httpBackend.flush();
    });
  }); // getOrganizations()

  describe('getPayers()', () => {

    it('should have one payer for 452 and 1435', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPayers('452', '1435').then(payers => {
        expect(_.isArray(payers)).toBe(true);
        expect(payers.length).toBe(1);
        const payer = payers[0];
        expect(payer.id).toBe('8001');
        expect(payer.payerId).toBe('PAYER1');
        expect(payer.payerName).toBe('Payer One');
      });
      tester.$httpBackend.flush();
    });

    it('should no payers for 452 and 1001', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_452).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.getPayers('452', '1001').then(payers => {
        expect(_.isArray(payers)).toBe(true);
        expect(payers.length).toBe(0);
      });
      tester.$httpBackend.flush();
    });

    it('should no payers for 999', () => {

      tester.$httpBackend.expectGET(FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.getPayers('999', '1435').then(payers => {
        expect(_.isArray(payers)).toBe(true);
        expect(payers.length).toBe(0);
      });
      tester.$httpBackend.flush();
    });
  });


});

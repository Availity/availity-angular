/* global inject, describe, it, module, beforeEach, expect */

import angular from 'angular';
import * as _ from 'lodash';
import Tester from 'tester';

import ngModule from '../';

import FIXTURES from './fixtures/';

describe('avUserAuthorizations', () => {

  const tester = new Tester();

  let avUserAuthorizations;

  const validatePermission = permission => {
    expect(permission).toBeDefined();
    expect(permission.id).toBe('452');
    expect(permission.isAuthorized).toBe(true);
    expect(permission.organizations.length).toBe(1);
  };

  beforeEach(() => angular.mock.module(ngModule.name));

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

    it('should return valid permissions', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(permissions => {
        validatePermission(permissions[0]);
      });
      tester.$httpBackend.flush();

    });

    it('should include region', () => {

      avUserAuthorizations.setRegion('ALL');
      tester.$httpBackend.expect('GET', FIXTURES.URI_452_999_ALL).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']).then(permissions => {
        expect(_.size(permissions)).toBe(2);
        validatePermission(permissions[0]);
      });
      tester.$httpBackend.flush();
    });

    it('should include merged permission ids', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '999']);
      expect(avUserAuthorizations.permissionIds.length).toBe(2);
      tester.$httpBackend.flush();

      tester.$httpBackend.expect('GET', FIXTURES.URI_452_999_1000).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermissions(['452', '1000']);
      expect(avUserAuthorizations.permissionIds.length).toBe(3);
      tester.$httpBackend.flush();
    });

  });

  describe('getPermission()', () => {

    it('should get single permission', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.getPermission('452').then(permission => {
        validatePermission(permission);
      });
      tester.$httpBackend.flush();
    });

    it('should not have permission 999', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.getPermission('999').then(permission => {
        expect(permission.isAuthorized).toBeFalsy();
      });
      tester.$httpBackend.flush();
    });
  }); // getPermission()

  describe('isAuthorized()', () => {

    it('should return true when valid', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAuthorized('452').then(isAuthorized => {
        expect(isAuthorized).toBe(true);
      });
      tester.$httpBackend.flush();
    });

    it('should return false when invalid', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.isAuthorized('999').then(isAuthorized => {
        expect(isAuthorized).toBe(false);
      });
      tester.$httpBackend.flush();
    });
  }); // isAuthorized()

  describe('isAnyAuthorized()', () => {

    it('should return true when permission is valid', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_452).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAnyAuthorized(['452']).then(isAuthorized => {
        expect(isAuthorized).toBe(true);
      });
      tester.$httpBackend.flush();
    });

    it('should return false permission is invalid', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.isAnyAuthorized(['999']).then(isAuthorized => {
        expect(isAuthorized).toBe(false);
      });
      tester.$httpBackend.flush();
    });

    it('should return true if either permission is valid', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_452_999).respond(200, FIXTURES.VALID);
      avUserAuthorizations.isAnyAuthorized(['452', '999']).then(isAuthorized => {
        expect(isAuthorized).toBe(true);
      });
      tester.$httpBackend.flush();
    });

  });

  describe('getOrganizations()', () => {

    it('should have one organization for 452', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_452).respond(200, FIXTURES.VALID);
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

      tester.$httpBackend.expect('GET', FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.getOrganizations('999').then(organizations => {
        expect(_.isArray(organizations)).toBe(true);
        expect(organizations.length).toBe(0);
      });
      tester.$httpBackend.flush();
    });
  });

  describe('getPayers()', () => {

    it('should have one payer for 452 and 1435', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_452).respond(200, FIXTURES.VALID);
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

      tester.$httpBackend.expect('GET', FIXTURES.URI_452).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.getPayers('452', '1001').then(payers => {
        expect(_.isArray(payers)).toBe(true);
        expect(payers.length).toBe(0);
      });
      tester.$httpBackend.flush();
    });

    it('should no payers for 999', () => {

      tester.$httpBackend.expect('GET', FIXTURES.URI_999).respond(200, FIXTURES.EMPTY);
      avUserAuthorizations.getPayers('999', '1435').then(payers => {
        expect(_.isArray(payers)).toBe(true);
        expect(payers.length).toBe(0);
      });
      tester.$httpBackend.flush();
    });
  });


});

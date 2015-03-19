/*global inject, module*/

describe('avSession', function() {

  'use strict';

  var avSession;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avSession_) {
      avSession = _avSession_;
    });

  });

  it('should exist', function() {
    expect(avSession).toBeDefined();
  });

  describe('hasPermission', function() {
    beforeEach(function() {
      avSession.permissions = [{ id: '1', organizationIds: ['2', '3,', '4'], geographies: ['FL']}];
    });

    it('should return true if the permissionId exists and no orgId or geography is provided', function() {
      avSession.hasPermission('1').then(function(hasPermission) {
        expect(hasPermission).toBe(true);
      });
    });

    it('should return false if the permissionId does not exist', function() {
      avSession.hasPermission('2').then(function(hasPermission) {
        expect(hasPermission).toBe(false);
      });
    });

    it('should return true if the permissionId exists and a valid orgId is provided', function() {
      avSession.hasPermission('1', '2').then(function(hasPermission) {
        expect(hasPermission).toBe(true);
      });
    });

    it('should return false if the permissionId exists but an invalid orgId is provided', function() {
      avSession.hasPermission('1', '7').then(function(hasPermission) {
        expect(hasPermission).toBe(false);
      });
    });

    it('should return true if the permissionId exists and a valid geography is provided', function() {
      avSession.hasPermission('1', null, 'FL').then(function(hasPermission) {
        expect(hasPermission).toBe(true);
      });
    });

    it('should return false if the permissionId exists but an invalid geography is provided', function() {
      avSession.hasPermission('1', null, 'QW').then(function(hasPermission) {
        expect(hasPermission).toBe(false);
      });
    });

    it('should return true if the permissionId exists and a valid orgId and geography are provided', function() {
      avSession.hasPermission('1', '2', 'FL').then(function(hasPermission) {
        expect(hasPermission).toBe(true);
      });
    });

    it('should return false if the permissionId exists and a valid orgId and invalid geography are provided', function() {
      avSession.hasPermission('1', '2', 'QW').then(function(hasPermission) {
        expect(hasPermission).toBe(false);
      });
    });

    it('should return false if the permissionId exists and an invalid orgId and valid geography are provided', function() {
      avSession.hasPermission('1', '7', 'FL').then(function(hasPermission) {
        expect(hasPermission).toBe(false);
      });
    });
  });

});

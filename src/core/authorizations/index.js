import angular from 'angular';
import * as _ from 'lodash';

import ngModule from '../module';
import '../api';

const AvUserAuthorizationsFactory = ($q, $log, avUserPermissionsResource) => {

  class AvUserAuthorizations {

    constructor() {

      /**
       * Region is used to return permission/resources relative to region. If null service will
       * return all permission relative to current.  If value 'ALL' used it will return value relative
       * to all regions the user has access to.
       */
      this.region = null;

      /**
       * PermissionIds contains the set of permissionIds to request from service. If user of service calls
       * setPermissionIds() or call getPermissions() with complete set of permissionIds needed by application,
       * then service should only make that one hit to retrieve permission information.
       */
      this.permissionIds = [];

    }

    setRegion(region) {
      this.region = region;
      return this;
    }

    setPermissionIds(permissionIds) {

      if (!angular.isArray(permissionIds)) {
        throw new Error('permissionsIds must be an array of strings in setPermissionIds()');
      }

      this.permissionIds = permissionIds;

      return this;

    }

    isAuthorized(permissionId) {
      return this.getPermission(permissionId).then(permission => permission.isAuthorized);
    }

    isAnyAuthorized(permissionIds) {
      return this.getPermissions(permissionIds).then(permissions => {
        return _.some(permissions, {isAuthorized: true});
      });
    }

    getPermission(permissionId) {

      if (!angular.isString(permissionId)) {
        throw new Error('permissionsId must be a string ID for getPermission()');
      }

      return this.getPermissions([permissionId])
        .then(permissions => _.find(permissions, {id: permissionId}));
    }

    getPermissions(permissionIds) {

      if (!angular.isArray(permissionIds)) {
        throw new Error('permissionsIds must be an array of string IDs for getPermissions()');
      }

      // Combine pre-loaded permission ids with the ids from this function invocation
      this.permissionIds = _.union(this.permissionIds, permissionIds);

      return avUserPermissionsResource
        .getPermissions(this.permissionIds, this.region)
        .then(permissions => {
          return this.map(permissionIds, permissions);
        });
    }

    getOrganizations(permissionId) {
      return this.getPermission(permissionId).then(permission => permission.organizations);
    }

    getPayers(permissionId, organizationId) {

      return this.getPermission(permissionId).then(permission => {

        const organization = _.find(permission.organizations, {id: organizationId});

        if (organization && organization.resources) {
          return organization.resources;
        }

        return [];

      });

    }

    map(permissionIds, permissions) {

      const self = this;

      const result = _.map(permissionIds, permissionId => {

        const key = {id: permissionId};
        let permission = _.find(permissions, key);
        permission = permission ? self.convert(permission) : self.convert(key);
        return permission;

      });

      return result;

    }

    convert(permission) {

      permission.isAuthorized = permission.organizations ? permission.organizations.length > 0 : false;
      permission.geographies = permission.geographies || [];
      permission.organizations = permission.organizations || [];

      return permission;
    }

  }

  return new AvUserAuthorizations();

};

ngModule.factory('avUserAuthorizations', AvUserAuthorizationsFactory);

import angular from 'angular';
import _ from 'lodash';
import availity from '../module';

const AvUserAuthorizationsFactory = function($q, $log, avUserPermissionsResource) {

  /**
   *
   * @constructor
   */
  const AvUserAuthorizations = function() {

    /**
     * Region is used to return permission/resources relative to region. If null service will
     * return all permission relative to current.  If value 'ALL' used it will return value relative
     * to all regions the user has access to.
     * @type {string}
     */
    this.region = null;

    /**
     * PermissionIds contains the set of permissionIds to request from service. If user of service calls
     * setPermissionIds() or call getPermissions() with complete set of permissionIds needed by application,
     * then service should only make that one hit to retrieve permission information.
     * @type {Array}
     */
    this.permissionIds = [];

  };

  const proto = AvUserAuthorizations.prototype;

  proto.setRegion = function(region) {
    this.region = region;
    return this;
  };

  proto.setPermissionIds = function(permissionIds) {
    if (!angular.isArray(permissionIds)) {
      throw new Error('permissionsIds must be an array of string IDs for avUserAuthorizations#addPermissionIds');
    }
    this.permissionIds = permissionIds;
    return this;
  };

  proto.isAuthorized = function(permissionId) {
    return this.getPermission(permissionId).then(function(permission) {
      return permission.isAuthorized;
    });
  };

  proto.isAnyAuthorized = function(permissionIds) {
    return this.getPermissions(permissionIds).then(function(permissions) {
      const permission = _.findWhere(permissions, {isAuthorized: true});
      return permission !== undefined;
    });
  };

  proto.getPermission = function(permissionId) {
    if (!angular.isString(permissionId)) {
      throw new Error('permissionsId must be a string ID for avUserAuthorizations#getPermission');
    }

    return this.getPermissions([permissionId])
      .then(function(_permissions) {
        return _permissions[permissionId];
      });
  };

  proto.getPermissions = function(permissionIds) {
    const self = this;

    if (!angular.isArray(permissionIds)) {
      throw new Error('permissionsIds must be an array of string IDs for avUserAuthorizations#getPermissions');
    }
    // merge permission ids to reduce calls to backend
    self.permissionIds = _.union(self.permissionIds, permissionIds);

    return avUserPermissionsResource
      .getPermissions(self.permissionIds, self.region)
      .then(function(_permissions) {
        return self.toPermissionMap(permissionIds, _permissions);
      });
  };

  proto.getOrganizations = function(permissionId) {
    return this.getPermission(permissionId).then(function(permission) {
      return permission.organizations;
    });
  };

  proto.getPayers = function(permissionId, organizationId) {
    return this.getPermission(permissionId).then(function(permission) {
      const organization = _.findWhere(permission.organizations, {id: organizationId});

      if (organization && organization.resources) {
        return organization.resources;
      }
      return [];
    });

  };

  /**
   * Converts array permissions to map with value for each permissionId, creating empty permission
   * if can't find permission in array
   * @private
   */
  proto.toPermissionMap = function(permissionIds, _permissions) {

    const self = this;
    const map = {};

    const permissions = _.slice(_permissions);

    _.forEach(permissionIds, function(permissionId) {
      const key = {id: permissionId};
      let permission = _.findWhere(permissions, key);
      permission = permission ? self.toPermission(permission) : self.toPermission(key);
      map[permission.id] = permission;
    });

    return map;
  };

  /**
   * Convert a permission resource into a structure that is easier to work with.
   * @private
   */
  proto.toPermission = function(permission) {
    return {
      id: permission.id,
      description: permission.description ? permission.description : '',
      geographies: permission.geographies ? permission.geographies : [],
      organizations: permission.organizations ? permission.organizations : [],
      isAuthorized: permission.organizations ? permission.organizations.length > 0 : false
    };
  };

  return new AvUserAuthorizations();

};

availity.core.factory('avUserAuthorizations', AvUserAuthorizationsFactory);



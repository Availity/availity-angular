(function(root) {
  'use strict';

  var availity = root.availity;

  var AvUserAuthorizationsFactory = function($q, avUserPermissionsResource) {

    var AvUserAuthorizations = function() {
      this.region = null; // By default will use current region for user based on service, set to 'ALL' for all regions
    };

    var proto = AvUserAuthorizations.prototype;

    proto.setRegion = function(region) {
      this.region = region;
      return this;
    };

    proto.getOrganizations = function(permissionId) {
      return this.getPermission(permissionId).then(function(userPermission) {
        return userPermission.organizations;
      });
    };

    proto.getPayers = function(permissionId, organizationId) {

      return this.getPermission(permissionId).then(function(permission) {

        var organization = _.findWhere(permission.organizations, {id: organizationId});

        if(organization && organization.resources) {
          return organization.resources;
        }

        return [];
      });

    };

    proto.isAuthorized = function(permissionId) {
      return this.getPermission(permissionId).then(function(userPermission) {
        return userPermission.isAuthorized;
      });
    };

    proto.isAnyAuthorized = function(permissionIds) {
      return this.getPermissions(permissionIds).then(function(permisisons) {
        _.includes(permisisons, function(permission) {
          return permission.isAuthorized === true;
        });
      });
    };

    proto.getAuthorizations = function(permissionIds) {

      return this.getPermissions(permissionIds).then(function(permissions) {

        var map = [];

        _.forEach(permissions, function(permission) {
          map[permission.id] = permission.isAuthorized;
        });

        return map;

      });
    };

    proto.getPermissions = function(permissionIds) {

      var self = this;

      if(!angular.isArray(permissionIds)) {
        throw new Error('permissionsIds must be an array of string IDs for avUserAuthorizations#getPermissions');
      }

      return avUserPermissionsResource
        .getPermissions(permissionIds, this.region)
        .then(function(_permissions) {
          return _.map(_permissions, self.toPermission);
        });
    };

    proto.getPermission = function(permissionId) {

      var self = this;

      if(!angular.isString(permissionId)) {
        throw new Error('permissionsId must be a string ID for avUserAuthorizations#getPermission');
      }

      return this.getPermissions([permissionId])
        .then(function(permissions) {
          return self.findPermission(permissions, permissionId);
        });
    };


    proto.findPermission = function(permissions, permissionId) {

      permissions = _.slice(permissions);
      var permission = _.findWhere(permissions, {id: permissionId});

      return permission;

    };

    /**
     * Convert a permission resource into a structure that is easier to work with.
     * @param  {Object} can be a Object or Integer
     * @return {Object} permission object.  Example:
     */
    proto.toPermission = function(permission) {
      return {
        id: permission.id,
        description: permission.description ? permission.description : '',
        geographies: permission.geographies ? permission.geographies : [],
        organizations: permission.organizations ? permission.organizations : [],
        isAuthorized: permission.organizations.length > 0
      };
    };

    return new AvUserAuthorizations();

  };

  availity.core.factory('avUserAuthorizations', AvUserAuthorizationsFactory);

})(window);

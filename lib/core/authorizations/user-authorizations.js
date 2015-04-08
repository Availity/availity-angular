(function(root) {
  'use strict';

  var availity = root.availity;

  // local variables
  var $q;
  var avUserPermissionsResource;
  var avCache;

  /**
   * Creates AvUserAuthorizations service.  This service designed facade around multiple api dealing with
   * permissions/payers.
   *
   * @constructor
   */
  function AvUserAuthorizations() {
    this.userPermissionsMap = {};
    // By default will use current region for user based on service, set to 'ALL' for all regions
    this.region = '';
    this.invalidateUser = true;  // First call will force reload of permission on server
  }

  /**
   * Get organizations from given permission
   * @param permissionId
   * @returns {Array}
   */
  AvUserAuthorizations.prototype.getOrganizationsByPermissionId = function(permissionId) {
    return this.getUserPermission(permissionId).then(function(userPermission) {
      return userPermission.organizations;
    });
  };

  /**
   * Get payers relative to given permission and selected org.id (aka partyId)
   *
   * @param permissionId
   * @param orgId
   * @returns {*|Promise}
   */
  AvUserAuthorizations.prototype.getPayersByPermissionIdAndOrgId = function(permissionId, orgId) {
    return this.getUserPermission(permissionId).then(function(userPermission) {
      var organization = _.findWhere(userPermission.organizations, {id: '' + orgId});
      if(organization && organization.resources) {
        return organization.resources;
      }
      return [];
    });
  };

  /**
   * Return true/false if user is authorized to permission
   * @param permissionId
   * @returns {true/false}
   */
  AvUserAuthorizations.prototype.isAuthorizedTo = function(permissionId) {
    return this.getUserPermission(permissionId).then(function(userPermission) {
      return userPermission.isAuthorized;
    });
  };

  /**
   * Will return a true/false if the user has any of the permission ids
   * @param permissionIds
   * @returns {*}
   */
  AvUserAuthorizations.prototype.isAuthorizedToAny = function(permissionIds) {
    var success = function(userPermissions) {
      var isAuthorized = false;
      // for each one return save of either empty value or permission returned
      angular.forEach(userPermissions, function(userPermission) {
        if(userPermission.isAuthorized) {
          isAuthorized = true;
        }
      });
      return isAuthorized;
    };
    return this.getUserPermissions(permissionIds).then(success);
  };

  /**
   * Will return a map from permissionId to true/false of whether or not user is authorized to permission
   * @param permissionIds
   * @returns {*}
   */
  AvUserAuthorizations.prototype.getAuthorizations = function(permissionIds) {
    var success = function(userPermissions) {
      var isAuthorizedMap = {};
      // for each one return save of either empty value or permission returned
      angular.forEach(userPermissions, function(userPermission) {
        isAuthorizedMap[userPermission.id] = userPermission.isAuthorized;
      });
      return isAuthorizedMap;
    };
    return this.getUserPermissions(permissionIds).then(success);
  };

  /**
   * Get userPermission object
   * @param permissionId
   * @returns {*}
   */
  AvUserAuthorizations.prototype.getUserPermission = function(permissionId) {
    var self = this;
    var permissionLoader = function() {
      var success = function(permissions) {
        return self._getPermission(permissions, permissionId);
      };
      var permissionPromise = avUserPermissionsResource.getPermissions(permissionId, self.region, self.invalidateUser).then(success);
      self.invalidateUser = false; // set to false for all furture calls
      return permissionPromise;
    };
    return self._getPermissionCache().get(permissionId, permissionLoader);
  };

  /**
   * Get multiple userPermission on one call
   * @param permissionIds
   * @returns {*}
   */
  AvUserAuthorizations.prototype.getUserPermissions = function(permissionIds) {
    var self = this;
    permissionIds = self._toArray(permissionIds);
    var cache = self._getPermissionCache();
    // indicate loading permission
    angular.forEach(permissionIds, function(permissionId) {
      cache.getCacheItem(permissionId).shouldLoad();
    });
    var success = function(permissions) {
      var userPermissions = [];
      // for each one return save of either empty value or permission returned
      angular.forEach(permissionIds, function(permissionId) {
        var userPermission = self._getPermission(permissions, permissionId);
        cache.put(permissionId, userPermission);
        userPermissions.push(userPermission);
      });
      return userPermissions;
    };
    var error = function() {
      angular.forEach(permissionIds, function(permissionId) {
        cache.getCacheItem(permissionId).onError();
      });
    };
    var permissionPromise = avUserPermissionsResource.getPermissions(permissionIds, self.region, self.invalidateUser).then(success, error);
    self.invalidateUser = false;
    return permissionPromise;
  };

  /**
   * Will take a single string and turn it into an array or just return the array back if already and array.
   * @param permissionIds
   * @returns an array of permission ids
   */
  AvUserAuthorizations.prototype._toArray = function(permissionIds) {
    if(!(permissionIds instanceof Array)) {
      permissionIds = [permissionIds];
    }
    return permissionIds;
  };


  /**
   * Returns the permission cache to use, since calls are region specific the region is used as part of key
   * @returns {*}
   * @private
   */
  AvUserAuthorizations.prototype._getPermissionCache = function() {
    var key = 'avUserAuthorizations.permissionCache' + this.region;
    return avCache.getCache(key);
  };

  /**
   * Set result into value result
   * @param userPermission
   * @param permission
   * @private
   */
  AvUserAuthorizations.prototype._setUserPermission = function(userPermission, permission) {
    userPermission.id = permission.id;
    userPermission.description = permission.description;
    userPermission.geographies = permission.geographies;
    userPermission.organizations = permission.organizations ? permission.organizations : [];
    userPermission.isAuthorized = userPermission.organizations.length > 0;
  };

  /**
   * Get the permission for given from list of returned permissions from api,
   * if permission does not exist then will create empty one.
   *
   * @param permissionId
   * @param permissions
   * @returns {*}
   * @private
   */
  AvUserAuthorizations.prototype._getPermission = function(permissions, permissionId) {
    var permission;
    if(angular.isArray(permissions)) {
      permission = _.findWhere(permissions, {id: '' + permissionId});
    }
    if(angular.isDefined(permission)) {
      permission = this._clonePermission(permission);
    } else {
      permission = this._emptyPermission(permissionId);
    }
    return permission;
  };

  /**
   * Clone permission copying only attributes supported by this service
   * @param permission
   * @private
   */
  AvUserAuthorizations.prototype._clonePermission = function(permission) {
    var userPermission = {};
    userPermission.id = permission.id;
    userPermission.description = permission.description;
    userPermission.geographies = permission.geographies;
    userPermission.organizations = permission.organizations ? permission.organizations : [];
    userPermission.isAuthorized = userPermission.organizations.length > 0;
    return userPermission;
  };

  AvUserAuthorizations.prototype._emptyPermission = function(permissionId) {
    var userPermission = {};
    userPermission.id = '' + permissionId;
    userPermission.description = '';
    userPermission.geographies = [];
    userPermission.organizations = [];
    userPermission.isAuthorized = false;
    return userPermission;
  };

  availity.core.factory('avUserAuthorizations', function($injector) {
    $q = $injector.get('$q');
    avUserPermissionsResource = $injector.get('avUserPermissionsResource');
    avCache = $injector.get('avCache');
    return new AvUserAuthorizations();
  });

})
(window);

(function(root) {
  'use strict';

  var availity = root.availity;

  // local variables
  var $q;
  var avUserPermissionsResource;
  var avCache;

  /**
   * CacheItem is wrapper around permission with promise
   * @param initValue
   * @constructor
   */
  function CacheItem(initValue) {
    this.value = initValue;
    this.promises = [];
  }

  CacheItem.prototype.onSuccess = function() {
    this.loading = false;
    this.error = false;
    this.resolveAll();
  };

  CacheItem.prototype.onError = function() {
    this.loading = false;
    this.error = true;
    this.resolveAll();
  };


  CacheItem.prototype.shouldLoad = function() {
    var shouldLoad = (this.loading === undefined);
    if(shouldLoad) {
      this.loading = true;
    }
    return shouldLoad;
  };

  CacheItem.prototype.promise = function() {
    var deferred = $q.defer();
    if(this.loading === false) {
      this.resolve(deferred);
    } else {
      this.promises.push(deferred);
    }
    return deferred.promise;
  };

  CacheItem.prototype.resolve = function(deferred) {
    if(this.error === true) {
      deferred.reject(this.value);
    } else {
      deferred.resolve(this.value);
    }
  };

  CacheItem.prototype.resolveAll = function() {
    var self = this;
    // resolve and clear all promises
    while(this.promises.length > 0) {
      var deferred = this.promises.pop();
      self.resolve(deferred);
    }
  };

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
      var organization = _.findWhere(userPermission.organizations, {id: orgId});
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
    var self = this;
    permissionIds = self._toArray(permissionIds);
    var success = function() {
      var isAuthorized = false;
      // for each one return save of either empty value or permission returned
      angular.forEach(permissionIds, function(permissionId) {
        var userPermission = self._getUserPermissionObject(permissionId);
        if(userPermission.value.isAuthorized) {
          isAuthorized = true;
        }
      });
      return isAuthorized;
    };
    return self.getUserPermissions(permissionIds).then(success);
  };

  /**
   * Will return a map from permissionId to true/false of whether or not user is authorized to permission
   * @param permissionIds
   * @returns {*}
   */
  AvUserAuthorizations.prototype.getIsAuthorizedMap = function(permissionIds) {
    var self = this;
    permissionIds = self._toArray(permissionIds);
    var success = function() {
      var isAuthorizedMap = {};
      // for each one return save of either empty value or permission returned
      angular.forEach(permissionIds, function(permissionId) {
        var userPermission = self._getUserPermissionCacheItem(permissionId);
        isAuthorizedMap[permissionId] = userPermission.value.isAuthorized;
      });
      return isAuthorizedMap;
    };
    return self.getUserPermissions(permissionIds).then(success);
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
        if(angular.isArray(permissions) && permissions.length > 0) {
          return self._clonePermission(permissions[0]);
        }
        return self._emptyPermission(permissionId);
      };
      var promiseResponse = avUserPermissionsResource.getPermissions(permissionId, self.region, self.invalidateUser).then(success);
      self.invalidateUser = false; // set to false for all furture calls
      return promiseResponse;
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
    // indicate loading permission
    angular.forEach(permissionIds, function(permissionId) {
      self._getUserPermissionObject(permissionId).shouldLoad();
    });
    var success = function(permissions) {
      // for each one return save of either empty value or permission returned
      angular.forEach(permissionIds, function(permissionId) {
        // '' needed to convert permission id to string if number passed in
        var permission = _.findWhere(permissions, {id: '' + permissionId});
        if(!angular.isDefined(permission)) {
          permission = {};
        }
        var userPermission = self._getUserPermissionCacheItem(permissionId);
        self._setUserPermission(userPermission.value, permission);
        userPermission.onSuccess();
      });
      return permissions;
    };
    var error = function() {
      angular.forEach(permissionIds, function(permissionId) {
        self._getUserPermissionObject(permissionId).onError();
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
   * Wraps getting user permission wrapper object from map
   * @param permissionId
   * @returns {*}
   * @private
   */
  AvUserAuthorizations.prototype._getUserPermissionCacheItem = function(permissionId) {
    var self = this;
    var key = self.region + ':' + permissionId;
    var userPermission = self.userPermissionsMap[key];
    if(!angular.isDefined(userPermission)) {
      userPermission = new CacheItem({});
      self.userPermissionsMap[key] = userPermission;
    }
    return userPermission;
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

(function(root) {
  'use strict';

  var availity = root.availity;

  // local variables
  var $q;
  var avUserPermissionsResource;

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
   * permissions
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
   * Get userPermission object
   * @param permissionId
   * @returns {*}
   */
  AvUserAuthorizations.prototype.getUserPermission = function(permissionId) {
    var self = this;
    var userPermission = self._getUserPermissionCacheItem(permissionId);

    if(userPermission.shouldLoad()) {
      var success = function(permissions) {
        var permission = (angular.isArray(permissions) && permissions.length > 0) ? permissions[0] : {};
        self._setUserPermission(userPermission.value, permission);
        userPermission.onSuccess();
        return permission;
      };
      var error = function() {
        userPermission.onError();
      };
      avUserPermissionsResource.getPermissions(permissionId, self.region, self.invalidatUser).then(success, error);
      self.invalidatUser = false;
    }
    return userPermission.promise();
  };

  /**
   * Wraps getting user permission wrapper object from map
   * @param permissionId
   * @returns {*}
   * @private
   */
  AvUserAuthorizations.prototype._getUserPermissionCacheItem = function(permissionId) {
    var self = this;
    var userPermission = self.userPermissionsMap[permissionId];
    if(!angular.isDefined(userPermission)) {
      userPermission = new CacheItem({});
      self.userPermissionsMap[permissionId] = userPermission;
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

  availity.core.factory('avUserAuthorizations', function($injector) {
    $q = $injector.get('$q');
    avUserPermissionsResource = $injector.get('avUserPermissionsResource');
    return new AvUserAuthorizations();
  });

})(window);

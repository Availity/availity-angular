(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_SESSION', {
    SESSION_TIMEOUT: 'av:auth:session:timeout',
    NOT_AUTHORIZED: 'av:auth:not:authorized'
  });

  availity.core.factory('avSession', function($q, avUsersResource, avPermissionsResource) {

    var AvSession = function() {
      this.user = null;
      this.permissions = null;
    };

    var proto = AvSession.prototype;

    proto.getUser = function() {
      var self = this;

      if(this.user) {
        return $q.when(this.user);
      }

      return avUsersResource.me().then(function(user) {
        self.user = user;
        return self.user;
      });
    };

    proto.getPermissions = function() {
      var self = this;

      if(this.permissions) {
        return $q.when(this.permissions);
      }

      return avPermissionsResource.query().then(function(permissions) {
        self.permissions = permissions;
        return self.permissions;
      });
    };

    proto.hasPermission = function(permissionId, orgId, geography) {
      return this.getPermissions().then(function(permissions) {
        var permission = _.find(permissions, function(p) {
          return p.id === permissionId;
        });
        if(permission === undefined) {
          return false;
        }

        if(orgId !== undefined && orgId !== null && !_.contains(permission.organizationIds, orgId)) {
          return false;
        }

        if(geography !== undefined && geography !== null && !_.contains(permission.geographies, geography)) {
          return false;
        }

        return true;
      });
    };

    proto.destroy = function() {
      this.user = null;
      this.permisions = null;
    };

    return new AvSession();
  });

})(window);

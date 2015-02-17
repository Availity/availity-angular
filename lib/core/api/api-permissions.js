(function(root) {

  'use strict';

  var PermissionFactory = function(AvApiResource) {

    var AvPermissionsResource = function() {
      AvApiResource.call(this, {version: '/v1', url: '/permissions'});
    };

    angular.extend(AvPermissionsResource.prototype, AvApiResource.prototype, {

      afterAll: function(response) {
        return response.data.permissions ? response.data.permissions : response.data;
      },

      getPermissions: function(permissionId) {
        return this.all({params: {permissionId: permissionId}}).then(function(response) {
          var result = response.data.permissions ? response.data.permissions : [];
          return result;
        });
      }

    });
    return new AvPermissionsResource();
  };


  root.availity.core.factory('avPermissionsResource', PermissionFactory);

})(window);

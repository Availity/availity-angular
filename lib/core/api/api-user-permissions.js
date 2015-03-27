(function (root) {

  'use strict';

  var UserPermissionsFactory = function (AvApiResource) {

    var AvUserPermissionsResource = function () {
      AvApiResource.call(this, {
        level: '/internal',
        version: '/v1',
        url: '/axi-user-permissions'
      });
    };

    angular.extend(AvUserPermissionsResource.prototype, AvApiResource.prototype, {

      afterAll: function (response) {
        return response.data.axiUserPermissions ? response.data.axiUserPermissions : [];
      },

      getPermissions: function (permissionId, region) {
        return this.all({params: {permissionId: permissionId, region: region, limit: 1000, offset: 0}});
      }

    });
    return new AvUserPermissionsResource();
  };


  root.availity.core.factory('avUserPermissionsResource', UserPermissionsFactory);

})(window);

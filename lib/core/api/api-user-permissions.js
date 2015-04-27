(function (root) {

  'use strict';

  var availity = root.availity;

  var AvUserPermissionsResourceFactory = function (AvApiResource) {

    var AvUserPermissionsResource = function () {
      AvApiResource.call(this, {
        level: '/internal',
        version: '/v1',
        url: '/axi-user-permissions'
      });
    };

    angular.extend(AvUserPermissionsResource.prototype, AvApiResource.prototype, {

      afterQuery: function (response) {
        return response.data.axiUserPermissions ? response.data.axiUserPermissions : [];
      },

      getPermissions: function (permissionIds, region) {
        return this.query({
          params: {
            permissionId: permissionIds,
            region: region
          }
        });
      }

    });

    return new AvUserPermissionsResource();

  };

  availity.core.factory('avUserPermissionsResource', AvUserPermissionsResourceFactory);

})(window);

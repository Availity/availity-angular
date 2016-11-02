import ngModule from '../module';

const AvUserPermissionsResourceFactory = function(AvApiResource) {

  class AvUserPermissionsResource extends AvApiResource {

    constructor() {

      super({
        path: '/api/internal',
        version: '/v1',
        name: '/axi-user-permissions'
      });
    }

    afterQuery(response) {
      return response.data.permissions ? response.data.permissions : [];
    }

    getPermissions(permissionIds, region) {

      return this.query({
        params: {
          permissionId: permissionIds,
          region
        }
      });

    }
  }

  return new AvUserPermissionsResource();

};

ngModule.factory('avPermissionsResource', AvUserPermissionsResourceFactory);

export default ngModule;



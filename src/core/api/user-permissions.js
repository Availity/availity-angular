import ngModule from '../module';

const AvUserPermissionsResourceFactory = function(AvApiResource) {

  class AvUserPermissionsResource extends AvApiResource {

    constructor() {

      super({
        path: '/api/internal',
        version: '/v1',
        name: '/axi-user-permissions'
      });
      /**
       * sessionDate used by api to determine if server side cache is out of date.
       * i.e if user cache on server is older then sessionDate it will repull user information.
       */
      this.sessionDate = new Date().toJSON();
    }

    afterQuery(response) {
      return response.data.axiUserPermissions ? response.data.axiUserPermissions : [];
    }

    getPermissions(permissionIds, region) {

      return this.query({
        params: {
          region,
          permissionId: permissionIds,
          sessionDate: this.sessionDate
        }
      });

    }
  }

  return new AvUserPermissionsResource();

};

ngModule.factory('avUserPermissionsResource', AvUserPermissionsResourceFactory);

export default ngModule;

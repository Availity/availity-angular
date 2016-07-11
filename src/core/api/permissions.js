import moment from 'moment';

import ngModule from '../module';

const AvUserPermissionsResourceFactory = function(AvApiResource) {

  class AvUserPermissionsResource extends AvApiResource {

    constructor() {

      super({
        path: '/api/internal',
        version: '/v1',
        name: '/axi-user-permissions'
      });

      this.cacheBust = moment().unix();
    }

    afterQuery(response) {
      return response.data.axiUserPermissions ? response.data.axiUserPermissions : [];
    }

    getPermissions(permissionIds, region) {

      return this.query({
        params: {
          permissionId: permissionIds,
          region,
          cacheBust: this.cacheBust
        }
      });

    }
  }

  return new AvUserPermissionsResource();

};

ngModule.factory('avUserPermissionsResource', AvUserPermissionsResourceFactory);

export default ngModule;



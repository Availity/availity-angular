import ngModule from '../module';

const AvRegionsFactory = function(AvApiResource, avUsersResource) {

  class AvRegionsResource extends AvApiResource {

    constructor() {

      super({
        path: '/api/sdk/platform',
        name: '/regions'
      });

    }

    afterGet(response) {
      return response.data.regions || [];
    }

    queryRegions(user, config) {
      return this.get(user.id, config);
    }

    getRegions(config) {
      return avUsersResource
        .me()
        .then(user => ::this.queryRegions(user, config));
    }
  }

  return new AvRegionsResource();

};

ngModule.factory('avRegionsResource', AvRegionsFactory);

export default ngModule;



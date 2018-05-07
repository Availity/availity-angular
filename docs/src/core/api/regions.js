import ngModule from '../module';

const AvRegionsFactory = function(AvApiResource, avUsersResource) {

  class AvRegionsResource extends AvApiResource {

    constructor() {

      super({
        path: '/api/sdk/platform',
        name: '/regions',
        sessionBust: false,
        pageBust: true
      });

    }

    afterGet(response) {
      return response.data.regions || [];
    }

    afterUpdate(response) {
      this.setPageBust();
      return response;
    }

    getRegions(config) {
      return this.checkUser(config)
        .then(checkedConfig => {
          return this.query(checkedConfig);
        });
    }

    checkUser(config = {}) {

      config.params = config.params || {};
      if (config.params.userId) {
        return Promise.resolve(config);
      }

      return avUsersResource.me()
        .then(user => {
          config.params.userId = user.id;
          return config;
        });
    }

    getCurrentRegion() {
      return this.query({
        params: {
          currentlySelected: true
        }
      });
    }
  }

  return new AvRegionsResource();

};

ngModule.factory('avRegionsResource', AvRegionsFactory);

export default ngModule;

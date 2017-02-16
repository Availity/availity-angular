import merge from 'lodash.merge';
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

    queryRegions(user, config) {

      const params = {
        params: {
          userId: user.id
        }
      };

      const conf = merge({}, params, config);

      return this.query(conf);

    }

    getCurrentRegion() {
      return this.getRegions()
        .then(regions => {
          return regions.find(region => region.currentlySelected);
        });
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

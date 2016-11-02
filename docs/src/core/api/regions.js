import _ from 'lodash';
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

      const params = {
        params: {
          userId: user.id
        }
      };

      const conf = _.merge({}, params, config);

      return this.query(conf);

    }

    getCurrentRegion() {
      return this.getRegions()
        .then(regions => {
          return _.find(regions, region => region.currentlySelected);
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



import angular from 'angular';
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
      return (response && response.data && response.data.regions) || [];
    }

    afterUpdate(response) {
      this.setPageBust();
      return response;
    }

    getAllRegions() {
      return this.query({
        pageBust: false
      });
    }
    getRegions(userId = false) {
      return (userId ? Promise.resolve({ id: userId }) : avUsersResource.me())
      .then(user => {
        return this.query({
          params: {
            userId: user.id
          }
        });
      });
    }
    getCurrentRegion(user = false) {
      const config = {
        params: {
          currentlySelected: true
        }
      };
      if (user) {
        config.params.userId = user;
      }
      return this.query(config);
    }
    setCurrentRegion(region) {
      const id = angular.isString(region) ? region : region.id;
      if (id) {
        this.update(id);
      }
    }
  }

  return new AvRegionsResource();

};

ngModule.factory('avRegionsResource', AvRegionsFactory);

export default ngModule;

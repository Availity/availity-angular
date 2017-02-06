import angular from 'angular';
import ngModule from '../module';

const Navigation = function(AvApiResource, avRegionsResource) {

  class NavigationResource extends AvApiResource {

    constructor() {
      super({
        path: '/api/sdk/platform',
        name: '/navigation/spaces'
      });
    }

    /*
      set authorized variables before query
      if authorized is true: add authorized=true and region to params
      if filterOnRegion is defined, add its value and region to params
    */
    querySpace(id, config = {}, authorized = true, filterOnRegion) {
      const needRegion = authorized || !angular.isUndefined(filterOnRegion);
      return (needRegion ? Promise.resolve() : avRegionsResource.getCurrentRegion())
      .then(response => {
        const params = { id, authorized, filterOnRegion };
        if (needRegion && response && response.data && response.data.regions && response.data.regions[0]) {
          params.region = response.data.regions[0];
        }
        return this.query(angular.merge({}, { params }, config));
      });
    }
  }

  return new NavigationResource();

};

ngModule.factory('avNavigationResource', Navigation);

export default ngModule;

import angular from 'angular';
import ngModule from '../module';

const ProvidersResourceFactory = function(AvApiResource) {

  class ProvidersResource extends AvApiResource {

    constructor() {
      super({
        path: '/api/internal',
        name: 'providers'
      });
    }

    afterQuery(response) {
      return response.data.providers || [];
    }

    getProviders(customerId, config) {

      const params = {
        params: {
          customerId
        }
      };

      // merge in params with user ID
      const queryConfig = angular.merge({}, params, config);

      return this.query(queryConfig);
    }

  }

  return new ProvidersResource();
};

ngModule.factory('avProvidersResource', ProvidersResourceFactory);

export default ngModule;

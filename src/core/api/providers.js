import _ from 'lodash';

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
      const queryConfig = _.merge({}, params, config);

      return this.query(queryConfig);
    }

  }

  return new ProvidersResource();
};

ngModule.factory('avProvidersResource', ProvidersResourceFactory);

export default ngModule;


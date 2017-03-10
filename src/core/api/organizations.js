import angular from 'angular';
import ngModule from '../module';

const OrganizationResourceFactory = function(AvApiResource, avUsersResource) {

  class OrganizationResource extends AvApiResource {

    constructor() {
      super({
        path: '/api/sdk/platform',
        name: 'organizations'
      });
    }

    afterQuery(response) {
      return response.data.organizations || [];
    }

    queryOrganizations(user, config) {

      const params = {
        params: {
          userId: user.id
        }
      };

      // merge in params with user ID
      const queryConfig = angular.merge({}, params, config);

      return this.query(queryConfig);
    }

    getOrganizations(config) {

      return avUsersResource
        .me()
        .then(user => {
          return ::this.queryOrganizations(user, config);
        });
    }

  }

  return new OrganizationResource();
};

ngModule.factory('avOrganizationsResource', OrganizationResourceFactory);

export default ngModule;

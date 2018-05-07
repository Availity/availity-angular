import angular from 'angular';
import ngModule from '../module';

// A basic clone of /src/core/api/organizations.js. The original services applies afterQuery
// transformation which removes the pagination bits of the response (needed by dropdown pagination)
const OrganizationsSelectResourceFactory = function(AvSelectResource, avUsersResource) {

  class OrganizationsSelectResource extends AvSelectResource {

    constructor() {
      super({
        path: '/api/sdk/platform',
        name: 'organizations'
      });
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

    defaultQuery(config) {
      return this.getOrganizations(config);
    }

    getOrganizations(config) {

      const self = this;

      return avUsersResource
        .me()
        .then(user => {
          return self.queryOrganizations.call(self, user, config);
        });
    }

    getResults(response) {
      return response.organizations;
    }

    mapResult(item) {
      return {
        id: item.customerId,
        text: item.name
      };
    }

  }

  return new OrganizationsSelectResource();
};

ngModule.factory('avSelectOrganizationsResource', OrganizationsSelectResourceFactory);

export default ngModule;

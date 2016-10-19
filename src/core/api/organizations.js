import ngModule from '../module';

const OrganizationResourceFactory = function(AvApiResource) {

  class OrganizationResource extends AvApiResource {

    constructor() {
      super({
        path: '/api/sdk/platform',
        name: 'organizations'
      });
    }

    getOrganizations(config) {
      return this.query(config).then(response => {
        return response.data.organizations ? response.data.organizations : response.data;
      });
    }

  }

  return new OrganizationResource();
};

ngModule.factory('avOrganizationsResource', OrganizationResourceFactory);

export default ngModule;


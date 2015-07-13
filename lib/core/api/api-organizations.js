(function(root) {

  'use strict';

  var availity = root.availity;

  var OrganizationResourceFactory = function(AvApiResource) {

    var OrganizationResource = function() {
      AvApiResource.call(this, 'organizations');
    };

    angular.extend(OrganizationResource.prototype, AvApiResource.prototype, {

      getOrganizations: function(config) {
        return this.query(config).then(function(response) {
          return response.data.organizations ? response.data.organizations : response.data;
        });
      }

    });

    return new OrganizationResource();
  };

  availity.core.factory('avOrganizationsResource', OrganizationResourceFactory);

})(window);

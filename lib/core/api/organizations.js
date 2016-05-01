'use strict';

import angular from 'angular';
import availity from '../module';

const OrganizationResourceFactory = function(AvApiResource) {

  const OrganizationResource = function() {
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


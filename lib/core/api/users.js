'use strict';

import angular from 'angular';

import availity from '../module';

const UserServiceFactory = function(AvApiResource) {

  const AvUsersResource = function() {
    AvApiResource.call(this, 'users');
  };

  angular.extend(AvUsersResource.prototype, AvApiResource.prototype, {

    afterGet: function(response) {
      const user = response.data.user ? response.data.user : response.data;
      return user;
    },

    me: function(config) {
      return this.get('me', config);
    }

  });

  return new AvUsersResource();

};

availity.core.factory('avUsersResource', UserServiceFactory);



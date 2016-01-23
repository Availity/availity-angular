'use strict';

import angular from 'angular';

import availity from '../module';

var UserServiceFactory = function(AvApiResource) {

  var AvUsersResource = function() {
    AvApiResource.call(this, 'users');
  };

  angular.extend(AvUsersResource.prototype, AvApiResource.prototype, {

    afterGet: function(response) {
      var user = response.data.user ? response.data.user : response.data;
      return user;
    },

    me: function(config) {
      return this.get('me', config);
    }

  });

  return new AvUsersResource();

};

availity.core.factory('avUsersResource', UserServiceFactory);



(function(root) {
  'use strict';

  var availity = root.availity;

  var UserServiceFactory = function(AvApiResource, $q) {

    var AvUsersResource = function() {
      this.user = null;
      AvApiResource.call(this, 'users');
    };

    angular.extend(AvUsersResource.prototype, AvApiResource.prototype, {

      afterGet: function(response) {
        var user = response.data.user ? response.data.user : response.data;
        this.user = user;
        return user;
      },

      me: function() {

        if(this.user) {
          return $q.when(this.user);
        }

        return this.get('me');
      }

    });

    return new AvUsersResource();

  };

  availity.core.factory('avUsersResource', UserServiceFactory);

})(window);

'use strict';

import availity from '../module';

availity.core.constant('AV_SESSION', {
  SESSION_TIMEOUT: 'av:auth:session:timeout',
  NOT_AUTHORIZED: 'av:auth:not:authorized'
});

availity.core.factory('avSession', function($q, avUsersResource) {

  class AvSession {

    constructor() {
      this.user = null;
      this.permissions = null;
    }

    getUser() {

      var self = this;

      if (this.user) {
        return $q.when(this.user);
      }

      return avUsersResource.me().then(function(user) {
        self.user = user;
        return self.user;
      });

    }


    destroy() {
      this.user = null;
      this.permisions = null;
    }

  }

  return new AvSession();
});



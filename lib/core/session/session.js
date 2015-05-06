(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_SESSION', {
    SESSION_TIMEOUT: 'av:auth:session:timeout',
    NOT_AUTHORIZED: 'av:auth:not:authorized'
  });

  availity.core.factory('avSession', function($q, avUsersResource) {

    var AvSession = function() {
      this.user = null;
      this.permissions = null;
    };

    var proto = AvSession.prototype;

    proto.getUser = function() {
      var self = this;

      if(this.user) {
        return $q.when(this.user);
      }

      return avUsersResource.me().then(function(user) {
        self.user = user;
        return self.user;
      });
    };


    proto.destroy = function() {
      this.user = null;
      this.permisions = null;
    };

    return new AvSession();
  });

})(window);

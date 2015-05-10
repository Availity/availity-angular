(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('IdleCtrl', function($scope, avIdle) {

    $scope.idle = {
      idleTimeout: 3000,
      sessionTimeout: 6000,
      pingTimeout: 1000,
      redirectUrl: 'http://www.example.com',
      start: function(idle, session, ping, url) {

        avIdle
          .setIdleTimeout(idle)
          .setSessionTimeout(session)
          .setPingTimeout(ping)
          .setRedirectUrl(url)
          .start();

      },
      stop: avIdle.stop
    };

  });

})(window);

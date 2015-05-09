(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('IdleCtrl', function($scope, avIdle) {

    $scope.idle = {
      idleTimeout: 10000,
      sessionTimeout: 20000,
      pingTimeout: 2000,
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

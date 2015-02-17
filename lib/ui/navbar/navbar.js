
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_NAVBAR', {

    OPTIONS: {},

    TEMPLATES: {
      NAVBAR: 'ui/navbar/navbar-tpl.html'
    }
  });

  availity.ui.directive('avNavbar', function(AV_NAVBAR, avSession) {
    return {
      restrict: 'A',
      replace: true,
      scope: {},
      templateUrl: AV_NAVBAR.TEMPLATES.NAVBAR,
      controller: function($scope) {
        avSession.getUser().then(function(user) {
          $scope.currentUser = user;
        });
      }
    };
  });

})(window);

(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.constant('DEMO_PERMISSIONS', {
    GOOD: '452',
    BAD: '999'
  });

  availity.demo.controller('HasPermissionController', function($scope, DEMO_PERMISSIONS, avUserAuthorizations) {
    $scope.DEMO_PERMISSIONS = DEMO_PERMISSIONS;
    $scope.either = _.values(DEMO_PERMISSIONS);
    $scope.toggle1 = DEMO_PERMISSIONS.GOOD;
    $scope.toggle2 = DEMO_PERMISSIONS.GOOD;

    // This is not required but does prevent multiple hits bad to server
    avUserAuthorizations.getPermissions(_.values(DEMO_PERMISSIONS));
  });

})(window);

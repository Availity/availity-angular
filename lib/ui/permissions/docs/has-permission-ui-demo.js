(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.constant('DEMO_PERMISSIONS', {
    GOOD: '452',
    BAD: '999'
  });

  availity.demo.controller('HasPermissionController', function($scope, DEMO_PERMISSIONS, avUserAuthorizations) {

    var permissions = _.values(DEMO_PERMISSIONS);

    $scope.DEMO_PERMISSIONS = DEMO_PERMISSIONS;

    $scope.either = permissions;

    // This is not required but does prevent multiple hits bad to server
    avUserAuthorizations.getPermissions(permissions);
  });

})(window);

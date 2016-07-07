import demo from 'demo';

demo.constant('DEMO_PERMISSIONS', {
  GOOD: '452',
  BAD: '999'
});

demo.controller('DemoHidePermissionController', ($scope, DEMO_PERMISSIONS) => {

  $scope.vm = {
    PERMISSIONS: DEMO_PERMISSIONS
  };

});

demo.run($httpBackend => {
  $httpBackend
    .whenRoute('GET', /\/api\/internal\/v1\/axi-user-permissions\?cacheBust=.*&permissionId=452/)
    .respond({});
});


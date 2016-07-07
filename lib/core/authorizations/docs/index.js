import demo from 'demo';

import './service';
import response from './fixtures/7100.json';

demo.controller('DemoAuthenticationController', ($scope, demoAuthenticationService) => {
  $scope.vm = demoAuthenticationService;
});

demo.run($httpBackend => {
  $httpBackend
    .whenRoute('GET', /\/api\/internal\/v1\/axi-user-permissions\?cacheBust=.*&permissionId=7100/)
    .respond(response);
});


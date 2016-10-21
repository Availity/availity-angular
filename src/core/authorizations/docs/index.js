import demo from 'demo';

import './service';
import response from './fixtures/permissions.json';

demo.controller('DemoAuthenticationController', ($scope, demoAuthenticationService) => {
  $scope.vm = demoAuthenticationService;
});

demo.run($httpBackend => {
  $httpBackend
    .whenRoute('GET', /\/api\/internal\/v1\/axi-user-permissions\?permissionId=(7100|8100|9100).*&sessionBust=.*/)
    .respond(response);
});


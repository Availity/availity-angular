import demo from 'demo';

import response from './fixtures/response.json';

demo.controller('DemoHidePermissionController', () => {

});

demo.run($httpBackend => {
  $httpBackend
    .whenRoute('GET', /\/api\/internal\/v1\/axi-user-permissions\?cacheBust=.*&permissionId=7100/)
    .respond(response);

  $httpBackend
    .whenRoute('GET', /\/api\/internal\/v1\/axi-user-permissions\?cacheBust=.*&permissionId=8100/)
    .respond(response);

  $httpBackend
    .whenRoute('GET', /\/api\/internal\/v1\/axi-user-permissions\?cacheBust=.*&permissionId=9100/)
    .respond(response);
});


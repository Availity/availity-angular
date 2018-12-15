import demo from 'demo';

import './service';

import photos1 from './fixtures/photos-1.json';
import photos2 from './fixtures/photos-2.json';
import organizations1 from './fixtures/organizations-1.json';
import organizations2 from './fixtures/organizations-2.json';
import organizations3 from './fixtures/organizations-3.json';
import user from './fixtures/user.json';

demo.controller('DemoDropdownController', ($scope, demoDropdownService) => {
  $scope.vm = demoDropdownService;
});


demo.run($httpBackend => {

  $httpBackend
    .when('GET', /\/api\/v1\/photos\?offset=.*&q=a.*/)
    .respond(photos1);

  $httpBackend
    .when('GET', /\/api\/v1\/photos\?offset=.*&q=.*/)
    .respond(photos2);

  $httpBackend
    .when('GET', /\/api\/sdk\/platform\/v1\/users\/me.*/)
    .respond(user);

  $httpBackend
    .when('GET', /\/api\/sdk\/platform\/v1\/organizations\?offset=.*&q=.*/)
    .respond(organizations3);

  $httpBackend
    .when('GET', /\/api\/sdk\/platform\/v1\/organizations\?offset=0.*/)
    .respond(organizations1);

  $httpBackend
    .when('GET', /\/api\/sdk\/platform\/v1\/organizations\?offset=50.*/)
    .respond(organizations2);

});

import demo from 'demo';

import './service';

import photos1 from './fixtures/photos-1.json';
import photos2 from './fixtures/photos-2.json';

demo.controller('DemoDropdownController', ($scope, demoDropdownService) => {
  $scope.vm = demoDropdownService;
});


demo.run($httpBackend => {

  $httpBackend
    .whenRoute('GET', /\/api\/v1\/photos\?offset=.*&q=a.*/)
    .respond(photos1);

  $httpBackend
    .whenRoute('GET', /\/api\/v1\/photos\?offset=.*&q=.*/)
    .respond(photos2);
});

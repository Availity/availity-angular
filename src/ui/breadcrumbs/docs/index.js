import demo from 'demo';

import json from './space.json';

demo.controller('DemoBreadcrumbsController', ($scope, demoDropdownService) => {
  $scope.vm = demoDropdownService;
});

demo.run($httpBackend => {

  $httpBackend
    .whenRoute('GET', /\/api\/sdk\/platform\/v1\/spaces\/1093906101146120962309999999/)
    .respond(json);

});

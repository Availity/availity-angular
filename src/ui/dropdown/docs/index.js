import demo from 'demo';

import './service';

demo.controller('DemoDropdownController', ($scope, demoDropdownService) => {
  $scope.vm = demoDropdownService;
});



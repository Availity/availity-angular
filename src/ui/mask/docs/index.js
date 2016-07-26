import demo from 'demo';
import 'angular-ui-mask';

import '../constants';

demo.service('demoMaskService', () => {

  return {
    phone: null,
    date: null,
    ssn: null,
    random: null
  };

});

demo.controller('DemoMaskController', ($scope, demoMaskService, AV_MASK) => {

  $scope.vm = demoMaskService;
  $scope.mask = AV_MASK;
});



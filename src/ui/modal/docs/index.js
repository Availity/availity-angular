import demo from 'demo';

import './service';

demo.controller('DemoModalController', ($scope, demoModalService) => {
  demoModalService.init($scope);
  $scope.vm = demoModalService;
});

demo.config($stateProvider => {

  $stateProvider
    .state('one', {
      url: '/'
    })
    .state('two', {
      url: '/two'
    })
    .state('three', {
      url: '/three'
    });

});


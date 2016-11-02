import demo from 'demo';

import './service';

demo.controller('DemoModalController', ($scope, demoModalService) => {
  demoModalService.init($scope);
  $scope.vm = demoModalService;
});

class DemoModalController {

  constructor($scope, demoModalService) {
    demoModalService.init($scope);
    $scope.vm = demoModalService;
  }

}

demo.controller('DemoModalController', DemoModalController);

class DemoModalDedicatedController {

  constructor(someValue) {
    this.message = 'This is a message from a controller specified on AvModal';
    this.localsMessage = someValue;
  }
}

demo.controller('DemoModalDedicatedController', DemoModalDedicatedController);

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


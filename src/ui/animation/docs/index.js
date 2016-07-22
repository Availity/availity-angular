import demo from 'demo';

import '../index';

demo.controller('demoAnimationController', ($scope, $interval) => {
  $scope.counter = 0;
  $interval(function() {
    $scope.counter++;
  }, 3000);
});

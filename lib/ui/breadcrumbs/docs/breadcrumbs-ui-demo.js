(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('BreadcrumbsController', function($scope, $state) {

    $scope.states = $state.get();
    _.remove($scope.states, function(state) {
      return !state.name;
    });
    $scope.currentState = undefined


    $scope.$watch('currentState', function(newValue) {
      if (newValue) {
        $state.go(newValue);
      }
    });

    $scope.$on('$stateChangeSuccess', function(event, toState) {
      $scope.currentState = toState;
    });

  });

})(window);

(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('BreadcrumbsController', function($scope, $state) {

    $scope.states = $state.get();
    _.remove($scope.states, function(state) {
      return !state.name;
    });
    $scope.currentState = undefined;


    $scope.$watch('currentState', function(newValue) {
      if (newValue) {
        $state.go(newValue);
      }
    });

    $scope.$on('$stateChangeSuccess', function(event, toState) {
      $scope.currentState = toState;
    });

  });

  availity.demo.config(function($stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        data: {
          breadcrumb: {
            displayName: 'Home'
          }
        }
      })
      .state('spaces', {
        url: '/spaces',
        data: {
          breadcrumb: {
            displayName: 'Spaces',
            parent: 'home'
          }
        }
      })
      .state('my-application', {
        url: '/my-application',
        data: {
          breadcrumb: {
            displayName: 'My Application',
            parent: 'spaces'
          }
        }
      });

  });

})(window);

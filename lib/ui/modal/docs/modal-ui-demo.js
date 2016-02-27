import availity from '../../';

availity.demo.controller('ModalCtrl', function($scope, AvModal, $log, $state, avModalManager) {

  $scope.navigate = function() {

    const state = 'two';
    if ($state.includes('two')) {
      state = 'three';
    }

    $state.go(state);

  };

  $scope.$on('$stateChangeSuccess', function(event, toState) {

    if (toState.name === 'three') {
      avModalManager.closeAll();
    }

  });

  $scope.modalOpen1 = function() {

    AvModal.create({
      show: true,
      scope: $scope,
      templateUrl: 'templates/modal-template.html'
    });

  };

  $scope.modalOpenLarge = function() {

    AvModal.create({
      show: true,
      scope: $scope,
      templateUrl: 'templates/modal-lg-template.html'
    });

  };

  $scope.modalOpenSmall = function() {

    const modalSmall = new AvModal({
      scope: $scope,
      templateUrl: 'templates/modal-sm-template.html'
    });

    modalSmall.show().then(function() {
      $log.info('modal shown');
    });

  };

  $scope.routeChange = function() {

    AvModal.create({
      show: true,
      scope: $scope,
      templateUrl: 'templates/modal-route-template.html'
    });

  };

});

availity.demo.config(function($stateProvider) {

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


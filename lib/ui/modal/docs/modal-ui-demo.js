(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('ModalCtrl', function ($scope, AvModal, $log, $state, avModalManager) {

    $scope.navigate = function() {

      var state = 'two';
      if($state.includes('two')) {
        state = 'three';
      }

      $state.go(state);

    };

    $scope.$on('$stateChangeSuccess', function(event, toState) {

      if(toState.name === 'three') {
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

      var modalSmall = new AvModal({
        scope: $scope,
        templateUrl: 'templates/modal-sm-template.html'
      });

      modalSmall.show().then(function() {
        $log.info('modal shown');
      });

    };

    $scope.modalOpenWithController = function () {
      console.log('in demo create modal with controller');

      AvModal.create({
        show: true,
        templateUrl: 'templates/modal-with-controller-template.html',
        controller: 'ModalSpecificController',
        controllerAs: 'vm',
        locals: {
          someValue: 'This is a value passed in using locals, they become injectable values into the controller based on their key name.'
        }
      });
    };

    $scope.routeChange = function()  {

      AvModal.create({
        show: true,
        scope: $scope,
        templateUrl: 'templates/modal-route-template.html'
      });

    };

  });

  availity.demo.controller('ModalSpecificController', function (someValue) {
    var vm = this;

    vm.myMessage = 'This is a message from a controller specified on AvModal';
    vm.localsMessage = someValue;
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

})(window);

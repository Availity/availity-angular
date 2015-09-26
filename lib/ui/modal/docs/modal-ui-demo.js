(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('ModalCtrl', function ($scope, AvModal) {

    $scope.modalOpen1 = function() {
      new AvModal({
        show: true,
        scope: $scope,
        templateUrl: 'templates/modal-template.html'
      });
    };

    $scope.modalOpenLarge = function() {
      new AvModal({
        show: true,
        scope: $scope,
        templateUrl: 'templates/modal-lg-template.html'
      });
    };

    $scope.modalOpenSmall = function() {
      new AvModal({
        show: true,
        scope: $scope,
        templateUrl: 'templates/modal-sm-template.html'
      });
    };

  });

})(window);

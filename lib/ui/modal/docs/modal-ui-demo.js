(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('ModalCtrl', function ($scope, AvModal) {

    $scope.modalOpen1 = function() {
      new AvModal({
        show: true,
        scope: $scope,
        templateUrl: "templates/modal-template.html"
      });
    };

  });

})(window);

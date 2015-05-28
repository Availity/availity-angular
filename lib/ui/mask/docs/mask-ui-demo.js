(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('MaskController', function($scope) {
    $scope.demo = {
      phone: null,
      date: null,
      ssn: null,
      random: null
    };
  });

})(window);

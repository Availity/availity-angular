(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('DatepickerController', function($scope) {

    $scope.demo = {
      date1: new Date(),
      date2: null
    };

  });

})(window);

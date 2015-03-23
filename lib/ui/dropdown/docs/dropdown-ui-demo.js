(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('DropdownController', function($scope, $log) {
    $scope.states = [
      { id: 'AL', name: 'Alabama' },
      { id: 'CA', name: 'California' },
      { id: 'NM', name: 'New Mexico' },
      { id: 'TX', name: 'Texas' },
      { id: 'WY', name: 'Wyoming' }
    ];
    $scope.selectedState = null;
    $scope.selectedStates = [0, 1];

    $scope.addStates = function() {
      $scope.states.push({id: 'FL', name: 'Florida'});
    };

    $scope.setState = function() {
      $scope.selectedState = $scope.states[$scope.states.length - 1];
    };

    $scope.resetSingle = function() {
      $scope.selectedState = null;
    };

    $scope.resetMultiple = function() {
      $scope.selectedStates = null;
    };

    $scope.selectAction = function(selection) {
      $log.info(selection);
    };
  });

})(window);

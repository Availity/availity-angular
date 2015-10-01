(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('RemovableLabelController', function($scope) {

    var labels = [
      { value: 'Default', labelClass: 'label-default' },
      { value: 'Primary', labelClass: 'label-primary' },
      { value: 'Success', labelClass: 'label-success' },
      { value: 'Info', labelClass: 'label-info' },
      { value: 'Warning', labelClass: 'label-warning' },
      { value: 'Danger', labelClass: 'label-danger' }
    ];

    $scope.labels = angular.copy(labels);

    $scope.removeLabel = function(index) {
      $scope.labels.splice(index, 1);
    };

    $scope.clearLabels = function() {
      $scope.labels = [];
    };

    $scope.resetLabels = function() {
      $scope.labels = angular.copy(labels);
    };

  });

})(window);

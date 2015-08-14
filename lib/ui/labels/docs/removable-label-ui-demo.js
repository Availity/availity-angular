(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('RemovableLabelController', function($scope) {
    $scope.labels = [
      { value: 'Default', labelClass: 'label-default' },
      { value: 'Primary', labelClass: 'label-primary' },
      { value: 'Success', labelClass: 'label-success' },
      { value: 'Info', labelClass: 'label-info' },
      { value: 'Warning', labelClass: 'label-warning' },
      { value: 'Danger', labelClass: 'label-danger' }
    ];

    $scope.addLabel = function(labelClass) {
      $scope.labels.push({value: $scope.newRemovableLabel, labelClass: labelClass});
    };

    $scope.removeLabel = function(index) {
      $scope.labels.splice(index, 1);
    };

    $scope.clearLabels = function() {
      $scope.labels = [];
    };
  });

})(window);

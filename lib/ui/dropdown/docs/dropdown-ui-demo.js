(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('DropdownController', function($scope, $log, avCodesResource) {
    $scope.states = [
      { id: 'AL', name: 'Alabama' },
      { id: 'CA', name: 'California' },
      { id: 'NM', name: 'New Mexico' },
      { id: 'TX', name: 'Texas' },
      { id: 'WY', name: 'Wyoming' }
    ];
    $scope.selectedState = null;
    $scope.selectedHosp = null;
    $scope.selectedStates = [{ id: 'WY', name: 'Wyoming' }, { id: 'NM', name: 'New Mexico' }];

    $scope.addStates = function() {
      $scope.states.push({id: 'FL', name: 'Florida'});
    };

    $scope.setState = function() {
      $scope.selectedState = $scope.states[$scope.states.length - 1];
    };

    $scope.resetSingle = function() {
      $scope.selectedState = null;
    };

    $scope.resetSingleHosp = function() {
      $scope.selectedHosp = null;
    };

    $scope.resetMultiple = function() {
      $scope.selectedStates = null;
    };

    $scope.selectAction = function(selection) {
      $log.info(selection);
    };

    $scope.weFocused = function() {
      $log.info("ngFocus event occurred");
    };
    $scope.weBlurred = function() {
      $log.info("ngBlur event occurred");
    };

    // how it is viewed in the drop down
    $scope.myFormatResult = function(code) {
      var markup = '<div class="row">' +
        '<div class="col-xs-12">'+
        '<span class="label label-info">' +
        code.code +
        '</span> ' +
        code.value.split("|")[1] +
        '</div>' +
        '</div>';
      return markup;
    };

    $scope.myQuery = function(data) {
      data.q = data.term;
      data.list = 'someList';
      return avCodesResource.getCodes(data);
    };

  });

})(window);

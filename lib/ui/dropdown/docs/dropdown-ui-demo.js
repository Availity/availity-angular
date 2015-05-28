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
    $scope.selectedHosp = null;
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

    $scope.resetSingleHosp = function() {
      $scope.selectedHosp = null;
    };

    $scope.resetMultiple = function() {
      $scope.selectedStates = null;
    };

    $scope.selectAction = function(selection) {
      $log.info(selection);
    };

    $scope.weFocused = function(selection) {
      $log.info("ngFocus event occurred");
    };
    $scope.weBlurred = function(selection) {
      $log.info("ngBlur event occurred");
    };

    //how it is viewed in the drop down
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

    $scope.myAjax = {
      url: "/api/v1/codes.json",
      dataType: 'json',
      delay: 250,
      data: function (term, page) {
        var limit = 50;
        var p = (page - 1) % 2; // we have two data sets to show off offsets. this alternates between them
        return {
          q: term, // search term
          offset: ( p * limit )
        };
      },
      results: function (data, page) {
        // parse the results into the format expected by Select2.
        // since we are using custom formatting functions we do not need to
        // alter the remote JSON data

        //id is required in our results for it to be selectable!
        var myResults = data.codes;
        if(_.isEmpty(myResults[0].id)){
          _.each(myResults, function(code){
            code.id = code.code;
          });
        }

        //more allows us to do infinite scrolling
        var more = ((page-1) * 50) < data.totalCount; // whether or not there are more results available
        return {
          results: myResults,
          more: more
        };
      },
      cache: true
    };

  });

})(window);

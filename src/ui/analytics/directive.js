import ngModule from '../module';

ngModule.directive('avAnalytics', function() {
  return {
    restrict: 'A',
    scope: {
      options: '=avAnalytics'
    },
    controller: function($scope) {
      this.getOptions = function() {
        return $scope.options;
      };
    }
  };
});


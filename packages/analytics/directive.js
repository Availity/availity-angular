import ngModule from '../module';

ngModule.directive('avAnalytics', () => ({
    restrict: 'A',
    scope: {
      options: '=avAnalytics'
    },
    controller($scope) {
      this.getOptions = function() {
        return $scope.options;
      };
    }
  }));


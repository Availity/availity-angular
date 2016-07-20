import ngModule from '../module';

ngModule.directive('avAnalytics', function() {
  return {
    link(scope, element, attrs) {
      scope.avAnalyticsOptions = scope.$eval(attrs.avAnalytics);
    },
    controller($scope) {
      this.getOptions = function() {
        return $scope.avAnalyticsOptions;
      };
    }
  };
});

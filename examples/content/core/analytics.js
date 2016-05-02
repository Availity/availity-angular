import demo from '../../js/module';

demo.controller('AnalyticsController', ($scope) => {

  $scope.analytics = {
    createError() {
      throw new Error('Oh snap!');
    }
  };

});

demo.config( (avPiwikAnalyticsProvider) => {
  avPiwikAnalyticsProvider.enabled(true);
});

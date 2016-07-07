import demo from 'demo';

demo.controller('DemoAnalyticsController', ($scope) => {

  $scope.analytics = {
    createError() {
      throw new Error('Oh snap!');
    }
  };

});

demo.config( (avPiwikAnalyticsProvider) => {
  avPiwikAnalyticsProvider.enable(true);
});

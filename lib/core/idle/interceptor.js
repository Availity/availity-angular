import availity from '../module';

availity.core.factory('avIdleInterceptor', function(avIdle) {

  return {
    response(response) {
      return avIdle.response(response);
    },
    responseError(response) {
      return avIdle.responseError(response);
    }
  };

});

availity.core.config(function($httpProvider) {
  $httpProvider.interceptors.push('avIdleInterceptor');
});



(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avIdleInterceptor', function(avIdle) {
    return {
      request: function(config) {
        return avIdle.request(config);
      },
      responseError: function(response) {
        return avIdle.responseError(response);
      }
    };

  });

  availity.core.config(function($httpProvider) {
    $httpProvider.interceptors.push('avIdleInterceptor');
  });

})(window);

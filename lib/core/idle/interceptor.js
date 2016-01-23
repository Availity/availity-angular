'use strict';

import availity from '../module';

availity.core.factory('avIdleInterceptor', function(avIdle) {

  return {
    response: function(response) {
      return avIdle.response(response);
    },
    responseError: function(response) {
      return avIdle.responseError(response);
    }
  };

});

availity.core.config(function($httpProvider) {
  $httpProvider.interceptors.push('avIdleInterceptor');
});



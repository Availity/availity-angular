'use strict';

import demo from '../../js/module';

demo.controller('AnalyticsController', function($scope) {

  $scope.analytics = {
    createError: function() {
      throw new Error('Oh snap!');
    }
  };

});

demo.config(function(avPiwikAnalyticsProvider) {
  avPiwikAnalyticsProvider.enabled(true);
});

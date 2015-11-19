(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('AnalyticsController', function($scope) {

    $scope.analytics = {
      createError: function() {
        throw new Error('Oh snap!');
      }
    };

  });

  availity.demo.config(function(avPiwikAnalyticsProvider) {
    avPiwikAnalyticsProvider.enabled(false);
  });

})(window);



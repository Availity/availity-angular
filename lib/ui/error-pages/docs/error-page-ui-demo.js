(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('ErrorPageController', function($scope, avErrorPage) {
    $scope.avErrorPage = avErrorPage;
  });

  availity.demo.config(function(avErrorPageProvider) {
    avErrorPageProvider.configureRoutes(false);
  });

})(window);

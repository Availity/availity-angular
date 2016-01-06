(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.factory('scrollPaginationDemoApi', function(AvApiResource) {
    return new AvApiResource({version: '/demo', url: '/scroll-pagination-resource'});
  });

  availity.demo.controller('ScrollPaginationController', function($scope, scrollPaginationDemoApi) {
    $scope.apiResource = scrollPaginationDemoApi;
    $scope.entries = [];
    $scope.options = {
      limit: 10,
      offset: 0,
      maxCached: 10,
      resourceId: 'scrollPaginationItems',
      entryIdAttribute: '_id'
    };
  });

})(window);

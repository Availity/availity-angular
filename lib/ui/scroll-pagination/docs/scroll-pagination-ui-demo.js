(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.factory('scrollPaginationDemoApi', function(AvApiResource) {
    return new AvApiResource({version: '/demo', url: '/scroll-pagination-resource'});
  });

  availity.demo.controller('ScrollPaginationController', function($scope, scrollPaginationDemoApi) {
    console.log('Demo controller loaded');
    $scope.apiResource = scrollPaginationDemoApi;
    $scope.entries = [];
    $scope.options = {
      limit: 10,
      offset: 0,
      maxCached: 20,
      resourceId: 'scrollPaginationItems',
      entryIdAttribute: '_id'
    };
  });

})(window);

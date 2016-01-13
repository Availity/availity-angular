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
      limit: 10,                              // Number of entries to grab per page
      offset: 0,                              // API offset, typically should be set to 0
      maxCached: 20,                          // Max number of item to store in memory. If exceeded, entries will be offloaded
      responseKey: 'data',                    // Key to API response data
      resourceId: 'scrollPaginationItems',    // Name of resource in API response
      entryIdAttribute: '_id',                // Unique identifier for an entry, should be used as the HTML id for the entry container in HTML
      loadMoreText: 'Load more customers',    // Text for pagination buttons
      apiParams: {                            // Any additional parameters to send to the API
        transactionType: '270'
      }
    };
  });

})(window);

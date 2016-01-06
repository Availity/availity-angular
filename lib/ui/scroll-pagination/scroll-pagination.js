(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_SCROLL_PAGINATION', {
    TEMPLATE: 'ui/scroll-pagination/scroll-pagination-tpl.html',
    DEFAULT_OPTIONS: {
      limit: 50,
      offset: 0,
      maxCached: 100,
      loadMoreText: 'Load more items',
      itemName: 'Items'
    }
  });



  availity.ui.controller('AvScrollPaginationController', function($scope, AV_SCROLL_PAGINATION) {
    $scope._options = {};
    _.extend($scope._options, AV_SCROLL_PAGINATION.DEFAULT_OPTIONS, $scope.options || {});
    $scope._options.lowOffset = $scope._options.offset;
    $scope._options.highOffset = $scope._options.offset;
    var originalOptions = angular.copy($scope._options);
    var originalEntries = angular.copy($scope.entries);
    var self = this;

    this.updateButtonVisibilityFlags = function(data) {
      $scope.showNext = $scope._options.highOffset + data.count < data.totalCount;
      $scope.showPrev = $scope._options.lowOffset > 0;
    };

    this.loadEntries = function(prepend) {
      $scope.apiResource.query({params: {limit: $scope._options.limit, offset: $scope._options.offset}}).then(function(response) {
        self.setEntries(response.data[$scope._options.resourceId], prepend);
        self.updateButtonVisibilityFlags(response.data);
      });
    };

    this.setEntries = function(entries, prepend) {
      if (prepend) {
        $scope.entries.unshift.apply($scope.entries, entries);
        if ($scope.entries.length > $scope._options.maxCached) {
          var diff = $scope.entries.length - $scope._options.maxCached;
          $scope.entries = $scope.entries.slice(0, $scope._options.maxCached);
          $scope._options.highOffset -= diff;
        }
      } else {
        $scope.entries.push.apply($scope.entries, entries);
        if ($scope.entries.length > $scope._options.maxCached) {
          var diff = $scope.entries.length - $scope._options.maxCached;
          $scope.entries = $scope.entries.slice(diff, $scope.entries.length);
          $scope._options.lowOffset += diff;
        }
      }
    }

    $scope.loadPrev = function() {
      console.log("LOAD PREV!");
      $scope._options.lowOffset -= $scope._options.limit;
      $scope._options.offset = $scope._options.lowOffset;
      self.lastLoad = 'DESC';
      self.loadEntries(true);
    };

    $scope.loadNext = function() {
      console.log("LOAD NEXT!");
      $scope._options.highOffset += $scope._options.limit;
      $scope._options.offset = $scope._options.highOffset;
      self.lastLoad = 'ASC';
      self.loadEntries();
    };

    this.loadEntries();
  });



  availity.ui.directive('avScrollPagination', function($log, AV_SCROLL_PAGINATION) {
    return {
      restrict: 'A',
      controller: 'AvScrollPaginationController',
      transclude: true,
      templateUrl: AV_SCROLL_PAGINATION.TEMPLATE,
      scope: {
        apiResource: '=',
        entries: '=',
        options: '=',
        avScrollPagination: '@'
      },
      link: function($scope, element, attrs, controller, transclude) {
        if (!$scope.avScrollPagination) {
          $log.error('Directive must include an id');
        }
      }
    };
  });

})(window);

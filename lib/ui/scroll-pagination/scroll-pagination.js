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
      itemName: 'Items',
      entryIdAttribute: 'id'
    }
  });



  availity.ui.controller('AvScrollPaginationController', function($scope, $element, $timeout, AV_SCROLL_PAGINATION) {
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
      $element;
      var trackId;
      var trackId2
      var size = entries.length;
      if (prepend) {
        trackId = $scope.entries[$scope.entries.length-1] ? $scope.entries[$scope.entries.length-1][$scope._options.entryIdAttribute] : undefined;
        trackId2 = $scope.entries[$scope.entries.length-size] ? $scope.entries[$scope.entries.length-size][$scope._options.entryIdAttribute] : undefined;
        $scope.entries.unshift.apply($scope.entries, entries);
        if ($scope.entries.length > $scope._options.maxCached) {
          var diff = $scope.entries.length - $scope._options.maxCached;
          $scope.entries = $scope.entries.slice(0, $scope._options.maxCached);
          $scope._options.highOffset -= diff;
          self.scrollResults(trackId, trackId2, size, true);
        }
      } else {
        trackId = $scope.entries[0] ? $scope.entries[0][$scope._options.entryIdAttribute] : undefined;
        trackId2 = $scope.entries[size-1] ? $scope.entries[size-1][$scope._options.entryIdAttribute] : undefined;
        $scope.entries.push.apply($scope.entries, entries);
        if ($scope.entries.length > $scope._options.maxCached) {
          var diff = $scope.entries.length - $scope._options.maxCached;
          $scope.entries = $scope.entries.slice(diff, $scope.entries.length);
          $scope._options.lowOffset += diff;
          self.scrollResults(trackId, trackId2, size, false);
        }
      }
    };

    this.scrollResults = function(trackId, trackId2, size, top) {
      if (trackId && trackId2) {
        var trackElement = $element.find('[id='+trackId+']');
        var trackElement2 = $element.find('[id='+trackId2+']');
        var trackElementTop = trackElement.offset().top;
        var trackElement2Top = trackElement2.offset().top;
        var diff = trackElementTop - trackElement2Top;
        $timeout(function() {
          $element.animate({scrollTop: $element.scrollTop() + diff}, 0);
        });
      }
    };

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

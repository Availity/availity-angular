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
        if (prepend) {
          self.prependEntries(response.data[$scope._options.resourceId])
        } else {
          self.appendEntries(response.data[$scope._options.resourceId]);
        }
        self.updateButtonVisibilityFlags(response.data);
      });
    };

    this.prependEntries = function(entries) {
      var trackId;
      var trackId2
      $scope.entries.unshift.apply($scope.entries, entries);
      if ($scope.entries.length > $scope._options.maxCached) {
        var diff = $scope.entries.length - $scope._options.maxCached;
        $scope.entries = $scope.entries.slice(0, $scope._options.maxCached);
        $scope._options.highOffset -= diff;
        trackId = oldEntries[oldEntries.length-1] ? oldEntries[oldEntries.length-1][$scope._options.entryIdAttribute] : undefined;
        trackId2 = oldEntries[oldEntries.length-diff] ? oldEntries[oldEntries.length-diff][$scope._options.entryIdAttribute] : undefined;
        self.scrollResults(trackId, trackId2, true);
      }
    };

    this.appendEntries = function(entries) {
      var oldEntries = angular.copy($scope.entries);
      $scope.entries.push.apply($scope.entries, entries);
      if ($scope.entries.length > $scope._options.maxCached) {
        var diff = $scope.entries.length - $scope._options.maxCached;
        $scope.entries = $scope.entries.slice(diff, $scope.entries.length);
        $scope._options.lowOffset += diff;
        var trackedElementId = oldEntries[diff] ? oldEntries[diff][$scope._options.entryIdAttribute] : undefined;
        var otherElementId = oldEntries[0] ? oldEntries[0][$scope._options.entryIdAttribute] : undefined;
        self.scrollForAppend(trackedElementId, otherElementId);
      }
    }

    this.scrollForAppend = function(trackedElementId, otherElementId) {
      if (trackedElementId && otherElementId) {
        var trackedElement = $element.find('[id='+trackedElementId+']');
        var trackedElementTop = trackedElement.offset().top;
        $timeout(function() {
          var newScrollTop = $element.scrollTop() + trackedElement.offset().top - trackedElementTop
          $element.animate({scrollTop: newScrollTop}, 0);
        });
      } else if (trackedElementId) {
        $timeout(function() {
          $element.animate({scrollTop: 0}, 0);
        });
      }
    }

    this.scrollResults = function(trackId, trackId2, top) {
      if (trackId && trackId2) {
        var trackElement = $element.find('[id='+trackId+']');
        var trackElement2 = $element.find('[id='+trackId2+']');
        var trackElementTop = trackElement.offset().top;
        var trackElement2Top = trackElement2.offset().top;
        if (top) {
          trackElementTop += trackElement.height();
        } else {
          trackElement2Top += trackElement2.height();
        }
        var elementScrollTop = $element.scrollTop();
        var diff = trackElementTop - trackElement2Top;
        $timeout(function() {
          var newElementScrollTop = $element.scrollTop();
          var scrollTopDiff = elementScrollTop - newElementScrollTop;
          $element.animate({scrollTop: newElementScrollTop + diff + scrollTopDiff}, 0);
        });
      } else if (trackId) {
        if (top) {
          $timeout(function() {
            $element.animate({scrollTop: $element.prop('scrollHeight')}, 0);
          });
        } else {
          $timeout(function() {
            $element.animate({scrollTop: 0}, 0);
          });
        }

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

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
      entryIdAttribute: 'id',
      apiParams: {}
    }
  });


  availity.ui.controller('AvScrollPaginationController', function($scope, $element, $timeout, $log, AV_SCROLL_PAGINATION, blockUI) {
    $scope._options = {};
    _.extend($scope._options, AV_SCROLL_PAGINATION.DEFAULT_OPTIONS, $scope.options || {});
    $scope._options.lowOffset = $scope._options.offset;
    $scope._options.highOffset = $scope._options.offset;
    var self = this;

    this.updateButtonVisibilityFlags = function(data) {
      $scope.showNext = $scope._options.highOffset + data.count < data.totalCount;
      $scope.showPrev = $scope._options.lowOffset > 0;
    };

    this.loadEntries = function(prepend) {
      var block = blockUI.instances.get('scroll-pagination-block-' + $scope.avScrollPagination);
      block.start();
      var params = {};
      _.extend(params, $scope._options.apiParams, {limit: $scope._options.limit, offset: $scope._options.offset});
      $scope.apiResource.query({params: params}).then(function(response) {
        var responseData = self.getResponseData(response);
        if (responseData && responseData[$scope._options.resourceId]) {
          self.addEntries(responseData[$scope._options.resourceId], prepend);
        }
        self.updateButtonVisibilityFlags(responseData);
        block.stop();
      }, function() {
        $log.error('API call failed');
        block.stop();
      });
    };

    this.getResponseData = function(data) {
      if (data) {
        var result;
        if ($scope._options.responseKey) {
          var keys = $scope._options.responseKey.split('.');
          var nestedData = data;
          var noData = false;
          _.each(keys, function(key) {
            if (!noData) {
              nestedData = nestedData[key];
              if (!nestedData) {
                noData = true;
              }
            }
          });
          result = noData ? [] : nestedData;
        } else {
          result = data;
        }
        return result;
      }
      return [];
    };

    this.addEntries = function(entries, prepend) {
      var oldEntries = angular.copy($scope.entries);
      if (prepend) {
        $scope.entries.unshift.apply($scope.entries, entries);
      } else {
        $scope.entries.push.apply($scope.entries, entries);
      }
      if ($scope.entries.length > $scope._options.maxCached) {
        var diff = $scope.entries.length - $scope._options.maxCached;
        var trackedElementId;
        if (prepend) {
          $scope.entries = $scope.entries.slice(0, $scope._options.maxCached);
          $scope._options.highOffset -= diff;
          trackedElementId = oldEntries[oldEntries.length - diff - 1] ? oldEntries[oldEntries.length - diff - 1][$scope._options.entryIdAttribute] : undefined;
        } else {
          $scope.entries = $scope.entries.slice(diff, $scope.entries.length);
          $scope._options.lowOffset += diff;
          trackedElementId = oldEntries[diff] ? oldEntries[diff][$scope._options.entryIdAttribute] : undefined;
        }
        self.autoscroll(trackedElementId, prepend);
      }
    };

    this.autoscroll = function(trackedElementId, prepend) {
      if (trackedElementId) {
        var trackedElement = $element.find('#' + trackedElementId);
        var trackedElementTop = trackedElement.offset().top;
        $timeout(function() {
          var newScrollTop = $element.scrollTop() + trackedElement.offset().top - trackedElementTop;
          $element.animate({scrollTop: newScrollTop}, 0);
        }, 0, false);
      } else {
        $timeout(function() {
          if (prepend) {
            $element.animate({scrollTop: $element.prop('scrollHeight')}, 0);
          } else {
            $element.animate({scrollTop: 0}, 0);
          }
        }, 0, false);
      }
    };

    this.loadPrev = function() {
      $scope._options.lowOffset -= $scope._options.limit;
      $scope._options.offset = $scope._options.lowOffset;
      self.loadEntries(true);
    };

    this.loadNext = function() {
      $scope._options.highOffset += $scope._options.limit;
      $scope._options.offset = $scope._options.highOffset;
      self.loadEntries();
    };

    $scope.loadPrev = self.loadPrev;
    $scope.loadNext = self.loadNext;

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
      link: function($scope) {
        if (!$scope.avScrollPagination) {
          $log.error('Directive must include an id');
        }
      }
    };
  });

})(window);

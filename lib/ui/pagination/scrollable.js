'use strict';

import angular from 'angular';
import _ from 'lodash';
import availity from '../module';

availity.ui.constant('AV_SCROLL_PAGINATION', {
  TEMPLATE: 'ui/scroll-pagination/scroll-pagination-tpl.html',
  DEFAULT_OPTIONS: {
    limit: 50,
    offset: 0,
    maxCached: 100,
    loadMoreText: 'Load more items',
    entryIdAttribute: 'id',
    apiParams: {},
    beforePageLoad: undefined,
    afterPageLoad: undefined
  }
});


availity.ui.factory('avScrollPaginationService', function($log) {
  function AvScrollPaginationService() {
    this.instances = {};
  }

  var proto = AvScrollPaginationService.prototype;

  proto.registerInstance = function(instanceInterface, id) {
    if (this.instances[id]) {
      $log.warn('Found existing instance with id ' + id);
    }
    this.instances[id] = instanceInterface;
  };

  proto.unregisterInstance = function(id) {
    delete this.instances[id];
  };

  proto.resetInstance = function(id) {
    if (this.instances[id]) {
      this.instances[id].reset();
      return true;
    }
    return false;
  };

  return new AvScrollPaginationService();
});

availity.ui.controller('AvScrollPaginationController', function($scope, $element, $timeout, $log, AV_SCROLL_PAGINATION, blockUI, avScrollPaginationService) {

  var self = this;

  this.buildOptions = function() {
    $scope._options = {};
    _.extend($scope._options, AV_SCROLL_PAGINATION.DEFAULT_OPTIONS, $scope.options || {});
    $scope._options.lowOffset = $scope._options.offset;
    $scope._options.highOffset = $scope._options.offset;
  };

  var originalEntries = angular.copy($scope.entries);
  this.buildOptions();

  this.updateButtonVisibilityFlags = function(data) {
    $scope.showNext = $scope._options.highOffset + data.count < data.totalCount;
    $scope.showPrev = $scope._options.lowOffset > 0;
  };

  this.disableVisibilityFlags = function() {
    $scope.showNext = false;
    $scope.showPrev = false;
  };

  this.loadEntries = function(prepend) {

    var block = blockUI.instances.get('scroll-pagination-block-' + $scope.avScrollPagination);
    self.disableVisibilityFlags();
    block.start();

    if (_.isFunction($scope._options.beforePageLoad)) {
      $scope._options.beforePageLoad($scope._options);
    }

    var params = {};
    _.extend(params, $scope._options.apiParams, {limit: $scope._options.limit, offset: $scope._options.offset});
    $scope.apiResource.query({params: params}).then(function(response) {
      var responseData = self.getResponseData(response);
      if ($scope._options.afterPageLoad) {
        $scope._options.afterPageLoad(responseData);
      }
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
        return noData ? [] : nestedData;
      }

      return data;
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

      var trackedElement = $element.find(`# ${trackedElementId}`);
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

  avScrollPaginationService.registerInstance({
    reset: function() {
      $element.animate({scrollTop: 0}, 0);
      $scope.entries = angular.copy(originalEntries);
      self.buildOptions();
      self.loadEntries();
    }},
    $scope.avScrollPagination
  );

  $scope.$on('$destroy', function() {
    avScrollPaginationService.unregisterInstance($scope.avScrollPagination);
  });

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



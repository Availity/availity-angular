(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.provider('avPopoverConfig', function() {

    var config = {
      showOnLoadHideDelay: 10000
    };

    this.set = function(options) {
      angular.extend(config, options);
    };

    this.$get = function() {
      return angular.copy(config);
    };
  });

  availity.ui.constant('AV_POPOVER', {
    NAME: 'bs.popover'
  });

  availity.ui.controller('AvPopoverController', function($element, $scope, AV_POPOVER, $timeout, avPopoverConfig) {
    this.options = angular.extend({}, avPopoverConfig);

    this.listeners = function() {

      var self = this;

      angular.forEach(['show', 'shown', 'hide', 'hidden'], function(name) {
        $element.on(name + '.bs.popover', function(ev) {
          $scope.$emit('av:popover:' + name, ev);
        });
      });

      $scope.$on('destroy', function() {
        self.destroy();
      });
    };

    this.plugin = function() {
      return $element.data(AV_POPOVER.NAME);
    };

    this.show = function() {
      $element.popover('show');
    };

    this.hide = function() {
      $element.popover('hide');
    };

    this.toggle = function() {
      $element.popover('toggle');
    };

    this.destroy = function() {
      $element.popover('destroy');
    };


    this.init = function() {

      this.listeners();

      if($scope.showOnLoad) {

        this.show();

        if($scope.delay && $scope.delay.hide) {
          $timeout(this.hide, $scope.delay.hide, false);
          return;
        }
        // If no delay is found or cannot be parsed, set a default timeout so that the popover doesn't stick around forever
        $timeout(this.hide, this.options.showOnLoadHideDelay, false);
      }
    };


  });

  availity.ui.directive('avPopover', function() {
    return {
      restrict: 'A',
      controller: 'AvPopoverController',
      scope: {
        showOnLoad: '=',
        delay: '='
      },
      link: function(scope, element, attrs, avPopover) {

        var options = {};

        scope.$evalAsync(function() {
          element.popover(angular.extend({}, options, {
            html: true
          }));
          avPopover.init();
        });
      }
    };
  });

})(window);

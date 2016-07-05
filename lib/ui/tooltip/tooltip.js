(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.provider('avTooltipConfig', function() {

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

  availity.ui.constant('AV_TOOLTIP', {
    NAME: 'bs.tooltip'
  });

  availity.ui.controller('AvTooltipController', function($element, $scope, AV_TOOLTIP, $timeout, avTooltipConfig) {
    this.options = angular.extend({}, avTooltipConfig);

    this.listeners = function() {

      var self = this;

      angular.forEach(['show', 'shown', 'hide', 'hidden'], function(name) {
        $element.on(name + '.bs.tooltip', function(ev) {
          $scope.$emit('av:tooltip:' + name, ev);
        });
      });

      $scope.$on('destroy', function() {
        self.destroy();
      });
    };

    this.plugin = function() {
      return $element.data(AV_TOOLTIP.NAME);
    };

    this.show = function() {
      $element.tooltip('show');
    };

    this.hide = function() {
      $element.tooltip('hide');
    };

    this.toggle = function() {
      $element.tooltip('toggle');
    };

    this.destroy = function() {
      $element.tooltip('destroy');
    };


    this.init = function() {

      this.listeners();

      if($scope.showOnLoad) {

        this.show();

        if($scope.delay && $scope.delay.hide) {
          $timeout(this.hide, $scope.delay.hide, false);
          return;
        }
        // If no delay is found or cannot be parsed, set a default timeout so that the tooltip doesn't stick around forever
        $timeout(this.hide, this.options.showOnLoadHideDelay, false);
      }
    };


  });

  availity.ui.directive('avTooltip', function() {
    return {
      restrict: 'A',
      controller: 'AvTooltipController',
      scope: {
        showOnLoad: '=',
        delay: '='
      },
      link: function(scope, element, attrs, avTooltip) {

        var options = {};

        scope.$evalAsync(function() {
          element.tooltip(angular.extend({}, options, {
            html: true
          }));
          avTooltip.init();
        });
      }
    };
  });

})(window);

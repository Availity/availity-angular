(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.controller('AvAnalyticsController', function(avAnalyticsUtils, $scope, $element, $attrs, avAnalytics) {
    this.setAttribute = function(name, value) {
      $attrs.$set(name, value);
    };

    this.onEvent = function(event) {
      // If an external link is detected
      if(avAnalyticsUtils.isExternalLink($attrs)) {
        event.preventDefault();
        event.stopPropagation();
      }

      // convert the directive attributes into object with properties with sane defaults
      var properties = _.extend({
        level: 'info'
      }, avAnalyticsUtils.getProperties($attrs), {
        event: event.type
      });

      var promise = avAnalytics.trackEvent(properties);
      promise['finally'](function() {
        if(avAnalyticsUtils.isExternalLink($attrs)) {
          document.location = $element.attr('href');
        }
      });
    };
  });

  availity.core.directive('avAnalyticsOn', function() {
    return {
      restrict: 'A',
      controller: 'AvAnalyticsController',
      require: ['avAnalyticsOn', '?^avAnalyticsCategory'],
      link: function($scope, $element, $attrs, controllers) {
        var analyticsCtrl = controllers[0];
        var categoryCtrl = controllers[1];
        var eventType = $attrs.avAnalyticsOn || 'click';

        $element.on(eventType, function(event) {
          analyticsCtrl.setAttribute('avAnalyticsCategory', categoryCtrl.getCategory());
          analyticsCtrl.onEvent(event);
        });
      }
    };
  });

  availity.core.directive('avAnalyticsCategory', function() {
    return {
      restrict: 'A',
      controller: function($scope, $element, $attrs) {
        this.getCategory = function() {
          return $attrs.avAnalyticsCategory;
        };
      }
    }
  });

})(window);

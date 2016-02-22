// Original => http://bootsnipp.com/snippets/78VV
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.provider('avDimmerConfig', function() {

    var config = {
    animationConfig: {
      duration: 250
    },
    showAnimation: 'fadeIn',
    showEvent: 'mouseenter',
    hideAnimation: 'fadeOut',
    hideEvent: 'mouseleave',
    overlaySelector: '.dimmer-content'
  };

    this.set = function(options) {
      angular.extend(config, options);
    };

    this.$get = function() {
      return angular.copy(config);
    };

  });

  availity.ui.directive('avDimmer', function(avDimmerConfig) {
    return {
      link: function(scope,  elm, attrs) {
        var config = angular.extend({}, avDimmerConfig, attrs.config);

        elm.on(config.showEvent, function() {
          elm.find(config.overlaySelector).velocity(config.showAnimation, config.animationConfig);
        }).on(config.hideEvent, function() {
          elm.find(config.overlaySelector).velocity(config.hideAnimation, config.animationConfig);
        });

        scope.$on('$destroy', function() {
          elm.off();
        });
      }
    };
  });

})(window);

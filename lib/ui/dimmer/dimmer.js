// Original => http://bootsnipp.com/snippets/78VV
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.provider('avDimmerConfig', function() {

    var config = {
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
        var config = angular.extend({duration:250}, avDimmerConfig, attrs.config);

        elm.on('mouseenter', function() {
          elm.find('.dimmer-content').velocity('fadeIn',config);
        }).on('mouseleave', function() {
          elm.find('.dimmer-content').velocity('fadeOut',config);
        });

        scope.$on('$destroy', function() {
          elm.off();
        });
      }
    };
  });

})(window);

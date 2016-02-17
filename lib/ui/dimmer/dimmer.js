// Original => http://bootsnipp.com/snippets/78VV
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.directive('avDimmer', function(AV_LOADER) {
    return {
      link: function(scope, elm) {
        elm
          .on('mouseenter', function() {
            elm.find('.dimmer-content').velocity('fadeIn',{duration:250});
            // elm.find('.dimmer-content').fadeIn(250);
          })
          .on('mouseleave', function() {
            elm.find('.dimmer-content').velocity('fadeOut',{duration:250});
            // elm.find('.dimmer-content').fadeOut(250);
          });
        scope.$on('$destroy', function() {
          elm.off();
        });
      }
    };
  });

})(window);

(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_LOADER', {

    TEMPLATES: {
      LOADER: 'ui/animation/loader-tpl.html'
    }
  });

  availity.ui.directive('avLoader', function($interval, AV_LOADER) {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: AV_LOADER.TEMPLATES.LOADER,
      link: function(scope, element) {

        var loader;

        scope.$on('$destroy', function() {
          $interval.cancel(loader);
        });

        loader = $interval(function() {

          element
            .find('.loading-bullet')
            .velocity('transition.slideRightIn', { stagger: 250 })
            .delay(750)
            .velocity({ opacity: 0 }, 500);

        }, 2000);

      }
    };
  });

})(window);

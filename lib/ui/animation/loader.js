(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_LOADER', {

    TEMPLATES: {
      LOADER: 'ui/animation/loader-tpl.html'
    }

  });

  availity.ui.controller('AvLoaderController', function($element) {

    var self = this;

    this.animate = function() {

      $element
        .find('.loading-bullet')
        .velocity('transition.slideRightIn', { stagger: 250 })
        .velocity({ opacity: 0 }, {
          delay: 750,
          duration: 500,
          complete: function() {
            self.stop();
          }
        });

    };

    this.stop = function() {
      $element.find('.loading-bullet').velocity('stop', true);
      $element.removeData();
    };

  });

  availity.ui.directive('avLoader', function(AV_LOADER) {
    return {
      restrict: 'A',
      replace: true,
      controller: 'AvLoaderController',
      require: 'avLoader',
      templateUrl: AV_LOADER.TEMPLATES.LOADER,
      link: function(scope, element, attr, avLoader) {

        var timer = setInterval(avLoader.animate, 2000);

        scope.$on('$destroy', function() {
          avLoader.stop();
          clearInterval(timer);
        });

      }
    };
  });

})(window);

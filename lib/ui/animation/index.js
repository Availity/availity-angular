'use strict';

import template from './loader.html';
import availity from '../module';

availity.ui.controller('AvLoaderController', function($element) {

  var self = this;
  var active;

  this.start = function() {
    active = true;
    this.animate();
  };

  this.animate = function() {

    $element
      .find('.loading-bullet')
      .velocity('transition.slideRightIn', { stagger: 250 })
      .velocity({ opacity: 0 }, {
        delay: 750,
        duration: 500,
        complete: function() {
          if (active) {
            setTimeout(function() {self.animate();}, 500);
          } else {
            self.endAnimation();
          }
        }
      });

  };

  this.endAnimation = function() {
    $element.find('.loading-bullet').velocity('stop', true);
    $element.removeData();
  };

  this.stop = function() {
    active = false;
  };

});

availity.ui.directive('avLoader', function() {
  return {
    restrict: 'AE',
    replace: true,
    controller: 'AvLoaderController',
    require: 'avLoader',
    template: template,
    link: function(scope, element, attr, avLoader) {

      if (!attr.delay) {
        avLoader.start();
      }

      scope.$on('$destroy', function() {
        avLoader.stop();
      });

    }
  };
});



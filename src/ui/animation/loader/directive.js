import 'velocity-animate';
import 'velocity-animate/velocity.ui';

import templateUrl from './template.html';
import ngModule from '../../module';

class AvLoaderController {

  constructor($element) {

    this.av = { $element };

    this.active = false;
  }

  start() {
    this.active = true;
    this.animate();
  }

  animate() {

    const self = this;

    this.av.$element
    .find('.loading-bullet')
    .velocity('transition.slideRightIn', { stagger: 250 })
    .velocity({ opacity: 0 }, {
      delay: 750,
      duration: 500,
      complete() {
        if (self.active) {
          setTimeout( () => { self.animate() }, 500);
        } else {
          self.endAnimation();
        }
      }
    });

  }

  endAnimation = function() {
    this.av.$element.find('.loading-bullet').velocity('stop', true);
    this.av.$element.removeData();
  }

  $destroy() {
    this.active = false;
  }

  $postLink() {
    this.start();
  }
}

ngModule.directive('avLoader', () => {
  return {
    restrict: 'AE',
    replace: true,
    controller: AvLoaderController,
    templateUrl
  };
});

export default ngModule;

import templateUrl from './template.html';
import ngModule from '../../module';

ngModule.directive('avLoader', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl,
    link(scope, element, attr) {

      let active;


      const endAnimation = () => {
        element.find('.loading-bullet').velocity('stop', true);
        element.removeData();
      };

      const animate = () => {
        element
        .find('.loading-bullet')
        .velocity('transition.slideRightIn', { stagger: 250 })
        .velocity({ opacity: 0 }, {
          delay: 750,
          duration: 500,
          complete() {
            if (active) {
              setTimeout(function() {animate() }, 500);
            } else {
              endAnimation();
            }
          }
        });
      };


      if (!attr.delay) {
        active = true;
        animate();
      }

      scope.$on('$destroy', function() {
        active = false;
      });

    }
  };
});

export default ngModule;

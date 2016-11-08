import 'velocity-animate';
import 'velocity-animate/velocity.ui';

import ngModule from '../module';
import angular from 'angular';

ngModule.directive('avAnimate', function() {
  return {
    restrict: 'AE',
    scope: {
      watch: '<?avAnimate',
      animation: '<?avAnimateType',
      eventType: '@?avAnimateOn',
      onLoad: '<?avAnimateOnLoad',
      veclocityOptions: '<?avAnimateOptions'
    },
    link(scope, element) {

      let loaded = false;

      const hasWatch = !angular.isUndefined(scope.watch);
      const hasEvent = !angular.isUndefined(scope.eventType);

      const eventType = scope.eventType;

      const onLoad = angular.isUndefined(scope.onLoad) ? (!hasEvent) : scope.onLoad;

      const elmToBounce = element.children().length > 0 ? element.children() : element;

      const animate = () => {
        const velocityAnimation = scope.animation || 'transition.bounceIn';
        const animationOptions = angular.extend({}, {
          duration: 1000
        }, scope.veclocityOptions);

        elmToBounce.velocity(velocityAnimation, animationOptions);
      };

      if (onLoad && !hasWatch) {
        animate();
      }

      if (!angular.isUndefined(eventType)) {
        element.on(eventType, () => {
          animate();
        });
      }

      if (!angular.isUndefined(scope.watch)) {
        scope.$watch('watch', () => {
          if (loaded || onLoad) {
            animate();
          }
          loaded = true;
        });
      }
    }
  };
});

export default ngModule;

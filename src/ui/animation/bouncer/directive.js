import ngModule from '../../module';

ngModule.directive('avBounce', function() {
  return {
    restrict: 'AE',
    scope: {
      watch: '<?avBounce',
      eventType: '@?avBounceOn',
      onLoad: '<?avBounceOnLoad',
      veclocityOptions: '<?avBounceOptions'
    },
    link(scope, element, attr) {

      var loaded = false;
      let hasWatch = !angular.isUndefined(scope.watch);
      let eventType = scope.eventType;
      let onLoad = angular.isUndefined(scope.onLoad) || scope.onLoad;

      let animationOptions = angular.extend({}, {
        duration: 1000
      }, scope.veclocityOptions);

      var elmToBounce = element.children().length > 0 ? element.children() : element;

      const animate = () => {
        elmToBounce.velocity('transition.bounceIn', animationOptions);
      }

      if (onLoad && !hasWatch) {
        animate();
      }

      if (!angular.isUndefined(eventType)) {
        element.on(eventType, (newVal, oldVal) => {
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

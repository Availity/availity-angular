import ngModule from '../module';
import AvAnimationController from './controller';

ngModule.directive('avAnimate', function() {
  return {
    restrict: 'A',
    bindToController: {
      animationConfig: '<avAnimate'
    },
    controller: AvAnimationController,
    controllerAs: 'vm'
  };
});

ngModule.directive('avAnimateElement', () => {
  return {
    restrict: 'A',
    require: '^avAnimate',
    link(scope, elm, attrs, avAnimateController) {
      avAnimateController.registerElm(elm);

      scope.$on('$destroy', () => {
        avAnimateController.deregisterElm(elm);
      });
    }
  };
});

export default ngModule;

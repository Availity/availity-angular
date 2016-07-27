import ngModule from '../module';
import AvAnimationController from './controller';

ngModule.directive('avAnimate', function() {
  return {
    restrict: 'AE',
    bindToController: {
      animationConfig: '<avAnimate'
    },
    controller: AvAnimationController,
    controllerAs: 'vm'
  };
});

export default ngModule;

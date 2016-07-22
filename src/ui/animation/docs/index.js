import demo from 'demo';

import animations from './fixtures';

import '../index';


demo.factory('demoAnimationsService', ($interval, $timeout) => {

  class DemoAnimationsService {

    constructor() {
      this.counter = 0;
      $interval(() => {
        this.counter++;
      }, 3000);

      this.selectedAnimation = null;
      this.velocityEffects = animations;
      this.placeholder = 'Select an animation';
      this.actualAnimation = this.placeholder;
    }

    onChange(newAnimation) {
      if (newAnimation.type) {
        if (newAnimation.type === 'transition') {

          this.actualAnimation = newAnimation.name + 'Out';

          $timeout( () => {
            this.actualAnimation = newAnimation.name + 'In';
          }, 1500);

        } else if (newAnimation.type === 'callout') {
          this.actualAnimation = newAnimation.name;
        }
      }
    }
  }

  return new DemoAnimationsService();

});

demo.controller('demoAnimationController', ($scope, demoAnimationsService) => {
  $scope.anim = demoAnimationsService;
});

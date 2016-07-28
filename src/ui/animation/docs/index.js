import demo from 'demo';

import animations from './fixtures';

import '../index';


demo.factory('demoAnimationsService', ($interval) => {

  class DemoAnimationsService {

    constructor() {
      this.counter = 0;
      $interval(() => {
        this.counter++;
      }, 3000);

      this.selectedAnimation = null;
      this.velocityEffects = animations;
      this.placeholder = 'Select an animation';
      this.animationConfig = {
        watch: 'anim.selectedAnimation',
        onLoad: false,
        animation: (elm) => {
          return new Promise((resolve) => {
            if (this.selectedAnimation) {
              const state = elm.velocity('finish', true);
              const animConfig = {
                complete() {
                  resolve();
                }
              };
              if (this.selectedAnimation.type === 'transition') {
                state.velocity((this.selectedAnimation.name + 'Out'))
                .velocity((this.selectedAnimation.name + 'In'), animConfig);
              } else if (this.selectedAnimation.type === 'callout') {
                state.velocity(this.selectedAnimation.name, animConfig);
              }
            } else {
              resolve();
            }
          });
        }
      };
    }
  }

  return new DemoAnimationsService();
});

demo.controller('demoAnimationController', ($scope, demoAnimationsService) => {
  $scope.anim = demoAnimationsService;
  $scope.exampleText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur';
});

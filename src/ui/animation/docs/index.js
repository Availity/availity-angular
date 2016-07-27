import demo from 'demo';

import animations from './fixtures';

import '../index';


demo.factory('demoAnimationsService', ($interval) => {

  class DemoAnimationsService {

    constructor() {


      this.selectedAnimation = null;
      this.velocityEffects = animations;
      this.placeholder = 'Select an animation';
      this.actualAnimation = this.placeholder;

      this.counter = 0;
      $interval(() => {
        this.counter++;
      }, 3000);

      this.changingAnimConfig = {};
    }

    onChange(newAnimation) {
      if (newAnimation.type) {
        const newAnimConfig = {
          [newAnimation.name]: {
            onEvent: 'click',
            onLoad: true
          }
        };

        if (newAnimation.type === 'transition') {

          newAnimConfig[newAnimation.name].animation = (elm) => {
            return new Promise((resolve) => {
              elm.velocity('finish', true)
              .velocity((newAnimation.name + 'Out'), {})
              .velocity((newAnimation.name + 'In'), {
                complete() {
                  resolve();
                }
              });
            });
          };

        } else if (newAnimation.type === 'callout') {
          newAnimConfig[newAnimation.name].animation = newAnimation.name;
        }

        this.changingAnimConfig = newAnimConfig;
        this.actualAnimation = newAnimation.name;
      }
    }
  }

  return new DemoAnimationsService();

});

demo.controller('demoAnimationController', ($scope, demoAnimationsService) => {
  $scope.anim = demoAnimationsService;

  $scope.allAnimConfig = {
    counter: {
      watch: 'anim.counter',
      animation: 'transition.bounceIn',
      elements: '#counterBadge'
    },
    onLoad: {
      elements: '#onLoadCard',
      animation: 'transition.bounceIn',
      onLoad: true
    },
    clickMe: {
      elements: '#clickMeButton',
      animation: 'transition.bounceIn',
      onEvent: 'click'
    },
    childAnimation: {
      elements: '#childAnimationExample > p',
      animation: 'transition.slideRightBigIn',
      onEvent: 'click',
      onLoad: true,
      animationConfig: {
        stagger: 750
      }
    }
  };

});

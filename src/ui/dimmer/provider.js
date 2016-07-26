import ngModule from '../module';
import angular from 'angular';

const CONFIG = {
  animationConfig: {
    duration: 250
  },
  showAnimation: 'fadeIn',
  showEvent: 'mouseenter',
  hideAnimation: 'fadeOut',
  hideEvent: 'mouseleave',
  overlaySelector: '.dimmer-content'
};


class AvDimmerConfig {

  constructor() {
    this.options = CONFIG;
  }

  get() {
    return angular.copy(this.options);
  }

  set(options) {
    angular.extend(this.options, options);
  }

  $get() {
    return angular.copy(this.options);
  }

}


ngModule.provider('avDimmerConfig', AvDimmerConfig);

export default ngModule;

import angular from 'angular';

import Base from '../base';

class AvDimmerController extends Base {

  static $inject = ['$element', '$attrs', 'avDimmerConfig'];

  constructor(...args) {

    super(...args);

    this.config = angular.extend({}, this.av.avDimmerConfig, this.av.$attrs.avDimmerConfig);
  }

  show() {
    this.av.$element.find(this.config.overlaySelector)
    .velocity(this.config.showAnimation, this.config.animationConfig);
  }

  hide() {
    this.av.$element.find(this.config.overlaySelector)
    .velocity(this.config.hideAnimation, this.config.animationConfig);
  }

  $onInit() {
    this.av.$element.on(this.config.showEvent, this.show.bind(this));
    this.av.$element.on(this.config.hideEvent, this.hide.bind(this));
  }

  $destroy() {
    this.av.$element.off(this.config.showEvent, this.show.bind(this));
    this.av.$element.off(this.config.hideEvent, this.hide.bind(this));
  }
}

export default AvDimmerController;

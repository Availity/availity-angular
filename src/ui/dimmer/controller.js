import angular from 'angular';

class AvDimmerController {

  constructor($scope, $element, avDimmerConfig) {

    this.av = { $scope, $element, avDimmerConfig };

    this.config = angular.extend({}, this.av.avDimmerConfig, (this.av.$scope.avDimmerConfig || {}));
  }

  show() {
    this.av.$element.find(this.config.overlaySelector)
    .velocity('stop', true)
    .velocity(this.config.showAnimation, this.config.animationConfig);
  }

  hide() {
    this.av.$element.find(this.config.overlaySelector)
    .velocity(this.config.hideAnimation, this.config.animationConfig);
  }

  createListeners() {
    this.av.$element.on(this.config.showEvent, this.show.bind(this));
    this.av.$element.on(this.config.hideEvent, this.hide.bind(this));
  }

  destroyListeners() {
    this.av.$element.off(this.config.showEvent, this.show.bind(this));
    this.av.$element.off(this.config.hideEvent, this.hide.bind(this));
  }

  $onChanges(changesObj) {
    if (changesObj && changesObj.avDimmerConfig) {
      const newConfig = angular.extend({}, this.av.avDimmerConfig, changesObj.avDimmerConfig.currentValue);

      const resetListeners = !angular.equals(this.config.showEvent, newConfig.showEvent)
      || !angular.equals(this.config.hideEvent, newConfig.hideEvent);

      if (resetListeners) {
        this.destroyListeners();
      }

      this.config = newConfig;

      if (resetListeners) {
        this.createListeners();
      }
    }
  }

  $onInit() {
    this.createListeners();
  }

  $destroy() {
    this.destroyListeners();
  }
}

export default AvDimmerController;

import ngModule from '../module';

class AvTooltipController {

  constructor($element, $scope, AV_TOOLTIP, $timeout, avTooltipConfig) {
    this.di = {$element, $scope, AV_TOOLTIP, $timeout};
    this.options = {...avTooltipConfig};
  }

  listeners() {
    ['show', 'shown', 'hide', 'hidden'].forEach(name => {
      this.di.$element.on(`${name}.bs.tooltip`, ev => this.di.$scope.$emit(`av:tooltip:${name}`, ev));
    });
  }

  plugin() {
    return this.di.$element.data(this.di.AV_TOOLTIP.NAME);
  }

  show() {
    this.di.$element.tooltip('show');
  }

  hide() {
    this.di.$element.tooltip('hide');
  }

  toggle() {
    this.di.$element.tooltip('toggle');
  }

  $destroy() {
    this.di.$element.tooltip('destroy');
  }


  init() {
    this.listeners();

    if (this.di.$scope.show) {

      // give the UI a chance to settle first.
      this.di.$timeout(::this.show, 0, false);

      if (this.di.$scope.delay && this.di.$scope.delay.hide) {
        this.di.$timeout(::this.hide, this.di.$scope.delay.hide, false);
        return;
      }

      // If no delay is found or cannot be parsed, set a default timeout so that the tooltip doesn't stick around forever
      this.di.$timeout(::this.hide, this.options.showDelay, false);
    }
  }
}

ngModule.controller('AvTooltipController', AvTooltipController);

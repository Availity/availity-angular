import ngModule from '../module';

class AvPopoverController {
  constructor($element, $scope, AV_POPOVER, $timeout, avPopoverConfig) {
    this.di = {$element, $scope, AV_POPOVER, $timeout};
    this.options = {...avPopoverConfig};
  }

  listeners () {
    ['show', 'shown', 'hide', 'hidden'].forEach(name => {
      this.di.$element.on(`${name}.bs.popover`, ev => this.di.$scope.$emit(`av:popover:${name}`, ev));
    });

    this.di.$scope.$on('$destroy', ::this.destroy);
  };

  plugin () {
    return this.di.$element.data(this.di.AV_POPOVER.NAME);
  }

  show () {
    this.di.$element.popover('show');
  }

  hide () {
    this.di.$element.popover('hide');
  }

  toggle () {
    this.di.$element.popover('toggle');
  }

  destroy () {
    this.di.$element.popover('destroy');
  }


  init () {
    this.listeners();

    if (this.di.$scope.show) {

      // give the UI a chance to settle first.
      this.di.$timeout(::this.show, 0, false);

      if (this.di.$scope.delay && this.di.$scope.delay.hide) {
        this.di.$timeout(::this.hide, this.di.$scope.delay.hide, false);
        return;
      }

      // If no delay is found or cannot be parsed, set a default timeout so that the popover doesn't stick around forever
      this.di.$timeout(::this.hide, this.options.showDelay, false);
    }
  }
}

ngModule.controller('AvPopoverController', AvPopoverController);

import angular from 'angular';
import ngModule from '../module';

import './hide.less';

class AvHidePermissionController {

  constructor($element, avUserAuthorizations) {
    this.$element = $element;
    this.avUserAuthorizations = avUserAuthorizations;
  }

  $onInit() {
    this.$element.hide();
  }

  $onChanges(changed) {

    let permissions = changed.avHidePermission.currentValue;

    if (!angular.isArray(permissions)) {
      permissions = `${permissions}`.split(/\s+/);
    }

    this.avUserAuthorizations.isAnyAuthorized(permissions)
      .then(
        isAuthorized => this.onSuccess(isAuthorized),
        () => this.onError()
      );

  }

  onSuccess(isAuthorized) {
    if (isAuthorized) {
      this.$element.removeClass('ng-hide');
      this.$element.show();
    } else {
      this.$element.remove();
    }
  }

  onError() {
    this.$element.remove();
  }

}

ngModule.directive('avHidePermission', () => ({
  restrict: 'A',
  controller: AvHidePermissionController,
  scope: {},
  bindToController: {
    avHidePermission: '<' // array or comma delimited supported
  },
  controllerAs: 'vm'
}));



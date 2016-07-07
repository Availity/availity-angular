import angular from 'angular';
import _ from 'lodash';

import ngModule from '../module';

class AvHidePermissionController {

  constructor($element, avUserAuthorizations) {
    this.$element = $element;
    this.avUserAuthorizations = avUserAuthorizations;
  }

  $onInit() {
    this.$element.hide();
  }

  $onChanges(changed) {

    if (changed.avHasPermission && !changed.avHasPermission.isFirstChange()) {

      let permissions = changed.avHasPermission;

      if (!angular.isArray(permissions)) {
        permissions = _.words(`${permissions}`);
      }

      debugger;
      this.avUserAuthorizations.isAnyAuthorized(permissions).then(this.onSuccess, this.onError);

    }

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
  scope: {
    avHasPermission: '<'
  },
  controllerAs: 'vm',
  bindToController: true
}));



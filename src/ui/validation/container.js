import * as _ from 'lodash';
import ngModule from '../module';
import Base from '../base';

class AvValContainerController extends Base {

  static $inject = ['$scope', '$timeout'];

  constructor(...args) {
    super(...args);
  }

  message(context) {

    const { ngModel } = context;

    let message = null;
    const violations = _.keys(ngModel.$error);
    if (violations.length) {
      const validator = _.head(violations);
      const constraint = ngModel.$validators[validator].constraint;
      message = constraint.message;

    } else {
      message = null;
    }

    // $timeout is needed to update the UI from $broadcast events
    this.av.$timeout(() => {
      this.av.$scope.vm.message = message;
    });

  }


}

ngModule.directive('avValContainer', () => ({
  restrict: 'A',
  controller: AvValContainerController,
  template: '<p class="help-block" data-ng-bind-html="vm.message"></p>',
  replace: true,
  scope: {},

  link(scope) {
    scope.vm = { message: null, id: null };
  }
}));

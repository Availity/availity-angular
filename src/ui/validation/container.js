import ngModule from '../module';

class AvValContainerController {

  constructor($sce, $scope, $timeout, AV_UI) {
    this.av = { $sce, $scope, $timeout, AV_UI };
  }

  message(context) {

    const { ngModel } = context;

    let message = null;
    const violations = Object.keys(ngModel.$error);
    if (violations.length) {
      const validator = violations[0];
      const constraint = ngModel.$validators[validator] && ngModel.$validators[validator].constraint;
      if (constraint) {
        message = constraint.message;
      } else {
        message = this.av.AV_UI.FALLBACK_VALIDATION_MESSAGE;
      }
    } else {
      message = null;
    }

    // $timeout is needed to update the UI from $broadcast events
    this.av.$timeout(() => {
      this.av.$scope.vm.message = this.av.$sce.trustAsHtml(message);
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

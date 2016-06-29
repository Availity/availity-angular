import _ from 'lodash';
import ngModule from '../module';

// TODO: support multip

ngModule.controller('avValContainerController', function($scope, $timeout) {

  this.message = context => {

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
    $timeout(() => {
      $scope.vm.message = message;
    });

  };

});

ngModule.directive('avValContainer', () => ({
  restrict: 'A',
  controller: 'avValContainerController',
  template: '<p class="help-block" data-ng-bind-html="vm.message"></p>',
  replace: true,
  scope: {},

  link(scope) {
    scope.vm = { message: null, id: null };
  }
}));

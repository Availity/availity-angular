import _ from 'lodash';
import ngModule from '../module';

ngModule.controller('avValContainerController', function($scope, $timeout) {

  this.message = ngModel => {

    let message = null;
    if (ngModel.avResults.violations.length && ngModel.avResults.violations[0].message) {
      message = ngModel.avResults.violations[0].message;
    } else {
      message = null;
    }

    // $timeout is needed to update the UI from $broadcast events
    $timeout(() => {
      $scope.messages.message = message;
    });

  };

});

ngModule.directive('avValContainer', () => ({
  restrict: 'A',
  controller: 'avValContainerController',
  template: '<p class="help-block" data-ng-bind-html="messages.message"></p>',
  replace: true,
  scope: {},

  link(scope) {
    scope.messages = _.extend({}, scope.messages, { message: null, id: null });
  }
}));

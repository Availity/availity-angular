import angular from 'angular';
import ngModule from '../module';

ngModule.directive('avPopover', () => {
  return {
    restrict: 'A',
    controller: 'AvPopoverController',
    scope: {
      show: '=',
      delay: '='
    },
    link(scope, element, attrs, avPopover) {

      const options = {};

      scope.$evalAsync(() => {
        element.popover(angular.extend({}, options, {
          html: true
        }));
        avPopover.init();
      });
    }
  };
});



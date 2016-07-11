import angular from 'angular';
import ngModule from '../module';

ngModule.directive('avPopover', function() {
  return {
    restrict: 'A',
    controller: 'AvPopoverController',
    scope: {
      show: '=',
      delay: '='
    },
    link(scope, element, attrs, avPopover) {

      const options = {};

      scope.$evalAsync(function() {
        element.popover(angular.extend({}, options, {
          html: true
        }));
        avPopover.init();
      });
    }
  };
});



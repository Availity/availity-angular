import ngModule from '../module';
import template from './modal.html';

ngModule.directive('avModal', () => {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    scope: {
      size: '@'
    },
    template
  };
});

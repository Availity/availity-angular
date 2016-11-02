import ngModule from '../module';
import templateUrl from './modal.html';

ngModule.directive('avModal', () => {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    scope: {
      size: '@'
    },
    templateUrl
  };
});

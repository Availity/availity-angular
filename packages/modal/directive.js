import ngModule from '../module';
import templateUrl from './modal.html';

ngModule.directive('avModal', () => ({
    restrict: 'AE',
    replace: true,
    transclude: true,
    scope: {
      size: '@'
    },
    templateUrl
  }));

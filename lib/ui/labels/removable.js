import availity from '../module';
import template from './removable.html';

availity.ui.directive('avRemovableLabel', function() {
  return {
    template,
    transclude: true,
    scope: {
      removeValue: '=',
      onRemove: '&'
    },
    link(scope, element, attrs) {
      element.addClass('label-remove');
      scope.removeLabel = function() {
        if (!attrs.disabled) {
          scope.onRemove()(scope.removeValue);
        }
      };
    }
  };
});



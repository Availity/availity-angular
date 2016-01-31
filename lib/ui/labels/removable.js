'use strict';

import availity from '../module';
import template from './removable.html';

availity.ui.directive('avRemovableLabel', function() {
  return {
    template: template,
    transclude: true,
    scope: {
      removeValue: '=',
      onRemove: '&'
    },
    link: function(scope, element, attrs) {
      element.addClass('label-remove');
      scope.removeLabel = function() {
        if (!attrs.disabled) {
          scope.onRemove()(scope.removeValue);
        }
      };
    }
  };
});



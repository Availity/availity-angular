(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_REMOVABLE_LABEL', {
    TEMPLATE: 'ui/labels/removable-label-tpl.html'
  });

  availity.ui.directive('avRemovableLabel', function(AV_REMOVABLE_LABEL) {
    return {
      templateUrl: AV_REMOVABLE_LABEL.TEMPLATE,
      transclude: true,
      scope: {
        removeValue: '=',
        onRemove: '&'
      },
      link: function(scope, element, attrs) {
        element.addClass('label-remove');
        scope.removeLabel = function() {
          if(!attrs.disabled) {
            scope.onRemove()(scope.removeValue);
          }
        };
      }
    };
  });

})(window);

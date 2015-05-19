(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.directive('avHasPermission', function(avUserAuthorizations) {
    return {
      restrict: 'A',
      link: function($scope, $element, $attr) {
        $element.hide();
        var permission = $attr['avHasPermission'];
        avUserAuthorizations.isAuthorized(permission).then(function(isAuthorized) {
          if(isAuthorized) {
            $element.show();
          } else {
            $element.remove();
          }
        });
      }
    };
  });


})(window);

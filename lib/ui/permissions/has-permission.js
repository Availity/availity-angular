(function(root) {

  'use strict';

  var availity = root.availity;

  /**
   * This directive follows similiar to ng-show.
   * @param avUserAuthorizations
   * @returns {Function}
   */
  var avHasPermissionDirective = function(avUserAuthorizations) {
    return {
      restrict: 'EA',
      link: function($scope, $element, $attr) {
        $element.hide();
        $scope.$watch($attr.avHasPermission, function avHasPermissionAction(permissions) {
          if(!angular.isArray(permissions)) {
            permissions = _.words('' + permissions);
          }
          avUserAuthorizations.isAnyAuthorized(permissions).then(function onSuccess(isAuthorized) {
            if(isAuthorized) {
              $element.removeClass("ng-hide");
              $element.show();
            } else {
              $element.remove();
            }
          }, function onError() {
            $element.remove();
          });
        });
      }
    };
  };

  availity.ui.directive('avHasPermission', avHasPermissionDirective);

})(window);

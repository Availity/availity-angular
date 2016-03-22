(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.controller('AvHasPermissionController', function($element, $attrs, avErrorPage) {
    var showErrorPage= angular.isDefined($attrs.showErrorPage);

    this.onSuccess = function(isAuthorized) {
      if(isAuthorized) {
        $element.removeClass('ng-hide');
        $element.show();
      } else {
        $element.remove();
        if (showErrorPage) {
          avErrorPage.unauthorized();
        }
      }
    };

    this.onError = function() {
      $element.remove();
    };

  });

  availity.ui.directive('avHasPermission', function(avUserAuthorizations) {
    return {
      restrict: 'EA',
      controller: 'AvHasPermissionController',
      require: ['avHasPermission'],
      link: function($scope, $element, $attr, controllers) {

        var avHasPermissionController = controllers[0];

        $element.hide();

        $scope.$watch($attr.avHasPermission, function(permissions) {

          if(!angular.isArray(permissions)) {
            permissions = _.words('' + permissions);
          }

          avUserAuthorizations.isAnyAuthorized(permissions).then(avHasPermissionController.onSuccess, avHasPermissionController.onError);
        });
      }
    };
  });

})(window);

'use strict';

import angular from 'angular';
import _ from 'lodash';
import availity from '../module';

availity.ui.controller('AvHasPermissionController', function($element) {

  this.onSuccess = function(isAuthorized) {
    if (isAuthorized) {
      $element.removeClass('ng-hide');
      $element.show();
    } else {
      $element.remove();
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

      var avHasPermission = controllers[0];

      $element.hide();

      $scope.$watch($attr.avHasPermission, function(_permissions) {

        var permissions = _permissions;

        if (!angular.isArray(permissions)) {
          permissions = _.words('' + permissions);
        }

        avUserAuthorizations.isAnyAuthorized(permissions).then(avHasPermission.onSuccess, avHasPermission.onError);

      });
    }
  };
});



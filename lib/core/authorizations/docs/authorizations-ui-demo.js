(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('AuthorizationsController', function($scope, $log, avUserAuthorizations) {
    var model = {
      permissionId: 452,
      selectedOrg: null,
      selectedPayer: null
    };
    $scope.model = model;

    avUserAuthorizations.getOrganizationsByPermissionId(model.permissionId).then(function(orgs) {
      $scope.organizations = orgs;
    });

    $scope.onSelectOrg = function() {
      $log.info(model);
      avUserAuthorizations.getPayersByPermissionIdAndOrgId(model.permissionId, model.selectedOrg).then(function(payers) {
        $scope.payers = payers;
      });
    };

    $scope.onSelectPayer = function() {
      $log.info(model);
    };

  });

})(window);

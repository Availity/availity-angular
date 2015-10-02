(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('AuthPayerOrgController', function($scope, $log, avUserAuthorizations) {

    var model = {
      permissionId: '452',
      selectedOrg: null,
      selectedPayer: null
    };
    $scope.model = model;

    avUserAuthorizations.getOrganizations(model.permissionId).then(function(orgs) {
      $scope.organizations = orgs;
    });

    $scope.onSelectOrg = function() {
      $log.info(model);
      avUserAuthorizations.getPayers(model.permissionId, model.selectedOrg).then(function(payers) {
        $scope.payers = payers;
      });
    };

    $scope.onSelectPayer = function() {
      $log.info(model);
    };

  });

  availity.demo.controller('AuthIsAuthorizedController', function($scope, $log, avUserAuthorizations) {

    var model = {
      permissionId: '452',
      isAuthorized: null
    };
    $scope.model = model;
    $scope.checkIsAuthorized = function() {
      avUserAuthorizations.isAuthorized(model.permissionId).then(function(isAuthorized) {
        $log.info(model);
        model.isAuthorized = isAuthorized;
      });
    };

    $scope.checkIsAuthorized();
  });

})(window);

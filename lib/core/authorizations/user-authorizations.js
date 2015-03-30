(function (root) {
  'use strict';

  var availity = root.availity;

  // local variables
  var $q;
  var avUserPermissionsResource;

  /**
   * Creates AvUserAuthorizations service.  This service designed facade around multiple api dealing with
   * permissions
   * @constructor
   */
  function AvUserAuthorizations() {
    this.userPermissionsMap = {};
    // By default will use current region for user based on service, set to 'ALL' for all regions
    this.region = '';
    this.invalidateUser = true;  // First call will force reload of permission on server
  }

  availity.core.factory('avUserAuthorizations', function ($injector) {
    $q = $injector.get('$q');
    avUserPermissionsResource = $injector.get('avUserPermissionsResource');
    return new AvUserAuthorizations();
  });

})(window);

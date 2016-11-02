'use strict';

exports.__esModule = true;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvUserAuthorizationsFactory = function AvUserAuthorizationsFactory($q, $log, avUserPermissionsResource) {
  var AvUserAuthorizations = function () {
    function AvUserAuthorizations() {
      _classCallCheck(this, AvUserAuthorizations);

      /**
       * Region is used to return permission/resources relative to region. If null service will
       * return all permission relative to current.  If value 'ALL' used it will return value relative
       * to all regions the user has access to.
       */
      this.region = null;

      /**
       * PermissionIds contains the set of permissionIds to request from service. If user of service calls
       * setPermissionIds() or call getPermissions() with complete set of permissionIds needed by application,
       * then service should only make that one hit to retrieve permission information.
       */
      this.permissionIds = [];
    }

    AvUserAuthorizations.prototype.setRegion = function setRegion(region) {
      this.region = region;
      return this;
    };

    AvUserAuthorizations.prototype.setPermissionIds = function setPermissionIds(permissionIds) {

      if (!_angular2.default.isArray(permissionIds)) {
        throw new Error('permissionsIds must be an array of strings in setPermissionIds()');
      }

      this.permissionIds = permissionIds;

      return this;
    };

    AvUserAuthorizations.prototype.isAuthorized = function isAuthorized(permissionId) {
      return this.getPermission(permissionId).then(function (permission) {
        return permission.isAuthorized;
      });
    };

    AvUserAuthorizations.prototype.isAnyAuthorized = function isAnyAuthorized(permissionIds) {
      return this.getPermissions(permissionIds).then(function (permissions) {
        return permissions.some(function (permission) {
          return permission.isAuthorized;
        });
      });
    };

    AvUserAuthorizations.prototype.getPermission = function getPermission(permissionId) {

      if (!_angular2.default.isString(permissionId)) {
        throw new Error('permissionsId must be a string ID for getPermission()');
      }

      return this.getPermissions([permissionId]).then(function (permissions) {
        return permissions.find(function (permission) {
          return permission.id === permissionId;
        });
      });
    };

    AvUserAuthorizations.prototype.getPermissions = function getPermissions(permissionIds) {
      var _this = this;

      if (!_angular2.default.isArray(permissionIds)) {
        throw new Error('permissionsIds must be an array of string IDs for getPermissions()');
      }

      // Combine pre-loaded permission ids with the ids from this function invocation
      this.permissionIds = _lodash2.default.union(this.permissionIds, permissionIds);

      return avUserPermissionsResource.getPermissions(this.permissionIds, this.region).then(function (permissions) {
        return _this.map(permissionIds, permissions);
      });
    };

    AvUserAuthorizations.prototype.getOrganizations = function getOrganizations(permissionId) {
      return this.getPermission(permissionId).then(function (permission) {
        return permission.organizations;
      });
    };

    AvUserAuthorizations.prototype.getPayers = function getPayers(permissionId, organizationId) {

      return this.getPermission(permissionId).then(function (permission) {

        var organization = permission.organizations.find(function (thisPermission) {
          return thisPermission.id === organizationId;
        });

        if (organization && organization.resources) {
          return organization.resources;
        }

        return [];
      });
    };

    AvUserAuthorizations.prototype.map = function map(permissionIds, permissions) {

      var self = this;

      var result = permissionIds.map(function (permissionId) {

        var key = { id: permissionId };
        var permission = permissions.find(function (thisPermission) {
          return thisPermission.id === permissionId;
        });
        permission = permission ? self.convert(permission) : self.convert(key);
        return permission;
      });

      return result;
    };

    AvUserAuthorizations.prototype.convert = function convert(permission) {

      permission.isAuthorized = permission.organizations ? permission.organizations.length > 0 : false;
      permission.geographies = permission.geographies || [];
      permission.organizations = permission.organizations || [];

      return permission;
    };

    return AvUserAuthorizations;
  }();

  return new AvUserAuthorizations();
};

_module2.default.factory('avUserAuthorizations', AvUserAuthorizationsFactory);

exports.default = _module2.default;
'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./hide.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvHidePermissionController = function () {
  function AvHidePermissionController($element, avUserAuthorizations) {
    _classCallCheck(this, AvHidePermissionController);

    this.$element = $element;
    this.avUserAuthorizations = avUserAuthorizations;
  }

  AvHidePermissionController.prototype.$onInit = function $onInit() {
    this.$element.hide();
  };

  AvHidePermissionController.prototype.$onChanges = function $onChanges(changed) {
    var _this = this;

    var permissions = changed.avHidePermission.currentValue;

    if (!_angular2.default.isArray(permissions)) {
      permissions = ('' + permissions).split(/\s+/);
    }

    this.avUserAuthorizations.isAnyAuthorized(permissions).then(function (isAuthorized) {
      return _this.onSuccess(isAuthorized);
    }, function () {
      return _this.onError();
    });
  };

  AvHidePermissionController.prototype.onSuccess = function onSuccess(isAuthorized) {
    if (isAuthorized) {
      this.$element.removeClass('ng-hide');
      this.$element.show();
    } else {
      this.$element.remove();
    }
  };

  AvHidePermissionController.prototype.onError = function onError() {
    this.$element.remove();
  };

  return AvHidePermissionController;
}();

_module2.default.directive('avHidePermission', function () {
  return {
    restrict: 'A',
    controller: AvHidePermissionController,
    scope: {},
    bindToController: {
      avHidePermission: '<' // array or comma delimited supported
    },
    controllerAs: 'vm'
  };
});
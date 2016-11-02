'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('select2');

require('./controller');

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import angular from 'angular';
_module2.default.directive('avDropdown', function ($timeout) {

  return {
    restrict: 'A',
    priority: 10, // select directive priority is 1
    require: ['ngModel', 'avDropdown'],
    controller: 'AvDropdownController',
    link: function link(scope, element, attrs, controllers) {

      element.addClass('select2');

      var ngModel = controllers[0];
      var avDropdown = controllers[1];

      avDropdown.init({
        ngModel: ngModel
      });

      if (attrs.ngOptions) {
        avDropdown.ngOptions();
      }

      ngModel.$parsers.push(function (value) {

        var parent = element.prev();
        parent.toggleClass('ng-invalid', !ngModel.$valid).toggleClass('ng-valid', ngModel.$valid).toggleClass('ng-invalid-required', !ngModel.$valid).toggleClass('ng-valid-required', ngModel.$valid).toggleClass('ng-dirty', ngModel.$dirty).toggleClass('ng-pristine', ngModel.$pristine);
        return value;
      });

      element.on('change', function (e) {

        // special case since the ajax handling doesn't bind to the model correctly
        // this has to do with select2 (v3.5.2) using a hidden field instead of a select for ajax
        if (avDropdown.options.query) {

          $timeout(function () {
            if (avDropdown.isRemoteMultiple()) {
              avDropdown.setRemoteViewValue(e);
            } else {
              avDropdown.setViewValue(e);
            }
          }, false, 0);
        }
      });

      var _$render = ngModel.$render;
      ngModel.$render = function () {
        _$render();
        avDropdown.setValue();
      };

      if (attrs.ngFocus) {
        element.on('select2-focus', function () {
          scope.$eval(scope.$eval(attrs.ngFocus));
        });
      }

      if (attrs.ngBlur) {
        element.on('select2-blur', function () {
          scope.$eval(scope.$eval(attrs.ngBlur));
        });
      }

      // https://github.com/t0m/select2-bootstrap-css/issues/37#issuecomment-42714589
      element.on('select2-open', function () {

        // look for .has-success, .has-warning, .has-error
        // (really look for .has-* … might interfere with other CSS-classes starting with "has-")
        if (element.parents('[class*="has-"]').length) {

          // get all CSS-classes from the element where we found "has-*" and collect them in an array
          var classNames = (0, _jquery2.default)(this).parents('[class*="has-"]')[0].className.split(/\s+/);

          // go through the class names, find "has-"
          for (var i = 0; i < classNames.length; ++i) {
            if (classNames[i].match('has-')) {
              (0, _jquery2.default)('#select2-drop').addClass(classNames[i]);
            }
          }
        }
      });

      if (avDropdown.options.closeOnResize) {

        (0, _jquery2.default)(window).on('resize.select2', function () {
          element.select2('close');
        });
      }

      attrs.$observe('disabled', function (value) {
        element.select2('enable', !value);
      });

      attrs.$observe('readonly', function (value) {
        element.select2('readonly', !!value);
      });

      scope.$on('$destroy', function () {
        (0, _jquery2.default)(window).off('resize.select2');
        element.select2('destroy');
      });

      $timeout(function () {
        element.select2(avDropdown.options);
      });
    }
  };
});
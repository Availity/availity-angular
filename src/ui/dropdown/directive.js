// import angular from 'angular';
import $ from 'jquery';
import 'select2';

import './controller';
import ngModule from '../module';

ngModule.directive('avDropdown', ($timeout) => {

  return {
    restrict: 'A',
    priority: 10, // select directive priority is 1
    require: ['ngModel', 'avDropdown'],
    controller: 'AvDropdownController',
    link(scope, element, attrs, controllers) {

      element.addClass('select2');

      const ngModel = controllers[0];
      const avDropdown = controllers[1];

      avDropdown.init({
        ngModel
      });

      if (attrs.ngOptions ) {
        avDropdown.ngOptions();
      }

      ngModel.$parsers.push(value => {

        const parent = element.prev();
        parent
          .toggleClass('ng-invalid', !ngModel.$valid)
          .toggleClass('ng-valid', ngModel.$valid)
          .toggleClass('ng-invalid-required', !ngModel.$valid)
          .toggleClass('ng-valid-required', ngModel.$valid)
          .toggleClass('ng-dirty', ngModel.$dirty)
          .toggleClass('ng-pristine', ngModel.$pristine);
        return value;

      });

      element.on('change', e => {

        // special case since the ajax handling doesn't bind to the model correctly
        // this has to do with select2 (v3.5.2) using a hidden field instead of a select for ajax
        if (avDropdown.options.query) {

          $timeout(() => {
            if (avDropdown.isRemoteMultiple()) {
              avDropdown.setRemoteViewValue(e);
            } else {
              avDropdown.setViewValue(e);
            }

          }, false, 0);

        }

      });

      const _$render = ngModel.$render;
      ngModel.$render = () => {

        _$render();

        if (avDropdown.multiple) {
          avDropdown.setValues();
        } else {
          avDropdown.setValue();
        }

      };


      if (attrs.ngFocus) {
        element.on('select2-focus', () => {
          scope.$eval(scope.$eval(attrs.ngFocus));
        });
      }

      if (attrs.ngBlur) {
        element.on('select2-blur', () => {
          scope.$eval(scope.$eval(attrs.ngBlur));
        });
      }

      // https://github.com/t0m/select2-bootstrap-css/issues/37#issuecomment-42714589
      element.on('select2-open', function() {

        // look for .has-success, .has-warning, .has-error
        // (really look for .has-* … might interfere with other CSS-classes starting with "has-")
        if (element.parents('[class*="has-"]').length) {

          // get all CSS-classes from the element where we found "has-*" and collect them in an array
          const classNames = $(this).parents('[class*="has-"]')[0].className.split(/\s+/);

          // go through the class names, find "has-"
          for (let i = 0; i < classNames.length; ++i) {
            if (classNames[i].match('has-')) {
              $('#select2-drop').addClass(classNames[i]);
            }
          }
        }
      });


      if (avDropdown.options.closeOnResize) {

        $(window).on('resize.select2', function() {
          element.select2('close');
        });

      }

      attrs.$observe('disabled', value => {
        element.select2('enable', !value);
      });

      attrs.$observe('readonly', value => {
        element.select2('readonly', !!value);
      });

      scope.$on('$destroy', () => {
        $(window).off('resize.select2');
        element.select2('destroy');
      });

      $timeout(() => {
        element.select2(avDropdown.options);
      });

    }
  };
});

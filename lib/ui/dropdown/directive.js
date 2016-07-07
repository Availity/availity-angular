import $ from 'jquery';
import _ from 'lodash';
import 'select2';

import './controller';
import ngModule from '../module';

ngModule.directive('avDropdown', ($timeout) => {

  return {
    restrict: 'A',
    require: ['ngModel', 'avDropdown'],
    controller: 'AvDropdownController',
    link(scope, element, attrs, controllers) {

      const ngModel = controllers[0];
      const avDropdown = controllers[1];

      avDropdown.setNgModel(ngModel);
      avDropdown.init();

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
            // look at moving this to the controller
            if (avDropdown.isRemoteMultiple()) {
              avDropdown.setRemoteViewValue(e);
            } else {
              avDropdown.setViewValue(e);
            }

          }, false, 0);
        }

      });

      // fires ng-focus when select2-focus fires.
      element.on('select2-focus', () => {
        if (attrs.ngFocus) {
          scope.$eval(scope.$eval(attrs.ngFocus));
        }
      });

      // fires ng-blur when select2-blur occurs.
      element.on('select2-blur', () => {
        if (attrs.ngBlur) {
          scope.$eval(scope.$eval(attrs.ngBlur));
        }
      });

      // https://github.com/t0m/select2-bootstrap-css/issues/37#issuecomment-42714589
      element.on('select2-open', function() {

        // look for .has-success, .has-warning, .has-error
        // (really look for .has-* … which is good enough for the demo page, but obviously might interfere with other CSS-classes starting with "has-")
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

      const _$render = ngModel.$render;
      ngModel.$render = () => {
        _$render();

        if (avDropdown.multiple) {
          avDropdown.setValues();
        } else {
          avDropdown.setValue();
        }

      };

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

      // If event listeners are specified in the options, set them up here
      if (_.get(avDropdown, 'options.eventListeners')) {
        _.each(avDropdown.options.eventListeners, (listener, eventId) => {
          if (_.isFunction(listener)) {
            element.on(eventId, listener);
          }
        });
      }
    }
  };
});

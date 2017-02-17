import angular from 'angular';
import 'bootstrap-datepicker';

import ngModule from '../module';

ngModule.directive('avDatepicker', function($window, $log, AV_DATEPICKER) {
  return {
    restrict: 'A',
    require: ['ngModel', 'avDatepicker'],
    priority: 1,
    controller: 'AvDatepickerController',
    link(scope, element, attrs, controllers) {

      let ngModel = controllers[0];
      const avDatepicker = controllers[1];

      if (!ngModel) {
        ngModel = avDatepicker.findModel();
        if (!ngModel) {
          $log.error('avDatepicker requires ngModel');
          return;
        }
      }

      avDatepicker.init();
      avDatepicker.setNgModel(ngModel);

      // Datepicker plugin triggers a change event on load that will read in
      // the input value and update the Angular model shortly after.  In order
      // to preserve model values on load, we read the model in from scope and
      // set the input value with jQuery
      const value = scope.$eval(attrs.ngModel);
      if (value) {
        const viewValue = avDatepicker.modelToView(value);
        element.val(viewValue);
      }

      ngModel.$parsers.push(::avDatepicker.viewToModel);
      ngModel.$formatters.push(::avDatepicker.modelToView);

      const _$render = ngModel.$render;
      ngModel.$render = function() {
        _$render();
        avDatepicker.setValue();
      };

      const win = angular.element($window);

      win.on('scroll.datepicker', () => {
        avDatepicker.hide();
      });

      let target = element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR);
      target = target.length ? target : element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR.replace('data-', ''));
      if (target.length) {
        target.on('click.datepicker', () => {
          if (!element.prop('disabled')) { // Hack check for IE 8
            element.focus();
          }
        });
      }

      scope.$on('$destroy', () => {
        avDatepicker.hide();
        avDatepicker.destroy();
        win.off('scroll.datepicker');
        if (target.length) {
          target.off('click.datepicker');
        }
      });

      scope.$evalAsync(() => {
        const options = {...avDatepicker.options};
        element.datepicker(options);
      });
    }
  };
});

export default ngModule;

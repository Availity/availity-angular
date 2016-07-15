import angular from 'angular';
import ngModule from '../module';

ngModule.directive('avDatepicker', function($window, $log, AV_DATEPICKER) {
  return {
    restrict: 'A',
    require: ['ngModel', 'avDatepicker'],
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

      ngModel.$parsers.push(::avDatepicker.viewToModel);
      ngModel.$formatters.push(::avDatepicker.modelToView);

      const _$render = ngModel.$render;
      ngModel.$render = () => {
        _$render();
        avDatepicker.setValue();
      };

      const win = angular.element($window);

      win.bind('scroll', () => {
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

      scope.$on('destroy', () => {
        avDatepicker.destroy();
        if (target.length) {
          target.off('click.datepicker');
        }
      });

      scope.$evalAsync(() => {
        // why are their so many different ways to format the same date... MM/DD/YYYY -> mm/dd/yyyy makes a difference. between moment and the datepicker plugin.
        const options = {...avDatepicker.options};
        options.format = angular.lowercase(options.format);
        element.datepicker(options);
      });
    }
  };
});

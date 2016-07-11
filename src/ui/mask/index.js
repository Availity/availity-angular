import availity from '../module';

availity.ui.constant('AV_MASK', {
  NAME: 'inputmask',
  DEFAULTS: {
    date: '99/99/9999',
    phone: '(999) 999-9999',
    SSN: '999-99-9999'
  }
});

availity.ui.directive('avMask', function($window, $log, AV_MASK) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link(scope, element, attrs) {

      let maskType = AV_MASK.DEFAULTS[attrs.avMask];
      if (!maskType) {
        maskType = attrs.avMask;
      }

      scope.$evalAsync(function() {
        element.inputmask(maskType);
      });

      scope.$on('$destroy', function() {
        element.inputmask('remove');
      });
    }
  };
});

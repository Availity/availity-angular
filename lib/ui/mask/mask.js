(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_MASK', {
    NAME: 'inputmask',
    DEFAULTS: {
      date: '99/99/9999',
      phone: '(999)999-9999',
      SSN:'999-99-9999'
    }
  });



  availity.ui.directive('avMask', function($window, $log, AV_MASK) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, controller) {
        var maskType = AV_MASK.DEFAULTS[attrs['avMask']];
        if(!maskType) {
          maskType = attrs['avMask'];
        }
        scope.$evalAsync(function() {

          element.inputmask(maskType);
        });

        element.bind('keyup', function() {

          controller.$setViewValue(element.val());
        });

        element.bind('focus', function() {

          controller.$setViewValue(element.val());
          controller.$render();
        });

        element.bind('blur', function() {

          controller.$setViewValue(controller.$viewValue);
          controller.$render();
        });

        controller.$formatters.push(function(value) {
          controller.$setViewValue(value);
          controller.$render();

          if(controller.$viewValue && controller.$viewValue.length > 0) {
            value = controller.$viewValue;
            controller.$setValidity('', value && value.indexOf('_') > -1 ? false : true);
          } else {
            controller.$setValidity('', false);
          }

          return value;
        });
      }
    };
  });

})(window);

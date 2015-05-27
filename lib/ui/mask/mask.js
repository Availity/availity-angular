(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_MASK', {
    NAME: 'inputmask',
    DEFAULTS: {
      DATE: '99/99/9999',
      PHONE: '(999)999-9999',
      SSN:'999-99-9999'
    }
  });



  availity.ui.directive('avMask', function($window, $log, AV_MASK) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var maskType = AV_MASK.DEFAULTS[attrs['avMask']];
        if(!maskType) {
          maskType = attrs['avMask'];
        }
        scope.$evalAsync(function() {
          element.inputmask(maskType);
        });
      }
    };
  });

})(window);

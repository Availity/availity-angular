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

  availity.ui.controller('AvMaskController', function() {

    this.setNgModel = function(ngModel) {
      this.ngModel = ngModel;
    };

    this.modelToView = function() {

    };

    this.viewToModel = function() {

    };
  });

  availity.ui.directive('avMask', function($window, $log, AV_MASK) {
    return {
      restrict: 'A',
      controller: 'AvMaskController',
      require: ['ngModel', 'avMask'],
      link: function(scope, element, attrs, controllers) {

        var ngModel = controllers[0];
        var avMask = controllers[1];

        avMask.setNgModel(ngModel);

        var maskType = AV_MASK.DEFAULTS[attrs['avMask']];
        if(!maskType) {
          maskType = attrs['avMask'];
        }

        // var _$render = ngModel.$render;
        // ngModel.$render = function() {
        //   _$render();
        // };

        // ngModel.$parsers.push(avMask.viewToModel); // (view to model)
        // ngModel.$formatters.unshift(avMask.modelToView);  // (model to view)

        scope.$evalAsync(function() {
          element.inputmask(maskType);
        });

        scope.$on('$destroy', function () {
          element.inputmask('remove');
        });
      }
    };
  });

})(window);

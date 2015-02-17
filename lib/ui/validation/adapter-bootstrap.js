(function() {
  'use strict';

  availity.ui.constant('AV_BOOTSTRAP_ADAPTER', {
    CLASSES: {
      SUCCESS: 'has-success',
      WARNING: 'has-warning',
      ERROR: 'has-error',
      FEEDBACK: 'has-feedback',
      HELP: 'help-block'
    },
    CONTROLLER: '$avValContainerController'
  });

  availity.ui.factory('avValBootstrapAdapter', function(AV_BOOTSTRAP_ADAPTER) {

    return {

      element: function(element, ngModel) {
        var el = element[0];
        if(ngModel.$valid) {
          angular.element(el.parentNode).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
        }else{
          angular.element(el.parentNode).addClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
        }
      },

      message: function(element, ngModel) {

        var selector = [
          '.',
          AV_BOOTSTRAP_ADAPTER.CLASSES.HELP
        ].join('');

        var messageTarget = $(element).siblings(selector);

        if(messageTarget.length === 0) {
          return;
        }

        var el = messageTarget[0]; // just target first sibling
        var $el = angular.element(el);
        var avValModel = $el.data(AV_BOOTSTRAP_ADAPTER.CONTROLLER); // get the av val message controller
        if(avValModel) {
          avValModel.message(ngModel);
        }
      },

      scroll: function() {

      }
    };
  });


})();

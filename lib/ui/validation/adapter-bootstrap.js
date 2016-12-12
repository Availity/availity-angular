(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_BOOTSTRAP_ADAPTER', {
    CLASSES: {
      SUCCESS: 'has-success',
      WARNING: 'has-warning',
      ERROR: 'has-error',
      FEEDBACK: 'has-feedback',
      HELP: 'help-block',
      FORM_GROUP: '.form-group:first',
      NAVBAR: 'navbar-fixed-top'
    },
    SELECTORS: {
      CONTAINER: 'container-id',
      DATA_CONTAINER: 'data-container-id'
    },
    CONTROLLER: '$avValContainerController'
  });

  availity.ui.factory('avValBootstrapAdapter', function(AV_BOOTSTRAP_ADAPTER, $timeout, $log) {

    return {

      element: function(element, ngModel) {
        if(ngModel.$valid) {
          element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
        }else {
          element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).addClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
        }
      },

      reset: function(element) {
        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
      },

      message: function(element, ngModel, scope) {

        var selector = [
          '.',
          AV_BOOTSTRAP_ADAPTER.CLASSES.HELP
        ].join('');

        var $el = $(element);

        var target = $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.CONTAINER);
        target = target || $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.DATA_CONTAINER);

        // default to siblings
        if(scope && target) {
          // pew pew!
          target = scope.$eval(target);
        }
        target = target ? $('#' + target) : $el.siblings(selector);

        if(target.length === 0) {
          $log.warn('avValBootstrapAdapter could not find validation container for {0}', [element]);
          return;
        }

        var el = target[0];
        $el = angular.element(el);
        var avValModel = $el.data(AV_BOOTSTRAP_ADAPTER.CONTROLLER); // get the av val message controller
        if(avValModel) {
          avValModel.message(ngModel);
        }
      },

      scroll: function(form) {

        // Bootstrap fixed navbars causes bad scroll-to offsets so find them all
        var navbarSelector = [
          '.',
          AV_BOOTSTRAP_ADAPTER.CLASSES.NAVBAR
        ].join('');

        // Add up all the heights to find the true offset
        var offset = 0;
        $(navbarSelector).each(function() {
          offset += $(this).outerHeight();
        });

        var selector = [
          '.',
          AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR,
          ':first'
        ].join('');

        var $target = $(form).find(selector);
        if ($target && $target.offset()) {
          $timeout(function() {
            // scroll to offset top of first error minus the offset of the navbars
            $('body, html').animate({scrollTop: $target.offset().top - offset}, 'fast');
          }, 0, false);
        }
      }
    };
  });


})(window);

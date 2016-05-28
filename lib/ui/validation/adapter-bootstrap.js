import angular from 'angular';
import $ from 'jquery';

import availity from '../module';

availity.ui.factory('avValBootstrapAdapter', function(AV_BOOTSTRAP_ADAPTER, $timeout, $log) {

  return {

    element(element, ngModel) {
      if (ngModel.$valid) {
        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
      } else {
        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).addClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
      }
    },

    reset(element) {
      element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
    },

    message(element, ngModel) {

      const selector = [
        '.',
        AV_BOOTSTRAP_ADAPTER.CLASSES.HELP
      ].join('');

      const $el = $(element);

      const target = $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.CONTAINER);
      target = target || $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.DATA_CONTAINER);
      // default to siblings
      target = target ? $(`#${target}`) : $el.siblings(selector);

      if (target.length === 0) {
        $log.warn('avValBootstrapAdapter could not find validation container for {0}', [element]);
        return;
      }

      const el = target[0];
      $el = angular.element(el);
      const avValModel = $el.data(AV_BOOTSTRAP_ADAPTER.CONTROLLER); // get the av val message controller
      if (avValModel) {
        avValModel.message(ngModel);
      }
    },

    scroll(form) {

      // Bootstrap fixed navbars causes bad scroll-to offsets so find them all
      const navbarSelector = [
        '.',
        AV_BOOTSTRAP_ADAPTER.CLASSES.NAVBAR
      ].join('');

      // Add up all the heights to find the true offset
      const offset = 0;
      $(navbarSelector).each(function() {
        offset += $(this).outerHeight();
      });

      const selector = [
        '.',
        AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR,
        ':first'
      ].join('');

      const $target = $(form).find(selector);
      $timeout(function() {
        // scroll to offset top of first error minus the offset of the navbars
        $('body, html').animate({scrollTop: $target.offset().top - offset}, 'fast');
      }, 0, false);

    }
  };
});


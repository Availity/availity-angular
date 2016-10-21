import angular from 'angular';
import $ from 'jquery';

import ngModule from '../module';
import './constants';

ngModule.factory('avValBootstrapAdapter', (AV_BOOTSTRAP_ADAPTER, $timeout, $log) => ({

  element(context) {

    const { ngModel, element } = context;

    if (ngModel.$valid) {
      element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
    } else {
      element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).addClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
    }
  },

  reset(element) {
    element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
  },

  message(context) {

    const {element} = context;

    const selector = `.${AV_BOOTSTRAP_ADAPTER.CLASSES.HELP}`;

    let $el = $(element);

    let target = $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.CONTAINER);
    target = target || $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.DATA_CONTAINER);
    // default to siblings
    target = target ? $(`#${target}`) : $el.siblings(selector);

    if (target.length === 0) {
      $log.warn(`avValBootstrapAdapter could not find validation container for ${element}`);
      return;
    }

    const el = target[0];
    $el = angular.element(el);
    const avValModel = $el.data(AV_BOOTSTRAP_ADAPTER.CONTROLLER); // get the av val message controller
    if (avValModel) {
      avValModel.message(context);
    }
  },

  scroll(form) {

    // Bootstrap fixed navbars causes bad scroll-to offsets so find them all
    const navbarSelector = `.${AV_BOOTSTRAP_ADAPTER.CLASSES.NAVBAR}`;

    // Add up all the heights to find the true offset
    let offset = 0;
    $(navbarSelector).each(function() {
      offset += $(this).outerHeight();
    });


    const selector = `.${AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR}:first`;

    const $target = $(form).find(selector);
    if ($target && $target.offset()) {
      $timeout(() => {
        // scroll to offset top of first error minus the offset of the navbars
        $('body, html').animate({scrollTop: $target.offset().top - offset}, 'fast');
      }, 0, false);
    }

  }
}));


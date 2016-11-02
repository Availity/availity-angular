'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.factory('avValBootstrapAdapter', function (AV_BOOTSTRAP_ADAPTER, $timeout, $log) {
  return {
    element: function element(context) {
      var ngModel = context.ngModel,
          element = context.element;


      if (ngModel.$valid) {
        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
      } else {
        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).addClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
      }
    },
    reset: function reset(element) {
      element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
    },
    message: function message(context) {
      var element = context.element;


      var selector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.HELP;

      var $el = (0, _jquery2.default)(element);

      var target = $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.CONTAINER);
      target = target || $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.DATA_CONTAINER);
      // default to siblings
      target = target ? (0, _jquery2.default)('#' + target) : $el.siblings(selector);

      if (target.length === 0) {
        $log.warn('avValBootstrapAdapter could not find validation container for ' + element);
        return;
      }

      var el = target[0];
      $el = _angular2.default.element(el);
      var avValModel = $el.data(AV_BOOTSTRAP_ADAPTER.CONTROLLER); // get the av val message controller
      if (avValModel) {
        avValModel.message(context);
      }
    },
    scroll: function scroll(form) {

      // Bootstrap fixed navbars causes bad scroll-to offsets so find them all
      var navbarSelector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.NAVBAR;

      // Add up all the heights to find the true offset
      var offset = 0;
      (0, _jquery2.default)(navbarSelector).each(function () {
        offset += (0, _jquery2.default)(this).outerHeight();
      });

      var selector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR + ':first';

      var $target = (0, _jquery2.default)(form).find(selector);
      if ($target && $target.offset()) {
        $timeout(function () {
          // scroll to offset top of first error minus the offset of the navbars
          (0, _jquery2.default)('body, html').animate({ scrollTop: $target.offset().top - offset }, 'fast');
        }, 0, false);
      }
    }
  };
});
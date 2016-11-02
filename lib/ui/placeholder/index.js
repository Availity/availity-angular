'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.requires.push('ng.shims.placeholder');

_module2.default.config(function ($provide) {

  $provide.decorator('placeholderDirective', function ($delegate, $log) {

    var directive = $delegate[0];
    var originalLink = directive.link;

    var newLink = function newLink(scope, element, attrs) {

      if (originalLink && Object.keys(attrs).indexOf('avMask') > -1) {
        $log.info('placeholder shim not running on an element due to avMask on same element');
      } else if (originalLink) {
        originalLink.apply(this, arguments);
      }
    };

    directive.compile = function () {
      return newLink;
    };

    return $delegate;
  });
});
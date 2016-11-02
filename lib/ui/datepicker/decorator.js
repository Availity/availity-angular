'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dateConfig($provide) {
  // duck punch built in input validation to not date validation since it doesn't support different formats.
  $provide.decorator('inputDirective', function ($delegate) {
    var directive = $delegate[0];
    var link = directive.link;
    directive.compile = function () {
      return {
        pre: function pre(scope, element, attr, ctrls) {
          if (ctrls[0] && _angular2.default.lowercase(attr.type) === 'date' && _angular2.default.isDefined(attr.avDatepicker)) {
            // do not use the default date validation;
          } else {
            link.pre.apply(this, arguments);
          }
        }
      };
    };

    return $delegate;
  });
}

_module2.default.config(dateConfig);
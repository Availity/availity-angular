'use strict';

var _module = require('../../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineHelp = {
  template: function template($element, $attrs) {
    return '\n      <span class="inline-help"\n        av-tooltip\n        placement="top"\n        trigger="hover"\n        title="' + $attrs.title + '"\n        >\n        What\'s this\n      </span>\n      ';
  }
};

_module2.default.component('inlineHelp', inlineHelp);
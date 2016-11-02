'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_VAL', {
  EVENTS: {
    REVALIDATE: 'av:val:revalidate',
    SUBMITTED: 'av:val:submitted',
    FAILED: 'av:val:failed',
    RESET: 'av:val:reset'
  },
  DEBOUNCE: 800,
  DATE_FORMAT: {
    SIMPLE: 'MM/DD/YYYY'
  },
  PATTERNS: {
    ALPHA_ONLY: /[^A-Za-z]+/g,
    NUMERIC_ONLY: /[^0-9]+/g
  }
});

exports.default = _module2.default;
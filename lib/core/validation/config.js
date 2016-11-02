'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.value('avValConfig', {
  classes: {
    valid: 'ng-valid',
    invalid: 'ng-invalid',
    dirty: 'ng-dirty',
    pristine: 'ng-pristine',
    touched: 'ng-touched',
    untouched: 'ng-untouched',
    submitted: 'ng-submitted'
  },
  validators: ['avValPattern', 'avValSize', 'avValRequired', 'avValDateRange', 'avValDate', 'avValPhone', 'avValEmail', 'avValNpi']
});

exports.default = _module2.default;
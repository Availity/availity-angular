'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_UI', {
  FALLBACK_VALIDATION_MESSAGE: 'This field is invalid.'
});

_module2.default.constant('AV_BOOTSTRAP_ADAPTER', {
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

_module2.default.constant('AV_VAL_ADAPTER', {
  DEFAULT: 'avValBootstrapAdapter'
});
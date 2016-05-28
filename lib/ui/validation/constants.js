import ngModule from '../module';

ngModule.constant('AV_UI', {
  NG_OPTIONS: /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/
});

ngModule.constant('AV_BOOTSTRAP_ADAPTER', {
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

ngModule.constant('AV_VAL_ADAPTER', {
  DEFAULT: 'avValBootstrapAdapter'
});


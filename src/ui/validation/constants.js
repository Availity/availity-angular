import ngModule from '../module';

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


import ngModule from '../module';

ngModule.constant('AV_VAL', {
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

export default ngModule;

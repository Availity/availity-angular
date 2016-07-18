import ngModule from '../module';

// Options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html
ngModule.constant('AV_DATEPICKER', {
  CONTROLLER: '$ngModelController',
  ADD_ON_SELECTOR: '[data-toggle="datepicker"]',
  OPTIONS: [
    'autoclose',
    'beforeShowDay',
    'beforeShowMonth',
    'calendarWeeks',
    'clearBtn',
    'toggleActive',
    'container',
    'daysOfWeekDisabled',
    'datesDisabled',
    'defaultViewDate',
    'endDate',
    'forceParse',
    'format',
    'inputs',
    'keyboardNavigation',
    'language',
    'minViewMode',
    'multidate',
    'multidateSeparator',
    'orientation',
    'startDate',
    'startView',
    'todayBtn',
    'todayHighlight',
    'weekStart',
    'showOnFocus',
    'disableTouchKeyboard',
    'enableOnReadonly',
    'modelFormat'
  ],
  DEFAULTS: {
    MODELFORMAT: 'YYYY-MM-DD'
  }
});


import ngModule from '../module';

// Options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html
ngModule.constant('AV_DATEPICKER', {
  CONTROLLER: '$ngModelController',
  ADD_ON_SELECTOR: '[data-toggle="datepicker"]',
  OPTIONS: [
    'autoclose',
    'beforeShowDay',
    'beforeShowMonth',
    'beforeShowYear',
    'beforeShowDecade',
    'beforeShowCentury',
    'calendarWeeks',
    'clearBtn',
    'container',
    'datesDisabled',
    'daysOfWeekDisabled',
    'daysOfWeekHighlighted',
    'defaultViewDate',
    'disableTouchKeyboard',
    'enableOnReadonly',
    'endDate',
    'forceParse',
    'assumeNearbyYear',
    'format',
    'immediateUpdates',
    'inputs',
    'keyboardNavigation',
    'language',
    'maxViewMode',
    'minViewMode',
    'multidate',
    'multidateSeparator',
    'orientation',
    'showOnFocus',
    'startDate',
    'startView',
    'templates',
    'title',
    'todayBtn',
    'todayHighlight',
    'toggleActive',
    'weekStart',
    'zIndexOffset'
  ]
});


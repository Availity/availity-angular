'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html
_module2.default.constant('AV_DATEPICKER', {
  CONTROLLER: '$ngModelController',
  ADD_ON_SELECTOR: '[data-toggle="datepicker"]',
  OPTIONS: ['autoclose', 'assumeNearbyYear', 'beforeShowCentury', 'beforeShowDay', 'beforeShowDecade', 'beforeShowMonth', 'beforeShowYear', 'calendarWeeks', 'clearBtn', 'container', 'datesDisabled', 'daysOfWeekDisabled', 'defaultViewDate', 'disableTouchKeyboard', 'enableOnReadonly', 'endDate', 'forceParse', 'format', 'immediateUpdates', 'inputs', 'keyboardNavigation', 'language', 'maxViewMode', 'minViewMode', 'modelFormat', 'multidate', 'multidateSeparator', 'orientation', 'showOnFocus', 'startDate', 'startView', 'title', 'todayBtn', 'todayHighlight', 'toggleActive', 'weekStart', 'zIndexOffset']
});
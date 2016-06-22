/* global beforeEach, availity, afterEach, expect, module, describe, it, spyOn, console */
/**
 * Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/test/unit/directives/datepickerSpec.js
 */
describe('avDatepicker', function() {

  'use strict';

  var avDatepickerConfig;

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  beforeEach(function() {
    moment.deprecationHandler = function(name, message) {
      console.info('Received call to moment.deprecationHandler with name ' + name + ' and message ' + message);
    };

    spyOn(moment, 'deprecationHandler');
  });

  beforeEach(module(function(avDatepickerConfigProvider) {

    avDatepickerConfig = avDatepickerConfigProvider;
    avDatepickerConfig.set({
      daysOfWeekDisabled: '0',
      datesDisabled: '1'
    });

  }));

  afterEach(function() {
    moment.deprecationHandler = null; // somebody needs to talk to the moment.js guys about undefined/null and ==/===
  });

  availity.mock.directiveSpecHelper();
  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker>',
    'formatted-alt': '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker data-format="\'dd-mm-yyyy\'">',
    'addon': '<input type="text" ng-model="selectedDate" data-av-datepicker><span class="input-group-btn" data-toggle="datepicker"> <button class="btn btn-default" type="button"><span class="icon icon-calendar"></span></button></span>',
    'model-format-default': '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker data-model-format="\'default\'">',
    'model-format': '<input data-ng-model="selectedDate" name="date" type="text" data-av-datepicker data-model-format="\'MM/DD/YYYY\'">',
    'dates-disabled': '<input data-ng-model="selectedDate" name="date" type="text" data-dates-disabled="\'06\'" data-av-datepicker>'
  };
  // jscs: enable

  afterEach(function() {
    $el.data('datepicker').picker.remove();
  });

  it('should set default options', function() {
    $el = availity.mock.compileDirective(fixtures['default']);

    var options = $el.data('$avDatepickerController').options;
    expect(options.autoclose).toBe(true);
    expect(options.todayHighlight).toBe(true);
    expect(options.format).toBe('mm/dd/yyyy');
    expect(options.forceParse).toBe(false);
  });

  it('should default options when supplied', function() {
    $el = availity.mock.compileDirective(fixtures['default']);

    var options = $el.data('$avDatepickerController').options;
    expect(options.daysOfWeekDisabled).toBe('0');
    expect(options.datesDisabled).toBe('1');
  });

  it('should use attribute values over default values', function() {
    $el = availity.mock.compileDirective(fixtures['dates-disabled']);

    var options = $el.data('$avDatepickerController').options;
    expect(options.datesDisabled).toBe('06');
  });

  it('should open on click', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.data('datepicker').picker.is(':visible')).toBe(false);
    $el.focus().focus().click(); // Yes call focus twice for IE8
    expect($el.data('datepicker').picker.is(':visible')).toBe(true);
  });

  it('should correctly initialize date from MODEL', function() {
    availity.mock.$scope.selectedDate = new Date(1986, 0, 22);
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('01/22/1986');
  });

  it('should correctly initialize ISO 8601 date from MODEL', function() {
    availity.mock.$scope.selectedDate = '2014-12-31T23:00:00Z';
    angular.mock.TzDate(+1, '2014-12-31T23:00:00Z');
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('12/31/2014');
  });

  it('should correctly initialize ISO 8601 short date from MODEL', function() {
    availity.mock.$scope.selectedDate = '2014-12-31';
    angular.mock.TzDate(+1, '2014-12-31');
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('12/31/2014');
  });

  it('should correctly initialize formatted date from MODEL', function() {
    availity.mock.$scope.selectedDate = '6/4/2016';
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('06/04/2016');
    expect(moment.deprecationHandler).not.toHaveBeenCalled();
  });

  it('should correctly initialize zero-padded formatted date from MODEL', function() {
    availity.mock.$scope.selectedDate = '06/04/2016'; // Make sure that moment honors this as M/D/YYYY
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('06/04/2016');
    expect(moment.deprecationHandler).not.toHaveBeenCalled();
  });

  it('should not throw deprecation warning on string date from MODEL', function() {
    availity.mock.$scope.selectedDate = '6/4/2016';
    $el = availity.mock.compileDirective(fixtures['default']);

    expect(moment.deprecationHandler).not.toHaveBeenCalled();
  });

  it('should not accept unrecognized format from MODEL', function() {
    availity.mock.$scope.selectedDate = 'monkey_business';
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('');
  });

  it('should NOT update $modelValue when calling wrapIsoDate()', function() {

    availity.mock.$scope.selectedDate = '2014-12-31T23:00:00Z';
    angular.mock.TzDate(+1, '2014-12-31T23:00:00Z');
    $el = availity.mock.compileDirective(fixtures['default']);

    var ngModel = $el.data('$ngModelController');
    var controller = $el.data('$avDatepickerController');

    ngModel.$modelValue = '2014-11-31T23:00:00Z';
    controller.wrapIsoDate();

    expect(ngModel.$modelValue).toBe('2014-11-31T23:00:00Z');
  });

  it('should correctly ignore undefined date from MODEL', function() {
    availity.mock.$scope.selectedDate = undefined;
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('');
  });

  it('should correctly ignore null date from MODEL', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('');
  });

  it('should correctly ignore empty date from MODEL', function() {
    availity.mock.$scope.selectedDate = '';
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.val()).toBe('');
  });

  it('should correctly parse formatted date from VIEW', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['default']);

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('01/20/1987');

    var date = availity.mock.$scope.selectedDate;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1987);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(20);
  });

  it('should correctly parse ALTERNATE formatted date', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['formatted-alt']);

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('13-01-1978');

    var date = availity.mock.$scope.selectedDate;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1978);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(13);
  });

  it('should correctly write model-format to the model with default format', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['model-format-default']);

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('01/20/1987');

    var date = availity.mock.$scope.selectedDate;

    expect(typeof date === 'string').toBe(true);
    expect(date).toBe('1987-01-20');
  });

  it('should correctly write model-format to the model with custom format', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['model-format']);

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('01/20/1987');

    var date = availity.mock.$scope.selectedDate;

    expect(typeof date === 'string').toBe(true);
    expect(date).toBe('01/20/1987');
  });

  it('should correctly ignore null inputs when model-format is set', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['model-format-default']);

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue(null);

    var date = availity.mock.$scope.selectedDate;

    expect(date).toBe(undefined);
  });

  it('should correctly ignore empty inputs when model-format is set', function() {
    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['model-format-default']);

    var ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('');

    var date = availity.mock.$scope.selectedDate;

    expect(date).toBe(undefined);
  });

  it('should not default to current date when input is invalid', function() {

    availity.mock.$scope.selectedDate = null;
    $el = availity.mock.compileDirective(fixtures['formatted-alt']);

    var ngModel = $el.data('$ngModelController');
    $el.focus().focus().click(); // Yes call focus twice for IE8
    ngModel.$setViewValue('apple');
    $el.blur().blur().click();
    var date = ngModel.$viewValue;
    expect(date).toBe('apple');
  });

});

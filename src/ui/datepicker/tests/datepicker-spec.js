/* global beforeEach, afterEach, expect, module, describe, it*/

/**
 * Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/test/unit/directives/datepickerSpec.js
 */

import angular from 'angular';
import Tester from 'tester';
import fixtures from './fixtures';
import '../';

describe('avDatepicker', () => {

  let avDatepickerConfig = null;
  const tester = new Tester();
  let DEBOUNCE;

  beforeEach(() => {
    angular.mock.module('availity');
    angular.mock.module('availity.ui');
  });

  beforeEach(angular.mock.module((avDatepickerConfigProvider, AV_VAL) =>{

    avDatepickerConfig = avDatepickerConfigProvider;
    avDatepickerConfig.set({
      daysOfWeekDisabled: '0',
      datesDisabled: '1'
    });

    DEBOUNCE = AV_VAL.DEBOUNCE + 100;

  }));

  tester.directive();

  let $el;

  afterEach(() => {
    $el.data('datepicker').picker.remove();
  });

  it('should set default options', () => {

    $el = tester.compileDirective(fixtures.regular);

    const options = $el.data('$avDatepickerController').options;
    expect(options.autoclose).toBe(true);
    expect(options.todayHighlight).toBe(true);
    expect(options.format).toBe('mm/dd/yyyy');
    expect(options.forceParse).toBe(false);
  });

  it('should default options when supplied', () => {
    $el = tester.compileDirective(fixtures.regular);
    const options = $el.data('$avDatepickerController').options;
    expect(options.daysOfWeekDisabled).toBe('0');
    expect(options.datesDisabled).toBe('1');
  });

  it('should use attribute values over default values', () => {
    $el = tester.compileDirective(fixtures.disabledDates);
    const options = $el.data('$avDatepickerController').options;
    expect(options.datesDisabled).toBe('06');
  });

  it('should open on click', () => {
    tester.$scope.selectedDate = null;
    $el = tester.compileDirective(fixtures.regular);

    expect($el.data('datepicker').picker.is(':visible')).toBe(false);

    $el.focus().focus().click();

    expect($el.data('datepicker').picker.is(':visible')).toBe(true);
  });

  it('should initialize model with Date object', () => {

    tester.$scope.selectedDate = new Date(1986, 0, 22);

    $el = tester.compileDirective(fixtures.regular);
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect($el.val()).toBe('01/22/1986');

  });

  it('should correctly ignore undefined date from MODEL', () => {
    tester.$scope.selectedDate = undefined;
    $el = tester.compileDirective(fixtures.regular);

    expect($el.val()).toBe('');
  });

  it('should correctly ignore null date from MODEL', () => {
    tester.$scope.selectedDate = null;
    $el = tester.compileDirective(fixtures.regular);

    expect($el.val()).toBe('');
  });

  it('should correctly ignore empty date from MODEL', () => {
    tester.$scope.selectedDate = '';
    $el = tester.compileDirective(fixtures.regular);

    expect($el.val()).toBe('');
  });

  it('should correctly parse formatted date from VIEW', () => {

    tester.$scope.selectedDate = null;
    $el = tester.compileDirective(fixtures.regular);

    const ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('01/20/1987');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    const date = tester.$scope.selectedDate;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1987);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(20);
  });

  it('should correctly parse ALTERNATE formatted date', () => {

    tester.$scope.selectedDate = null;
    $el = tester.compileDirective(fixtures.format);

    const ngModel = $el.data('$ngModelController');
    ngModel.$setViewValue('13-01-1978');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    const date = tester.$scope.selectedDate;

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1978);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(13);
  });


  it('should not default to current date when input is invalid', () => {

    tester.$scope.selectedDate = null;
    $el = tester.compileDirective(fixtures.format);

    const ngModel = $el.data('$ngModelController');
    $el.focus().click(); // Yes call focus twice for IE8
    ngModel.$setViewValue('apple');
    $el.blur().blur().click();
    const date = ngModel.$viewValue;
    expect(date).toBe('apple');
  });

});

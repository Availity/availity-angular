/* global describe, it, beforeEach, expect, module*/

import $ from 'jquery';
import angular from 'angular';
import Tester from 'tester';

import template from './field.html';
import '../../datepicker';

describe('avValField', () => {

  const tester = new Tester();
  let DEBOUNCE;

  beforeEach( () => {
    angular.mock.module('availity', 'availity.ui', (avValProvider, AV_VAL) => {

      avValProvider.addRules({
        default: {
          lastName: {
            size: {
              min: 2,
              max: 10,
              message: 'Last name must be between 2 and 10 characters'
            },
            required: {
              message: 'Last name is required'
            }
          },
          zip: {
            required: {
              message: 'Zip is required'
            }
          },
          dateFormat: {
            format: 'MM/DD/YYYY',
            message: 'Format needs to be MM/DD/YYYY'
          }
        }
      });

      DEBOUNCE = AV_VAL.DEBOUNCE + 100;

    });
  });

  tester.directive();

  let $el;

  beforeEach( () => {

    tester.$scope.demo = {};
    tester.$scope.demo.rules = 'default';
    $el = tester.compileDirective(template);

  });

  it('should be valid and model should updated with new value', () => {
    tester.$scope.mockForm.lastName.$setViewValue('lastName');

    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.lastName.$invalid).toBe(false);
    expect(tester.$scope.demo.lastName).toBe('lastName');
  });

  it('should NOT be valid and model should NOT be updated', () => {
    tester.$scope.mockForm.lastName.$setViewValue('1');

    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.lastName.$invalid).toBe(true);
    expect(tester.$scope.demo.lastName).toBeUndefined();
  });

  it('ngModel should be update with invalid value when invalidAllowed attribute is set to true', () => {

    tester.$scope.mockForm.invalidAllowed.$setViewValue('1');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.invalidAllowed.$invalid).toBe(true);
    expect(tester.$scope.demo.invalidAllowed).toBe('1');
  });

  it('should have .has-error class on form group when options.show === true', () => {
    tester.$scope.mockForm.showOnLoad.$setViewValue('1');

    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    const formGroup = $('#showOnLoadFormGroup');
    expect(tester.$scope.mockForm.invalidAllowed.$invalid).toBe(true);
    expect(formGroup.hasClass('has-error')).toBeTruthy();
  });

  it('should have .has-error class on form-group', () => {
    tester.$scope.mockForm.lastName.$setViewValue('1');

    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    const formGroup = $('#lastNameFormGroup');
    expect(tester.$scope.mockForm.lastName.$invalid).toBe(true);
    expect(formGroup.hasClass('has-error')).toBeTruthy();
  });

  describe('events', () => {

    it('should validate on blur', () => {
      tester.$scope.demo.zip = null;

      $el.find('[name="zip"]').blur();
      tester.flush(DEBOUNCE);
      tester.$scope.$digest();
      expect(tester.$scope.mockForm.zip.$invalid).toBe(true);
    });

    it('should reset form', () => {
      tester.$scope.mockForm.lastName.$setViewValue('1');
      tester.flush(DEBOUNCE);
      tester.$scope.$digest();
      tester.$scope.$broadcast('av:val:reset');

      tester.$scope.$digest();
      tester.flush(DEBOUNCE);
      const formGroup = $('#lastNameFormGroup');

      expect(tester.$scope.mockForm.lastName.$invalid).toBe(true);
      expect(formGroup.hasClass('has-error')).toBeFalsy();
    });

  });

  describe('with avDatePicker', () => {

    it('should validate model using default format', () => {
      tester.$scope.demo.date = new Date(1986, 0, 22);

      tester.flush(DEBOUNCE);
      tester.$scope.$digest();

      expect(tester.$scope.mockForm.date.$invalid).toBe(false);
      expect(tester.$scope.mockForm.date.$viewValue).toBe('01/22/1986');
    });

    it('should validate ISO 8601 string date model using default format', () => {
      tester.$scope.demo.date = '2014-12-31T23:00:00Z';

      /* eslint new-cap: 0*/
      angular.mock.TzDate(+1, '2014-12-31T23:00:00Z');
      tester.flush(DEBOUNCE);
      tester.$scope.$digest();

      expect(tester.$scope.mockForm.date.$invalid).toBe(false);
      expect(tester.$scope.mockForm.date.$viewValue).toBe('12/31/2014');
    });

  });

});

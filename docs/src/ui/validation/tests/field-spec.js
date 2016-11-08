/* global describe, it, beforeEach, expect, module */

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

  });

  it('should be valid and model should updated with new value', () => {

    $el = tester.compileDirective(template);

    tester.$scope.mockForm.lastName.$setViewValue('lastName');

    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.lastName.$invalid).toBe(false);
    expect(tester.$scope.demo.lastName).toBe('lastName');
  });

  it('should NOT be valid and model should NOT be updated', () => {

    $el = tester.compileDirective(template);

    tester.$scope.mockForm.lastName.$setViewValue('1');

    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.lastName.$invalid).toBe(true);
    expect(tester.$scope.demo.lastName).toBeUndefined();
  });

  it('ngModel should be update with invalid value when invalidAllowed attribute is set to true', () => {

    $el = tester.compileDirective(template);

    tester.$scope.mockForm.invalidAllowed.$setViewValue('1');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.invalidAllowed.$invalid).toBe(true);
    expect(tester.$scope.demo.invalidAllowed).toBe('1');
  });

  it('should have .has-error class on form group when options.show === true', () => {

    $el = tester.compileDirective(template);

    tester.$scope.mockForm.showOnLoad.$setViewValue('1');

    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    const formGroup = $('#showOnLoadFormGroup');
    expect(tester.$scope.mockForm.invalidAllowed.$invalid).toBe(true);
    expect(formGroup.hasClass('has-error')).toBeTruthy();
  });

  it('should have .has-error class on form-group', () => {

    $el = tester.compileDirective(template);

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

      $el = tester.compileDirective(template);

      $el.find('[name="zip"]').blur();
      tester.flush(DEBOUNCE);
      tester.$scope.$digest();
      expect(tester.$scope.mockForm.zip.$invalid).toBe(true);
    });

    it('should reset form', () => {

      $el = tester.compileDirective(template);

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

      $el = tester.compileDirective(template);

      tester.flush(DEBOUNCE);
      tester.$scope.$digest();

      expect(tester.$scope.mockForm.date.$invalid).toBe(false);
      expect(tester.$scope.mockForm.date.$viewValue).toBe('01/22/1986');
    });

  });

});

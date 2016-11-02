/* global describe, it, beforeEach, expect, module, jasmine*/

import angular from 'angular';

import '../form';
import Tester from 'tester';

describe('avForm', () => {

  const tester = new Tester();
  let DEBOUNCE;

  beforeEach(() => {

    angular.mock.module('availity', avValProvider => {

      avValProvider.addRules({
        standard: {
          firstName: {
            size: {
              min: 2,
              max: 10,
              message: 'First name must be between 2 and 10 characters.'
            },
            required: {
              message: 'First name is required.'
            }
          },
          lastName: {
            size: {
              min: 2,
              max: 10,
              message: 'Last name must be between 2 and 10 characters.'
            },
            required: {
              message: 'Last name is required.'
            }
          }
        }
      });
    });

    angular.mock.module('availity.ui', _AV_VAL_ => {
      // The framework adds a default debounce of ~800ms.  When running tests,
      // a tester.flush(X) must be called with a number greater than the default debounce
      DEBOUNCE = _AV_VAL_.DEBOUNCE + 100;
    });
  });

  let $el;

  tester.directive();

  beforeEach(() => {

    tester.$scope.submit = jasmine.createSpy('submit');

    tester.$scope.demo = {
      rules: 'standard'
    };

    const template = `
    <form name="mockForm" ng-submit="submit()" av-val-form="demo.rules" av-val-on="input" >
      <input ng-model="demo.firstName" name="firstName" type="text" av-val-field="firstName"/>
      <input ng-model="demo.lastName" name="lastName" type="text" av-val-field="lastName"/>
      <input ng-model="demo.invalidAllowed" name="invalidAllowed" type="text" av-val-field="lastName"/>
      <button type="submit">login</button>
    </form>`;

    $el = tester.compileDirective(template);

  });

  it('should be $dirty', () => {

    tester.$scope.mockForm.lastName.$setViewValue('lastName');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.$dirty).toBe(true);
    expect($el.hasClass('ng-dirty')).toBe(true);

  });

  it('should be $pristine', () => {
    expect(tester.$scope.mockForm.$pristine).toBe(true);
    expect($el.hasClass('ng-pristine')).toBe(true);
  });

  it('should NOT be valid and model should NOT be updated', () => {

    tester.$scope.mockForm.lastName.$setViewValue('1');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();


    expect(tester.$scope.mockForm.lastName.$invalid).toBe(true);
    expect(tester.$scope.demo.lastName).toBeUndefined();
  });

  it('should NOT be valid and model should be updated', () => {

    const template = `
    <form name="mockForm" ng-submit="submit()" av-val-form="demo.rules" av-val-invalid="true">
      <input ng-model="demo.firstName" name="firstName" type="text" av-val-field="firstName"/>
      <input ng-model="demo.lastName" name="lastName" type="text" av-val-field="lastName"/>
      <input ng-model="demo.invalidAllowed" name="invalidAllowed" type="text" av-val-field="lastName"/>
      <button type="submit">login</button> +
    </form>`;

    $el = tester.compileDirective(template);

    tester.$scope.mockForm.invalidAllowed.$setViewValue('1');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.invalidAllowed.$invalid).toBe(true);
    expect(tester.$scope.demo.invalidAllowed).toBe('1');
  });

  describe('submit', () => {

    it('should prevent default action', () => {
      tester.$scope.mockForm.invalidAllowed.$setViewValue('1');
      tester.flush(DEBOUNCE);
      $el.triggerHandler('submit');
      tester.$scope.$digest();

      expect(tester.$scope.submit).not.toHaveBeenCalled();
    });

    it('should NOT prevent default action', () => {

      tester.$scope.mockForm.lastName.$setViewValue('lastName');
      tester.$scope.mockForm.firstName.$setViewValue('firstName');
      tester.$scope.mockForm.invalidAllowed.$setViewValue('lastName');
      tester.flush(DEBOUNCE);
      tester.$scope.$digest();

      $el.triggerHandler('submit');

      tester.$scope.$digest();

      expect(tester.$scope.submit).toHaveBeenCalled();

    });
  });

});

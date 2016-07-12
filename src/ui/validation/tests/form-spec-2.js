/* global describe, it, beforeEach, expect, module, jasmine*/

import angular from 'angular';

import '../form';
import Tester from 'tester';

describe('avForm', () => {

  const tester = new Tester();

  beforeEach(() => {

    angular.mock.module('availity', avValProvider => {

      avValProvider.addRules({
        'default': {
          'firstName': {
            'size': {
              'min': 2,
              'max': 10,
              'message': 'First name must be between 2 and 10 characters.'
            },
            'required': {
              'message': 'First name is required.'
            }
          },
          'lastName': {
            'size': {
              'min': 2,
              'max': 10,
              'message': 'Last name must be between 2 and 10 characters.'
            },
            'required': {
              'message': 'Last name is required.'
            }
          }
        }
      });
    });

    angular.mock.module('availity.ui');
  });

  let $el;

  tester.directive();

  beforeEach(() => {

    tester.$scope.submit = jasmine.createSpy('submit');
    tester.$scope.demo = {};
    tester.$scope.demo.rules = 'default';

    const template = `
    <form name="mockForm" ng-submit="submit()" data-av-val-form="demo.rules" data-av-val-debounce="1000" data-av-val-on="input" >
      <input data-ng-model="demo.firstName" name="firstName" type="text" data-av-val-field="firstName"/>
      <input data-ng-model="demo.lastName" name="lastName" type="text" data-av-val-field="lastName"/>
      <input data-ng-model="demo.invalidAllowed" name="invalidAllowed" type="text" data-av-val-field="lastName"/>
      <button type="submit">login</button>
    </form>`;

    $el = tester.compileDirective(template);

  });

  it('should be $dirty', () => {

    tester.$scope.mockForm.lastName.$setViewValue('lastName');
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.$dirty).toBe(true);
    expect($el.hasClass('ng-dirty')).toBe(true);

  });

  it('should be $pristine', () => {
    expect(tester.$scope.mockForm.$pristine).toBe(true);
    expect($el.hasClass('ng-pristine')).toBe(true);
  });

  // it('should allow form to override debounce/event attribute for all fields', () => {
  //   const controller = $el.data('$avValFormController');
  //   expect(controller.avValDebounce).toBe('1000');
  //   expect(controller.avValOn).toBe('input');
  // });

  it('should NOT be valid and model should NOT be updated', () => {
    tester.$scope.mockForm.lastName.$setViewValue('1');
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.lastName.$invalid).toBe(true);
    expect(tester.$scope.demo.lastName).toBeUndefined();
  });

  // it('should NOT be valid and model should be updated', () => {
  //   const template = `
  //   <form name="mockForm" ng-submit="submit()" data-av-val-form="demo.rules" data-av-val-debounce="1000" data-av-val-on="input" data-av-val-invalid="true">
  //     <input data-ng-model="demo.firstName" name="firstName" type="text" data-av-val-field="firstName"/>
  //     <input data-ng-model="demo.lastName" name="lastName" type="text" data-av-val-field="lastName"/>
  //     <input data-ng-model="demo.invalidAllowed" name="invalidAllowed" type="text" data-av-val-field="lastName"/>
  //     <button type="submit">login</button> +
  //   </form>`;

  //   $el = tester.compileDirective(template);

  //   tester.$scope.mockForm.invalidAllowed.$setViewValue('1');
  //   tester.$scope.$digest();

  //   expect(tester.$scope.mockForm.invalidAllowed.$invalid).toBe(true);
  //   expect(tester.$scope.demo.invalidAllowed).toBe('1');
  // });

  // describe('submit', () => {

  //   it('should prevent default action', () => {
  //     tester.$scope.mockForm.invalidAllowed.$setViewValue('1');

  //     $el.triggerHandler('submit');
  //     tester.$scope.$digest();

  //     expect(tester.$scope.submit).not.toHaveBeenCalled();
  //   });

  //   it('should NOT prevent default action', () => {

  //     tester.$scope.mockForm.lastName.$setViewValue('lastName');
  //     tester.$scope.mockForm.firstName.$setViewValue('firstName');
  //     tester.$scope.mockForm.invalidAllowed.$setViewValue('lastName');
  //     tester.$scope.$digest();

  //     $el.triggerHandler('submit');

  //     tester.$scope.$digest();

  //     expect(tester.$scope.submit).toHaveBeenCalled();

  //   });
  // });

});

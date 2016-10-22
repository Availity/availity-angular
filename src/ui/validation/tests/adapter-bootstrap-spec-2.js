/* global inject, beforeEach, expect, module, describe, it */

import angular from 'angular';
import Tester from 'tester';

import template from './adapter-bootstrap.html';

describe('avValBootstrapAdapter', () => {

  const tester = new Tester();

  beforeEach( () => {

    angular.mock.module('availity', 'availity.ui', avValProvider => {

      avValProvider.addRules({
        standard: {
          lastName: {
            size: {
              min: 2,
              max: 10,
              message: 'Last name must be between 2 and 10 characters.'
            },
            required: {
              'message': 'Last name is required.'
            }
          }
        }

      });

    });
  });

  tester.directive();

  let $form = null;
  let $el = null;
  let AV_BOOTSTRAP_ADAPTER = null;
  let DEBOUNCE;

  beforeEach(inject((_AV_BOOTSTRAP_ADAPTER_, _AV_VAL_) => {

    AV_BOOTSTRAP_ADAPTER = _AV_BOOTSTRAP_ADAPTER_;
    DEBOUNCE = _AV_VAL_.DEBOUNCE + 100;

    $form = tester.compileDirective(template);
    $el = $form.find('input[name="lastName"]');
  }));

  it('should NOT apply class .has-error to $pristine form', () => {
    expect($el.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).hasClass('has-error')).toBe(false);
  });

  it('should NOT apply class .has-error for valid input', () => {
    tester.$scope.mockForm.lastName.$setViewValue('lastName');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();
    expect($el.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).hasClass('has-error')).toBe(false);
    expect(tester.$scope.mockForm.lastName.$valid).toBe(true);
  });

  it('should apply class .has-error for invalid input', () => {

    tester.$scope.mockForm.lastName.$setViewValue('b');
    tester.flush(DEBOUNCE);
    tester.$scope.$digest();

    expect(tester.$scope.mockForm.lastName.$valid).toBe(false);
    expect($el.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).hasClass('has-error')).toBe(true);
    expect(tester.$scope.mockForm.$valid).toBe(false);
    expect($el.hasClass('ng-invalid')).toBe(true);
  });
});

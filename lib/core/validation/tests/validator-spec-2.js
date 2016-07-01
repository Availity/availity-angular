/* global describe, inject, beforeEach, spyOn, module, it, expect */

import angular from 'angular';
import Tester from 'tester';

import '../';
import './dummy-validator';

describe('avValProvider', () => {

  Tester.matchers();

  let provider;
  let avVal;
  let avValConfig;
  let $rootScope;
  let AV_VAL;

  const defaultRules = {
    'defaultRules': {
      'ssn': {
        'required': {
          'message': 'SSN is required.'
        }
      }
    }
  };

  beforeEach(angular.mock.module('availity', 'availity.mock'));

  beforeEach(angular.mock.module(avValProvider => {
    provider = avValProvider;
  }));

  beforeEach(inject((_avVal_, _avValConfig_, _$rootScope_, _AV_VAL_) => {
    avVal = _avVal_;
    avValConfig = _avValConfig_;
    $rootScope = _$rootScope_;
    AV_VAL = _AV_VAL_;
  }));

  it('should be defined', () => {
    expect(provider.$get).toBeDefined();
    expect(provider.addRules).toBeDefined();
    expect(provider.addValidators).toBeDefined();
  });

  it('should add rules', () => {
    const result = provider.addRules(defaultRules);
    expect(result).toBeEqual(defaultRules);
  });

  it('should add validators', () => {

    spyOn(avVal, 'initValidators');

    const validators = provider.addValidators(['dummyValidator']);
    const allValidators = avValConfig.validators.concat(['dummyValidator']);
    expect(allValidators).toBeEqual(validators);
  });

  describe('avVal', () => {

    it('should broadcast re-validate event when adding new rules', () => {

      spyOn($rootScope, '$broadcast');

      avVal.addRules(defaultRules);
      expect($rootScope.$broadcast).toHaveBeenCalledWith(AV_VAL.EVENTS.REVALIDATE);

    });

  });
});

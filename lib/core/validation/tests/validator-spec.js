/*global describe, inject, beforeEach, spyOn, module, it, expect */
describe('avValProvider', function() {

  'use strict';

  var provider;
  var avVal;
  var avValConfig;
  var $rootScope;
  var AV_VAL;

  var defaultRules = {
    'defaultRules': {
      'ssn': {
        'required': {
          'message': 'SSN is required.'
        }
      }
    }
  };

  beforeEach(module('availity'));

  beforeEach(module(function(avValProvider) {
    provider = avValProvider;
  }));

  beforeEach(inject(function(_avVal_, _avValConfig_, _$rootScope_, _AV_VAL_) {
    avVal = _avVal_;
    avValConfig = _avValConfig_;
    $rootScope = _$rootScope_;
    AV_VAL = _AV_VAL_;
  }));

  it('should be defined', function() {
    expect(provider.$get).toBeDefined();
    expect(provider.addRules).toBeDefined();
    expect(provider.addValidators).toBeDefined();
  });

  it('should add rules', function() {
    var result = provider.addRules(defaultRules);
    expect(result).toBeEqual(defaultRules);
  });

  it('should add validators', function() {
    var validators = provider.addValidators(['avValPattern1', 'avValPattern2']);
    var allValidators = avValConfig.validators.concat(['avValPattern1', 'avValPattern2']);

    expect(allValidators).toBeEqual(validators);
  });

  describe('avVal', function() {

    it('should broadcast re-validate event when adding rules', function() {

      spyOn($rootScope, '$broadcast');

      avVal.addRules(defaultRules);
      expect($rootScope.$broadcast).toHaveBeenCalledWith(AV_VAL.EVENTS.REVALIDATE);

    });

    it('should validate form element', function() {
      var $el = $('<input type="text" id="dummy-1"/>');
      avVal.addRules(defaultRules);
      var result = avVal.validate('defaultRules', $el, 3, 'ssn');

      expect(result.isValid).toBe(true);
    });
  });

});

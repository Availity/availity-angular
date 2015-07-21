/*global describe, inject, beforeEach, afterEach, module, it, expect */
describe('avValProvider', function() {

  'use strict';

  var provider;
  var avVal;
  var avValConfig;

  beforeEach(module('availity'));

  beforeEach(module(function(avValProvider) {
    provider = avValProvider;
  }));

  beforeEach(inject(function(_avVal_, _avValConfig_) {
    avVal = _avVal_;
    avValConfig = _avValConfig_;
  }));

  it('should be defined', function() {
    expect(provider.$get).toBeDefined();
    expect(provider.addRules).toBeDefined();
    expect(provider.addValidators).toBeDefined();
  });

  it('should add rules', function() {

    var defaultRules = {
      'ssn': {
        'required': {
          'message': 'SSN is required.'
        }
      }
    };

    var result = provider.addRules({
      'defaultRules': defaultRules
    });

    expect(result).toBeEqual({'defaultRules': defaultRules});
  });

  it('should add validators', function() {
    var validators = provider.addValidators(['avValPattern1', 'avValPattern2']);
    var allValidators = avValConfig.validators.concat(['avValPattern1', 'avValPattern2']);

    expect(allValidators).toBeEqual(validators);
  });

});

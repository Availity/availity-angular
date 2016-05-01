

'use strict';

import angular from 'angular';
import availity from '../module';

availity.core.value('avValConfig', {
  classes: {
    valid: 'ng-valid',
    invalid: 'ng-invalid',
    dirty: 'ng-dirty',
    pristine: 'ng-pristine',
    touched: 'ng-touched',
    untouched: 'ng-untouched',
    submitted: 'ng-submitted'
  },
  validators: [
    'avValPattern',
    'avValSize',
    'avValRequired',
    'avValDateRange',
    'avValDate',
    'avValPhone',
    'avValEmail',
    'avValNpi'
  ]
});

availity.core.constant('AV_VAL', {
  EVENTS: {
    REVALIDATE: 'av:val:revalidate',
    SUBMITTED: 'av:val:submitted',
    FAILED: 'av:val:failed',
    RESET: 'av:val:reset'
  },
  DEBOUNCE: 800,
  DATE_FORMAT: {
    SIMPLE: 'MM/DD/YYYY'
  },
  PATTERNS: {
    ALPHA_ONLY: /[^A-Za-z]+/g,
    NUMERIC_ONLY: /[^0-9]+/g
  }
});

availity.core.provider('avVal', function() {

  let validators = [];
  let rules = {};
  const services = {};

  this.addRules = function(_rules) {
    rules = angular.extend({}, rules, _rules);
    return rules;
  };

  this.addValidators = function(_validators) {
    validators = validators.concat(_validators);
    return validators;
  };

  this.$get = function($injector, $rootScope, $http, $log, avValConfig, AV_VAL) {

    const AvValidation = function() {
      this.initValidators();
    };

    const proto = AvValidation.prototype;

    proto.initValidators = function() {
      const self = this;

      validators = avValConfig.validators.concat(validators);

      angular.forEach(validators, function(name) {
        self.addValidator(name);
      });

    };

    proto.addValidator = function(name) {
      const validator = $injector.get(name);
      services[validator.name] = validator;
    };

    proto.addRules = function(_rules) {
      rules = angular.extend({}, rules, _rules);
      $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
    };

    proto.validate = function(key, element, value, ruleName) {

      const ruleConfig = rules[key];
      if (!ruleConfig) {
        $log.error('Failed to get rules key ' + key + '].  Forms must be tagged with a rules set name for validation to work.');
        return null;
      }

      let contraints = ruleConfig[ruleName];
      if (!contraints) {
        $log.info('Rule named [' + ruleName + '] could not be found in the current schema.');
        contraints = [];
      }

      const el = element[0];
      const results  = [];
      const violations = [];
      let _valid = true;

      angular.forEach(contraints, function(rule, contraintName) {

        if (!rule) {
          // when extended rule sets, a user can pass nulls to cancel out a rule so if
          // one doesn't exist just continue
          return null;
        }

        const validator = services[contraintName];

        if (angular.isUndefined(validator)) {
          $log.warn('No validator defined for `' + name + '`');
          return null;
        }

        const valid = validator.validate(value, rule, element);

        const validationResult = {
          valid,
          ruleName,
          contraintName,
          value,
          message: rule.message,
          field: el.name || el.id
        };

        const result = angular.extend({}, rule, validationResult);

        results.push(result);
        if (!valid) {
          violations.push(validationResult);
        }
        _valid = _valid && valid;

      });

      return {
        isValid: _valid,
        all: results, // all the constraint results
        violations
      };

    };

    return new AvValidation();

  };

});


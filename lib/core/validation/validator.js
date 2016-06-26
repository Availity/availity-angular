import angular from 'angular';
import ngModule from '../module';

import './config';
import './constants';
import './validators';

class AvValProvider {

  constructor() {
    this.validators = [];
    this.rules = {};
    this.services = {};
  }

  addRules(_rules) {
    this.rules = angular.extend({}, this.rules, _rules);
    return this.rules;
  }

  addValidators(_validators) {
    this.validators = this.validators.concat(_validators);
    return this.validators;
  }

  $get($injector, $rootScope, $http, $log, avValConfig, AV_VAL) {

    const that = this;

    class AvValidation {

      constructor() {
        this.initValidators();
      }

      initValidators() {

        const self = this;

        that.validators = avValConfig.validators.concat(that.validators);

        angular.forEach(that.validators, function(name) {
          self.addValidator(name);
        });

      }

      addValidator(name) {
        const validator = $injector.get(name);
        that.services[validator.name] = validator;
      }

      addRules(rules) {
        that.rules = angular.extend({}, that.rules, rules);
        $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
      }

      getRule(key) {
        return that.rules[key];
      }

      validate(rulesSchema, element, value, ruleName) {

        const ruleConfig = that.rules[rulesSchema];
        if (!ruleConfig) {
          $log.error(`Failed to get rules schema named [${rulesSchema}].  Forms must be tagged with a rules schema name for validation to work.`);
          return null;
        }

        let contraints = ruleConfig[ruleName];
        if (!contraints) {
          $log.info(`Rule named [${ruleName}] could not be found in the current schema.`);
          contraints = [];
        }

        const el = element[0];
        const results = [];
        const violations = [];
        let _valid = true;

        angular.forEach(contraints, function(rule, contraintName) {

          if (!rule) {
            // when extended rule sets, a user can pass nulls to cancel out a rule so if
            // one doesn't exist just continue
            return null;
          }

          const validator = that.services[contraintName];

          if (angular.isUndefined(validator)) {
            $log.warn(`No validator defined for ${name}`);
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

      }

    }

    return new AvValidation();

  }

}

ngModule.provider('avVal', AvValProvider);


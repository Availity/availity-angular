(function(root) {

  'use strict';

  var availity = root.availity;

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
      'avValDate'
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

    var validators = [];
    var rules = {};
    var services = {};

    this.addRules = function(_rules) {
      rules = angular.extend({}, rules, _rules);
      return rules;
    };

    this.addValidators = function(_validators) {
      validators = validators.concat(_validators);
      return validators;
    };

    this.$get = function($injector, $rootScope, $http, $log, avValConfig, AV_VAL) {

      var AvValidation = function() {
        this.initValidators();
      };

      var proto = AvValidation.prototype;

      proto.initValidators = function() {
        var self = this;

        validators = avValConfig.validators.concat(validators);

        angular.forEach(validators, function(name) {
          self.addValidator(name);
        });

      };

      proto.addValidator = function(name) {
        var validator = $injector.get(name);
        services[validator.name] = validator;
      };

      proto.addRules = function(_rules) {
        rules = angular.extend({}, rules, _rules);
        $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
      };

      proto.validate = function(key, element, value, ruleName) {

        var ruleConfig = rules[key];
        if(!ruleConfig) {
          $log.error('Failed to get rules key [' + key + '].  Forms must be tagged with a rules set name for validation to work.');
          return;
        }

        var contraints = ruleConfig[ruleName];
        if(!contraints) {
          $log.info('Rule named [' + ruleName + '] could not be found in the current schema.');
          contraints = [];
        }

        var el = element[0];
        var results  = [];
        var violations = [];
        var _valid = true;

        angular.forEach(contraints, function(rule, contraintName) {

          if(!rule) {
            // when extended rule sets, a user can pass nulls to cancel out a rule so if
            // one doesn't exist just continue
            return;
          }

          var validator = services[contraintName];

          if(angular.isUndefined(validator)) {
            $log.warn('No validator defined for `' + name + '`');
            return;
          }

          var valid = validator.validate(value, rule);

          var validationResult = {
            valid: valid,
            ruleName: ruleName,
            contraintName: contraintName,
            value: value,
            message: rule.message,
            field: el.name || el.id
          };

          var result = angular.extend({}, rule, validationResult);

          results.push(result);
          if(!valid) {
            violations.push(validationResult);
          }
          _valid = _valid && valid;
        });

        return {
          isValid: _valid,
          all: results, // all the constraint results
          violations: violations
        };

      };

      return new AvValidation();

    };

  });
})(window);

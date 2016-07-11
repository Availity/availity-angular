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

      getService(name) {
        return that.services[name];
      }

    }

    return new AvValidation();

  }

}

ngModule.provider('avVal', AvValProvider);


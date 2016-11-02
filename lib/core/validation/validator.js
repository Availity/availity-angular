'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./config');

require('./constants');

require('./validators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvValProvider = function () {
  function AvValProvider() {
    _classCallCheck(this, AvValProvider);

    this.validators = [];
    this.rules = {};
    this.services = {};
  }

  AvValProvider.prototype.addRules = function addRules(_rules) {
    this.rules = _angular2.default.extend({}, this.rules, _rules);
    return this.rules;
  };

  AvValProvider.prototype.addValidators = function addValidators(_validators) {
    this.validators = this.validators.concat(_validators);
    return this.validators;
  };

  AvValProvider.prototype.$get = function $get($injector, $rootScope, avValConfig, AV_VAL) {

    var that = this;

    var AvValidation = function () {
      function AvValidation() {
        _classCallCheck(this, AvValidation);

        this.initValidators();
      }

      AvValidation.prototype.initValidators = function initValidators() {

        var self = this;

        that.validators = avValConfig.validators.concat(that.validators);

        _angular2.default.forEach(that.validators, function (name) {
          self.addValidator(name);
        });
      };

      AvValidation.prototype.addValidator = function addValidator(name) {
        var validator = $injector.get(name);
        that.services[validator.name] = validator;
      };

      AvValidation.prototype.addRules = function addRules(rules) {
        that.rules = _angular2.default.extend({}, that.rules, rules);
        $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
      };

      AvValidation.prototype.getRule = function getRule(key) {
        return that.rules[key];
      };

      AvValidation.prototype.getService = function getService(name) {
        return that.services[name];
      };

      return AvValidation;
    }();

    return new AvValidation();
  };

  return AvValProvider;
}();

_module2.default.provider('avVal', AvValProvider);
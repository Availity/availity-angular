'use strict';

var _ = require('lodash');
var $ = require('jquery');
require('./validator-equal-to.js');
require('./validator-less-equal.js');
require('./validator-less-than.js');
require('./validator-greater-equal.js');
require('./validator-greater-than.js');

(function(root) {

  var availity = root.availity;

  availity.core.factory('avValRequiredWhen', function(avValUtils, avValEqualTo, avValLessEqual, avValLessThan, avValGreaterEqual, avValGreaterThan) {

    var validator =  {
      name: 'requiredWhen',
      validate: function(value, rules) {
        var valid = true;
        if (rules.dependencyRules) {
          _.forEach(rules.dependencyRules, function(check, dependentKey) {
            var textField = $('[av-val-field=\'' + dependentKey + '\']').val();
            var selectField = $('[av-val-field=\'' + dependentKey + '\']').find(':selected').text();
            var dependentValue = textField ? textField : selectField;
            if (check.equalTo) {
              if (avValEqualTo.validate(dependentValue, {equalToValue: check.equalTo}) || (check.equalTo === '*' && !avValUtils.isEmpty(dependentValue))) {
                valid = !avValUtils.isEmpty(value);
              }
            }
            if (check.lessThan) {
              if (avValLessThan.validate(dependentValue, {lessThanValue: check.lessThan})) {
                valid = !avValUtils.isEmpty(value);
              }
            }
            if (check.lessEqual) {
              if (avValLessEqual.validate(dependentValue, {lessEqualValue: check.lessEqual})) {
                valid = !avValUtils.isEmpty(value);
              }
            }
            if (check.greaterThan) {
              if (avValGreaterThan.validate(dependentValue, {greaterThanValue: check.greaterThan})) {
                valid = !avValUtils.isEmpty(value);
              }
            }
            if (check.greaterEqual) {
              if (avValGreaterEqual.validate(dependentValue, {greaterEqualValue: check.greaterEqual})) {
                valid = !avValUtils.isEmpty(value);
              }
            }
          });
        }
        return valid;
      }
    };

    return validator;

  });
})(window);

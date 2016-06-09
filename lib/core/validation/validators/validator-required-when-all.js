'use strict';

var _ = require('lodash');
var $ = require('jquery');
var moment = require('moment');
require('./validator-required-when');

(function(root) {

  var availity = root.availity;

  availity.core.factory('avValRequiredWhenAll', function(avValUtils, avValRequiredWhen) {

    function createRequiredWhenRule(index, field) {
      var rule = {};
      var dependencyRules = {};
      dependencyRules[index] = field;
      rule.dependencyRules = dependencyRules;
      return rule;
    }

    function calculateOffsets(val, offset) {
      var retVal;
      if (_.contains(offset, 'd') || _.contains(offset, 'm') || _.contains(offset, 'y')) {
        var numericRegex = /[0-9]+/g;
        var days = numericRegex.exec(val)[0];
        var months = numericRegex.exec(val)[0];
        var years = numericRegex.exec(val)[0];
        if (_.contains(offset, 'd')) {
          days = parseInt(days, 10) + parseInt(offset.substring(0, offset.length - 1), 10);
        } else if (_.contains(offset, 'm')) {
          months = parseInt(months, 10) + parseInt(offset.substring(0, offset.length - 1), 10);
        } else if (_.contains(offset, 'y')) {
          years = parseInt(years, 10) + parseInt(offset.substring(0, offset.length - 1), 10);
        }
        retVal = moment(days + '/' + months + '/' + years, 'MM/DD/YYYY');
        return retVal;
      }
      // Then it is an integer offset.
      retVal = val + offset;
      return retVal;
    }

    var validator =  {
      name: 'requiredWhenAll',
      validate: function(value, rules) {
        var valid = true;
        var replacementRegex = /^\$[a-zA-Z_0-9.]*/;
        var valueRegex = /[0-9]+(m|d|y|cy){0,1}$/;
        var testValue;
        if (rules.dependencyRules) {
          _.forEach(rules.dependencyRules, function(check) {
            for (var index in check) {
              if (index) {
                var getField = check[index];
                for (var fieldValue in getField) {
                  if (fieldValue) {
                    var match = replacementRegex.exec(getField[fieldValue]);
                    var offsetValue = valueRegex.exec(getField[fieldValue]);
                    if (match) {
                      var matchedExpression = match[0];
                      matchedExpression = matchedExpression.substring(1, matchedExpression.length);
                      var textField = $('[av-val-field=\'' + matchedExpression + '\']').val();
                      if (!textField) {
                        // If not, maybe its a static field?
                        textField = rules.model[matchedExpression];
                      }
                      if (textField) {
                        testValue = calculateOffsets(textField, offsetValue[0]);
                        getField[value] = testValue;
                      }
                    }
                  }
                }
                // Invoke the requiredWhen - the subsitutions have been made.
                if (valid) {
                  var requiredWhenRule = createRequiredWhenRule(index, getField);
                  valid = avValRequiredWhen.validate(value, requiredWhenRule);
                }
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

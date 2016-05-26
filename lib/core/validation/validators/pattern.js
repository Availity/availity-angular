import _ from 'lodash';

import ngModule from '../../module';
import './utils';

ngModule.factory('avValPattern', function(avValUtils) {

  const validator = {
    name: 'pattern',
    REGEX: /^\/(.*)\/([gim]*)$/, // regular expression to test a regular expression
    asRegExp(pattern) {

      // if regex then return it
      if (pattern.test) {
        return pattern;
      }


      // if string then test for valid regex then convert to regex and return
      const match = pattern.match(validator.REGEX);
      if (match) {
        return new RegExp(match[1], match[2]);
      }

      throw new Error(`Expected ${pattern} to be a RegExp`);
    },
    validate(value, rule) {

      const values = _.isArray(rule.value) ? rule.value : [rule.value];

      let valid = false;

      _.each(values, function(expresion) {
        const pattern = validator.asRegExp(expresion);
        if (avValUtils.isEmpty(value) || pattern.test(value)) {
          valid = true;
        }
      });

      return valid;
    }
  };

  return validator;

});

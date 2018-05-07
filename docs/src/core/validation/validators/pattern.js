import ngModule from '../../module';
import Validator from './validator';
import './utils';

ngModule.factory('avValPattern', function(avValUtils) {

  class PatternValidator extends Validator {

    constructor() {
      super('pattern');
      this.REGEX = /^\/(.*)\/([gim]*)$/; // regular expression to test a regular expression
    }

    asRegExp(pattern) {

      // if regex then return it
      if (pattern.test) {
        return pattern;
      }


      // if string then test for valid regex then convert to regex and return
      const match = pattern.match(this.REGEX);
      if (match) {
        return new RegExp(match[1], match[2]);
      }

      throw new Error(`Expected ${pattern} to be a RegExp`);
    }

    validate(context) {

      const {value, constraint} = context;

      const self = this;

      const values = Array.isArray(constraint.value) ? constraint.value : [constraint.value];

      let valid = false;

      values.forEach((expression) => {
        const pattern = self.asRegExp(expression);
        if (avValUtils.isEmpty(value) || pattern.test(value)) {
          valid = true;
        }
      });

      return valid;
    }

  }

  return new PatternValidator();

});

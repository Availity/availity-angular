(function(root) {
  const availity = root.availity;

  availity.core.factory('avValPattern', function(avValUtils) {

    const validator =  {
      name: 'pattern',
      REGEX: /^\/(.*)\/([gim]*)$/, // regular expression to test a regular expression
      asRegExp(pattern) {
        let match;

        if (pattern.test) {
          return pattern;
        }

        match = pattern.match(validator.REGEX);
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
})(window);

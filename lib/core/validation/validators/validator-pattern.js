(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avValPattern', function(avValUtils) {

    var validator =  {
      name: 'pattern',
      REGEX: /^\/(.*)\/([gim]*)$/, //regular expression to test a regular expression
      asRegExp: function(pattern) {
        var match;

        if(pattern.test) {
          return pattern;
        } else {
          match = pattern.match(validator.REGEX);
          if(match) {
            return new RegExp(match[1], match[2]);
          } else {
            throw ('Expected ' + pattern + ' to be a RegExp');
          }
        }
      },
      validate: function(value, rule) {
        var values = _.isArray(rule.value) ? rule.value : [rule.value];

        var valid = false;

        _.each(values, function(expresion) {
          var pattern = validator.asRegExp(expresion);
          if(avValUtils.isEmpty(value) || pattern.test(value)) {
            valid = true;
          }
        });

        return valid;
      }
    };

    return validator;

  });
})(window);

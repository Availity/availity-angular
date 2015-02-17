(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avValPattern', function() {

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
        var pattern = validator.asRegExp(rule.value);
        return pattern.test(value);
      }
    };

    return validator;

  });
})(window);

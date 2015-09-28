/* global jasmine, beforeEach*/
(function() {
  'use strict';

  // NOTE: assume `jasmine` is loading in window object

  var matchers =  {

    toBeObject: function() {
      return {
        compare: function(actual) {
          return {
            pass: angular.isObject(actual),
            message: 'Expected '+ angular.mock.dump(actual) +' to be a equal to an Object'
          };
        }
      };
    },

    toBeEqual: function() {
      return {
        compare: function(actual, expected) {
          return {
            pass: angular.equals(expected, actual),
            message: 'Expected '+ angular.mock.dump(actual) +' to be a equal to ' + angular.mock.dump(expected)
          };
        }
      };
    },

    toBeFunction: function() {
      return {
        compare: function(actual) {
          return {
            pass: angular.isFunction(actual),
            message: 'Expected '+ angular.mock.dump(actual) + ' to be a function'
          };
        }
      };
    },

    toHaveClass: function () {
      return {
        compare: function (actual, expected) {
          return {
            pass: $(actual).hasClass(expected),
            message: 'Expected '+ angular.mock.dump(actual) + ' to be equal to ' + expected
          };
        }
      };
    },

    toHaveAttr: function() {
      return {
        compare: function (actual, attr, expected) {
          return {
            pass: $(actual).attr(attr) === expected,
            message: 'Expected ' + angular.mock.dump(actual) + ' to have attribute ' + attr + ' set to ' + expected
          };
        }
      };
    },

    toHaveFocus: function() {
      return {
        compare: function (actual) {
          return {
            pass: document.activeElement === actual[0],
            message: 'Expected active element ' + angular.mock.dump(actual) + ' to have focus.'
          };
        }
      };
    }
  };

  beforeEach(function() {
    jasmine.addMatchers(matchers);
  });

})();

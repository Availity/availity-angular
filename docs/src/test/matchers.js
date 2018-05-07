/* global jasmine, beforeEach*/

// NOTE: assume `jasmine` is loading in window object

import angular from 'angular';
import $ from 'jquery';

const matchers = {

  toBeObject() {
    return {
      compare(actual) {
        return {
          pass: angular.isObject(actual),
          message: `Expected ${angular.mock.dump(actual)} to be a equal to an Object`
        };
      }
    };
  },

  toBeEqual() {
    return {
      compare(actual, expected) {
        return {
          pass: angular.equals(expected, actual),
          message: `Expected ${angular.mock.dump(actual)} to be a equal to ' + ${angular.mock.dump(expected)}`
        };
      }
    };
  },

  toBeFunction() {
    return {
      compare(actual) {
        return {
          pass: angular.isFunction(actual),
          message: `Expected ${angular.mock.dump(actual)} to be a function`
        };
      }
    };
  },

  toHaveClass() {
    return {
      compare(actual, expected) {
        return {
          pass: $(actual).hasClass(expected),
          message: `Expected ${angular.mock.dump(actual)} to be equal to ${expected}`
        };
      }
    };
  },

  toHaveAttr() {
    return {
      compare(actual, attr, expected) {
        return {
          pass: $(actual).attr(attr) === expected,
          message: `Expected ${angular.mock.dump(actual)} to have attribute ${attr} set to ${expected}`
        };
      }
    };
  },

  toHaveFocus() {
    return {
      compare(actual) {
        return {
          pass: document.activeElement === actual[0],
          message: 'Expected active element ' + angular.mock.dump(actual) + ' to have focus.'
        };
      }
    };
  }
};

export default () => {

  beforeEach( () => {
    jasmine.addMatchers(matchers);
  });

};


/* global describe, it, availity, expect */
describe('utils', function() {

  'use strict';

  var $el;

  var fixtures = {
    'default': '<input type="text" placeholder="testing">',
    'testValue': '<input type="text" placeholder="testing" value="test">'
  };

  availity.mock.directiveSpecHelper();

  describe('placeholder-shim', function() {

    it('Should be defined', function() {
      $el = availity.mock.compileDirective(fixtures['default']);
      expect($el.placeholder()).toBeDefined();

    });

    it('Should be chainable', function() {
      $el = availity.mock.compileDirective(fixtures['default']);
      expect($el.placeholder()).toEqual($el);

    });

    it('Able to access value', function() {
      $el = availity.mock.compileDirective(fixtures['default']);
      expect($el.val()).toEqual('');

    });

    it('Able to get value', function() {
      $el = availity.mock.compileDirective(fixtures['testValue']);
      expect($el.val()).toEqual('test');

    });

  });

});

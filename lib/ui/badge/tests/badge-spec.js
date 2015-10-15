/* global beforeEach, availity, expect, module, inject, describe, it */
describe('avBadge', function() {

  'use strict';

  var $rootScope;
  var defaultBadge = {
    COLOR: 'default-color',
    DEFAULT_CLASS: 'default-class'
  };

  beforeEach(function() {
    module('availity');
    module('availity.ui');
    module('availity.ui.templates');
  });

  beforeEach(module(function(AV_BADGE) {
    angular.extend(AV_BADGE, defaultBadge);
  }));

  beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
  }));

  availity.mock.directiveSpecHelper();
  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<div av-badge="42"></div>',
    'color': '<div av-badge="42" data-color="my-color"></div>'
  };
  // jscs: enable

  it('should default values', function() {
    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.hasClass(defaultBadge.DEFAULT_CLASS)).toBe(true);
    expect($el.hasClass(defaultBadge.COLOR)).toBe(true);
  });

  it('should set color', function() {
    $el = availity.mock.compileDirective(fixtures['color']);
    expect($el.hasClass('my-color')).toBe(true);
  });

});

/* global beforeEach, availity, inject, expect, module, describe, it */
describe('avDimmer', function() {

  'use strict';

  var $templateCache;

  beforeEach(function() {
    module('availity', 'availity.ui', 'availity.ui.templates');
  });

  beforeEach(inject(function(_$templateCache_) {
    $templateCache = _$templateCache_;
  }));

  availity.mock.directiveSpecHelper();

  var $el;

  it('should be defined', function() {
    var template  = $templateCache.get('ui/dimmer/tests/dimmer-test-fixture.html');
    $el = availity.mock.compileDirective(template);
    expect($el.data('avDimmer')).toBe('');
  });

  // it('should display on mouse enter', function() {
  //   var template  = $templateCache.get('ui/dimmer/tests/dimmer-test-fixture.html');
  //   $el = availity.mock.compileDirective(template);
  //   $el.trigger('mouseenter');
  //   // TODO: What to do from here?
  // });

  // it('should not display on mouse leave', function() {
  //   var template  = $templateCache.get('ui/dimmer/tests/dimmer-test-fixture.html');
  //   $el = availity.mock.compileDirective(template);
  //   $el.trigger('mouseleave');
  //   // TODO: What to do from here?
  // });


});

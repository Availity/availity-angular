/* global beforeEach, availity, inject, expect, spyOn, module, describe, it */
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

  it('should show dimmer on mouseenter', function() {

    var template  = $templateCache.get('ui/dimmer/tests/dimmer-test-fixture.html');

    var spy = spyOn($.fn, 'find').and.callThrough();
    var spyVelocity = spyOn($.fn,'velocity');

    $el = availity.mock.compileDirective(template);

    $el.trigger('mouseenter');

    expect(spy).toHaveBeenCalled();
    expect(spyVelocity).toHaveBeenCalled();
  });

  it('should show dimmer on mouseleave', function() {

    var template  = $templateCache.get('ui/dimmer/tests/dimmer-test-fixture.html');

    var spy = spyOn($.fn, 'find').and.callThrough();
    var spyVelocity = spyOn($.fn,'velocity');

    $el = availity.mock.compileDirective(template);

    $el.trigger('mouseleave');

    expect(spy).toHaveBeenCalled();
    expect(spyVelocity).toHaveBeenCalled();
  });

});

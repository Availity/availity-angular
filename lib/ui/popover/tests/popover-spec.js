/* global beforeEach, availity, inject, expect, module, describe, it */
describe('avPopover', function() {

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

    var template  = $templateCache.get('ui/popover/tests/show-fixture.html');

    $el = availity.mock.compileDirective(template);
    expect($el.data('bs.popover')).toBeDefined();

  });

  it('should show on load', function() {
    var template  = $templateCache.get('ui/popover/tests/show-fixture.html');
    $el = availity.mock.compileDirective(template);

    expect($el.data('bs.popover').options.content).toBe('You can toggle popovers to show immediately!');

    var popover = $el.siblings()[0];
    $(popover).hasClass('popover');

  });



});

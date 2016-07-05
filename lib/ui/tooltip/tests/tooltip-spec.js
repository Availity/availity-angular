/* global beforeEach, availity, inject, expect, module, describe, it */
describe('avTooltip', function() {

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

    var template  = $templateCache.get('ui/tooltip/tests/show-fixture.html');

    $el = availity.mock.compileDirective(template);
    expect($el.data('bs.tooltip')).toBeDefined();

  });

  it('should show on load', function() {
    var template  = $templateCache.get('ui/tooltip/tests/show-fixture.html');
    $el = availity.mock.compileDirective(template);
    
    expect($el.data('bs.tooltip').type).toBe('tooltip');

    var tooltip = $el.siblings()[0];
    $(tooltip).hasClass('tooltip');

  });



});

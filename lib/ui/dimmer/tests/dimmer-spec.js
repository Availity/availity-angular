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

    var template  = $templateCache.get('ui/dimmer/tests/dimmer-test.html');

    $el = availity.mock.compileDirective(template);
    expect($el).toBeDefined();

  });

  it('should not be displayed', function() {
    var template  = $templateCache.get('ui/dimmer/tests/dimmer-test.html');
    $el = availity.mock.compileDirective(template);
    var dimmer = $el.find('dimmer-content');

    debugger;

    expect($el.find('dimmer-content').style.display).toBeDefined();
  });


});

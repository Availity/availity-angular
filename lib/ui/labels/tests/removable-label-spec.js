/* global beforeEach, spyOn, availity, expect, module, inject, describe, it */
describe('avRemovableLabel', function() {

  'use strict';

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  beforeEach(inject(function($templateCache) {
    $templateCache.put('ui/labels/removable-label-tpl.html', '');
  }));

  availity.mock.directiveSpecHelper();
  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<div av-removable-label on-remove="demo.removeLabel" remove-value="1">New Label</div>',
    'disabled': '<div av-removable-label on-remove="demo.removeLabel" remove-value="1" disabled="disabled">New Label</div>'
  };
  // jscs: enable

  beforeEach(inject(function() {

    availity.mock.$scope.demo = {};
    availity.mock.$scope.demo.removeLabel = function() {};

    spyOn(availity.mock.$scope.demo, 'removeLabel').and.callFake(function() {
    });

  }));

  it('should add label-remove class', function() {

    $el = availity.mock.compileDirective(fixtures['default']);

    expect($el.hasClass('label-remove')).toBe(true);
  });

  it('should call remove label callback function with removed value', function() {

    $el = availity.mock.compileDirective(fixtures['default']);

    $el.data('$isolateScope').removeLabel();
    expect(availity.mock.$scope.demo.removeLabel).toHaveBeenCalledWith(1);
  });

  it('should not call remove label callback function when disabled', function() {

    $el = availity.mock.compileDirective(fixtures['disabled']);

    $el.data('$isolateScope').removeLabel();
    expect(availity.mock.$scope.demo.removeLabel).not.toHaveBeenCalled();
  });

});

/* global beforeEach, availity, expect, module, inject, describe, it */
describe('avTabs', function() {

  'use strict';

  var $rootScope;
  var tabs = [
    {
      id: '1',
      title: 'one',
      content: 'content for one',
      active: true
    },
    {
      id: '2',
      title: 'two',
      content: 'content for two'
    }
  ];

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  beforeEach(module(function(AV_TABS) {
    angular.extend(AV_TABS, tabs);
  }));

  beforeEach(inject(function(_$rootScope_, $templateCache) {
    $rootScope = _$rootScope_;
    $templateCache.put('ui/tabs/tabs-tpl.html', '');
  }));

  availity.mock.directiveSpecHelper();
  var $el;

  // jscs: disable
  var fixtures = {
    'default': '<div av-tabs="tabs"></div>'
  };
  // jscs: enable

  it('should have isolate scope', function() {
    $el = availity.mock.compileDirective(fixtures['default']);
    availity.mock.flush;
    expect($el.hasClass('ng-isolate-scope')).toBe(true);
  });
});

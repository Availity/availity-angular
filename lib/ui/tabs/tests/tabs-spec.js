/* global beforeEach, availity, expect, module, inject, describe, it */
describe('avTabs', function() {

  'use strict';

  var AvTabsController;

  beforeEach(function() {
    module('availity');
    module('availity.ui');
    module('availity.ui.templates');
  });

  beforeEach(inject(function($controller, $rootScope) {

    AvTabsController = $controller('AvTabsController', {$scope: $rootScope});
  }));

  availity.mock.directiveSpecHelper();
  var $el;

  it('should create a tab', function() {
    $el = availity.mock.compileDirective('<av-tabs><av-tab heading="Test" template="<p>This is a tab</p>"></av-tab></av-tabs>');

    // Should have a ul with 1 li for the tab
    var uls = $el.find('ul');
    expect(uls.length).toBe(1);
    expect($(uls[0]).find('li').length).toBe(1);

    // Should have the tab content
    var p = $el.find('p');
    expect(p.length).toBe(1);
    expect($(p[0]).html()).toBe('This is a tab');
  });

  it('should create three tabs', function() {
    $el = availity.mock.compileDirective('<av-tabs>' +
      '<av-tab heading="Test 1" template="<p>This is tab 1</p>"></av-tab>' +
      '<av-tab heading="Test 2" template="<p>This is tab 2</p>"></av-tab>' +
      '<av-tab heading="Test 3" template="<p>This is tab 3</p>"></av-tab>' +
      '</av-tabs>');

    // Should have a ul with 1 li for each tab
    var uls = $el.find('ul');
    expect(uls.length).toBe(1);
    expect($(uls[0]).find('li').length).toBe(3);

    // Should have each tab content
    var p = $el.find('p');
    expect(p.length).toBe(3);
    expect($(p[0]).html()).toBe('This is tab 1');
    expect($(p[1]).html()).toBe('This is tab 2');
    expect($(p[2]).html()).toBe('This is tab 3');
  });

  it('should change tab type to pills when set', function() {
    $el = availity.mock.compileDirective('<av-tabs tab-type="pills">' +
      '<av-tab heading="Test" template="<p>This is a tab</p>"></av-tab>' +
      '</av-tabs>');
    expect($el).toHaveAttr('tab-type', 'pills');
  });
});


/* global beforeEach, availity, expect, module, describe, it */
describe('avTabs', function() {

  'use strict';

  beforeEach(function() {
    module('availity');
    module('availity.ui');
    module('availity.ui.templates');
  });

  availity.mock.directiveSpecHelper();
  var $el;

  var fixtures = {
    'default': '<div av-tabs><div av-tab heading="Test"><p>This is a tab</p></div></div>',
    'tabFromTemplate': '<div av-tabs><div av-tab heading="Test" template="tabTemplate"></div></div>',
    'multiple': '<div av-tabs>' +
        '<div av-tab heading="Test 1"><p>This is tab 1</p></div>' +
        '<div av-tab heading="Test 2"><p>This is tab 2</p></div>' +
        '<div av-tab heading="Test 3"><p>This is tab 3</p></div>' +
      '</div>',
    'active': '<div av-tabs>' +
        '<div av-tab><p>This is tab 1</p></div>' +
        '<div av-tab active="true"><p>This is tab 2</p></div>' +
        '<div av-tab><p>This is tab 3</p></div>' +
      '</div>',
    'disabled': '<div av-tabs>' +
        '<div av-tab><p>This is tab 1</p></div>' +
        '<div av-tab disable="true"><p>This is tab 2</p></div>' +
        '<div av-tab><p>This is tab 3</p></div>' +
      '</div>',
    'pills': '<div av-tabs tab-type="pills"></div>',
    'pillsSecondary': '<div av-tabs tab-type="pills-secondary"></div>',
    'vertical': '<div av-tabs vertical="true"></div>',
    'justified': '<div av-tabs justified="true"></div>',
    'noBump': '<div av-tabs pad-content="false"></div>'
  };

  it('should default to nav-tabs class', function() {
    $el = availity.mock.compileDirective(fixtures['default']);

    var uls = $el.find('ul');
    expect(uls.eq(0).hasClass('nav-tabs')).toBe(true);
  });

  it('should change tab type to pills when set', function() {
    $el = availity.mock.compileDirective(fixtures['pills']);

    var uls = $el.find('ul');
    expect(uls.eq(0).hasClass('nav-pills')).toBe(true);
  });

  it('should change tab type to pills-secondary when set', function() {
    $el = availity.mock.compileDirective(fixtures['pillsSecondary']);

    var uls = $el.find('ul');
    expect(uls.eq(0).hasClass('nav-pills-secondary')).toBe(true);
  });

  it('should stack navs when vertical is set', function() {
    $el = availity.mock.compileDirective(fixtures['vertical']);

    var uls = $el.find('ul');
    expect(uls.eq(0).hasClass('nav-stacked')).toBe(true);
  });

  it('should justify navs when justified is set', function() {
    $el = availity.mock.compileDirective(fixtures['justified']);

    var uls = $el.find('ul');
    expect(uls.eq(0).hasClass('nav-justified')).toBe(true);
  });

  it('should bump content if padContent is not set', function() {
    $el = availity.mock.compileDirective(fixtures['default']);

    var tabContents = $el.find('.tab-content');
    expect(tabContents.eq(0).hasClass('tab-bump')).toBe(true);
  });

  it('should not bump content if padContent is set', function() {
    $el = availity.mock.compileDirective(fixtures['noBump']);

    var tabContents = $el.find('.tab-content');
    expect(tabContents.eq(0).hasClass('tab-bump')).toBe(false);
  });

  describe('avTab', function() {

    it('should create a tab', function() {
      $el = availity.mock.compileDirective(fixtures['default']);

      // Should have a ul with 1 li for the tab
      var uls = $el.find('ul');
      expect(uls.length).toBe(1);
      var li = $(uls[0]).find('li');
      expect(li.length).toBe(1);
      expect($(li).find('a').text()).toBe('Test');
    });

    it('should create three tabs', function() {

      $el = availity.mock.compileDirective(fixtures['multiple']);

      var lis = $el.find('ul > li');
      expect(lis.length).toBe(3);
    });

    it('should select first tab if none are active', function() {
      $el = availity.mock.compileDirective(fixtures['multiple']);

      var actives = $el.find('ul > li.active');
      expect(actives.length).toBe(1);
      expect(actives.eq(0).index()).toBe(0);
    });

    it('should select active tab', function() {
      $el = availity.mock.compileDirective(fixtures['active']);

      var actives = $el.find('ul > li.active');
      expect(actives.length).toBe(1);
      expect(actives.eq(0).index()).toBe(1);
    });

    it('should disable tab if indicated', function() {
      $el = availity.mock.compileDirective(fixtures['disabled']);

      var disableds = $el.find('ul > li.disabled');
      expect(disableds.length).toBe(1);
      expect(disableds.eq(0).index()).toBe(1);
    });

  });

  describe('avTabPane', function() {

    it('should create a pane for tab', function() {
      $el = availity.mock.compileDirective(fixtures['default']);

      var panes = $el.find('.tab-pane');
      expect(panes.length).toBe(1);
      expect(panes.eq(0).find('p').html()).toBe('This is a tab');
    });

    it('should create three panes', function() {
      $el = availity.mock.compileDirective(fixtures['multiple']);

      var panes = $el.find('.tab-pane');
      expect(panes.length).toBe(3);
      expect(panes.eq(0).find('p').html()).toBe('This is tab 1');
      expect(panes.eq(1).find('p').html()).toBe('This is tab 2');
      expect(panes.eq(2).find('p').html()).toBe('This is tab 3');
    });

  });
});


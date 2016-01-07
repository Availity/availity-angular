/*global availity, inject, describe, it, beforeEach, expect, module, spyOn*/
describe('avScrollPagination', function() {

  'use strict';

  beforeEach(function() {
    module('availity', 'availity.ui', 'availity.ui.templates');
  });

  availity.mock.directiveSpecHelper();
  var controller;
  var scope;
  var response;

  beforeEach(inject(function($controller) {
    response = { data: {
      totalCount: 20,
      count: 10,
      offset: 0,
      limit: 10,
      entries: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    }};
    scope = {};
    scope.entries = [];
    scope.options = { resourceId: 'entries' };
    scope.apiResource = {
      query: function() {
        return {
          then: function(fn) {
            fn(response);
          }
        };
      }
    };
    controller = $controller('AvScrollPaginationController', { '$scope': scope, '$element': {} });
  }));

  it('sets options', inject(function(AV_SCROLL_PAGINATION) {
    expect(scope._options).toBeDefined();
    expect(scope._options.resourceId).toBe('entries');
    expect(scope._options.limit).toBe(AV_SCROLL_PAGINATION.DEFAULT_OPTIONS.limit);
    expect(scope._options.offset).toBe(AV_SCROLL_PAGINATION.DEFAULT_OPTIONS.offset);
    expect(scope._options.maxCached).toBe(AV_SCROLL_PAGINATION.DEFAULT_OPTIONS.maxCached);
    expect(scope._options.loadMoreText).toBe(AV_SCROLL_PAGINATION.DEFAULT_OPTIONS.loadMoreText);
    expect(scope._options.itemName).toBe(AV_SCROLL_PAGINATION.DEFAULT_OPTIONS.itemName);
    expect(scope._options.entryIdAttribute).toBe(AV_SCROLL_PAGINATION.DEFAULT_OPTIONS.entryIdAttribute);
    expect(scope._options.lowOffset).toBe(AV_SCROLL_PAGINATION.DEFAULT_OPTIONS.offset);
    expect(scope._options.highOffset).toBe(AV_SCROLL_PAGINATION.DEFAULT_OPTIONS.offset);
  }));

  describe('loadPrev', function() {
    it('updates offsets and calls to load entries', function() {
      spyOn(controller, 'loadEntries');
      scope._options.lowOffset = 10;
      scope._options.offset = 10;
      scope._options.limit = 10;
      controller.loadPrev();
      expect(scope._options.lowOffset).toBe(0);
      expect(scope._options.offset).toBe(0);
      expect(controller.loadEntries).toHaveBeenCalledWith(true);
    });
  });

  describe('loadNext', function() {
    it('updates offsets and calls to load entries', function() {
      spyOn(controller, 'loadEntries');
      scope._options.highOffset = 0;
      scope._options.offset = 0;
      scope._options.limit = 10;
      controller.loadNext();
      expect(scope._options.highOffset).toBe(10);
      expect(scope._options.offset).toBe(10);
      expect(controller.loadEntries).toHaveBeenCalledWith();
    });
  });

  describe('loadEntries', function() {
    it('makes API call with current offset and limit', function() {
      spyOn(scope.apiResource, 'query').and.returnValue({then: function() {}});
      scope._options.limit = 10;
      scope._options.offset = 0;
      controller.loadEntries();
      expect(scope.apiResource.query).toHaveBeenCalledWith({ params: { limit: 10, offset: 0}});
    });
    it('updates entries and button flags once API call resolves', function() {
      spyOn(controller, 'updateButtonVisibilityFlags');
      spyOn(controller, 'addEntries');
      controller.loadEntries(true);
      expect(controller.updateButtonVisibilityFlags).toHaveBeenCalledWith(response.data);
      expect(controller.addEntries).toHaveBeenCalledWith(response.data.entries, true);
    });
  });

  describe('updateButtonVisibilityFlags', function() {
    it('shows next if more pages can be fetched', function() {
      scope._options.highOffset = 10;
      controller.updateButtonVisibilityFlags({count: 10, totalCount: 30});
      expect(scope.showNext).toBe(true);
    });
    it('hides next if no further pages exist', function() {
      scope._options.highOffset = 20;
      controller.updateButtonVisibilityFlags({count: 10, totalCount: 30});
      expect(scope.showNext).toBe(false);
    });
    it('shows prev if previous pages exist', function() {
      scope._options.lowOffset = 10;
      controller.updateButtonVisibilityFlags({count: 10, totalCount: 30});
      expect(scope.showPrev).toBe(true);
    });
    it('hides prev if no previous pages exist', function() {
      scope._options.lowOffset = 0;
      controller.updateButtonVisibilityFlags({count: 10, totalCount: 30});
      expect(scope.showPrev).toBe(false);
    });
  });

  describe('autoscroll', function() {
    it('exists', function() {
      expect(controller.autoscroll).toBeDefined();
    });
  });

  describe('addEntries', function() {
    it('prepends entries', function() {
      var entry = {id: 5};
      var entries = [entry];
      scope._options.maxCached = 20;
      controller.addEntries(entries, true);
      expect(scope.entries.length).toBe(5);
      expect(_.indexOf(scope.entries, entry)).toBe(0);
    });
    it('appends entries', function() {
      var entry = {id: 5};
      var entries = [entry];
      scope._options.maxCached = 20;
      controller.addEntries(entries);
      expect(scope.entries.length).toBe(5);
      expect(_.indexOf(scope.entries, entry)).toBe(4);
    });
    it('slices back of array if prepending exceeds max cache', function() {
      spyOn(controller, 'autoscroll');
      var entry = {id: 5};
      var entries = [entry];
      scope._options.maxCached = 4;
      controller.addEntries(entries, true);
      expect(scope.entries.length).toBe(4);
      expect(_.indexOf(scope.entries, entry)).toBe(0);
      expect(controller.autoscroll).toHaveBeenCalledWith(3, true);
    });
    it('slices front of array if appending exceeds max cache', function() {
      spyOn(controller, 'autoscroll');
      var entry = {id: 5};
      var entries = [entry];
      scope._options.maxCached = 4;
      controller.addEntries(entries);
      expect(scope.entries.length).toBe(4);
      expect(_.indexOf(scope.entries, entry)).toBe(3);
      expect(controller.autoscroll).toHaveBeenCalledWith(2, undefined);
    });
  });
});
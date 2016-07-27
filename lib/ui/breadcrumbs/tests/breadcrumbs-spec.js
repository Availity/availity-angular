/* global beforeEach, availity, expect, module, inject, describe, it, spyOn */
describe('avBreadcrumbs', function() {

  'use strict';

  var $stateProvider;
  var $state;
  var $rootScope;
  var avBreadcrumbsService;

  var states = {
    'no-data': {},
    'no-breadcrumbs': { data: {}},
    'parent-state': {
      data: {
        breadcrumb: {
          displayName: 'Parent State'
        }
      }
    },
    'child-state1': {
      data: {
        breadcrumb: {
          displayName: 'Child State 1',
          parent: 'parent-state'
        }
      }
    },
    'child-state2': {
      data: {
        breadcrumb: {
          displayName: 'Child State 2',
          parent: 'parent-state'
        }
      }
    },
    'grandchild-state': {
      data: {
        breadcrumb: {
          displayName: 'Grandchild State',
          parent: 'child-state1'
        }
      }
    },
    'invalid-parent-state': {
      data: {
        breadcrumb: {
          displayName: 'Invalid Parent State',
          parent: 'bad-parent'
        }
      }
    },
    'dynamic-parent-state': {
      data: {
        breadcrumb: {
          level: 1
        }
      }
    },
    'dynamic-parent-state2': {
      data: {
        breadcrumb: {
          level: 1
        }
      }
    },
    'dynamic-child-state1': {
      data: {
        breadcrumb: {
          level: 2
        }
      }
    },
    'dynamic-child-state2': {
      data: {
        breadcrumb: {
          level: 2
        }
      }
    },
    'dynamic-grandchild-state1': {
      data: {
        breadcrumb: {
          level: 3
        }
      }
    },
    'dynamic-grandchild-state2': {
      data: {
        breadcrumb: {
          level: 3
        }
      }
    }
  };

  beforeEach(function() {
    module('ui.router');
    module('availity');
    module('availity.ui');
    module('availity.ui.templates');
  });

  beforeEach(module(function(_$stateProvider_) {
    $stateProvider = _$stateProvider_;

    for(var state in states) {
      $stateProvider.state(state, states[state]);
    }
  }));

  beforeEach(inject(function(_$rootScope_, _$state_, _avBreadcrumbsService_) {
    $rootScope = _$rootScope_;
    $state = _$state_;
    avBreadcrumbsService = _avBreadcrumbsService_;
  }));

  availity.mock.directiveSpecHelper();
  var $el;

  // jscs: disable
  var template = '<div av-breadcrumbs></div>';
  // jscs: enable

  describe('AvBreadcrumbsController', function() {

    it('should not have breadcrumbs if current state has no data option', function() {
      $state.transitionTo('no-data');
      $el = availity.mock.compileDirective(template);

      var breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(0);
    });

    it('should not have breadcrumbs if current state has no breadcrumb configuration', function() {
      $state.transitionTo('no-breadcrumbs');
      $el = availity.mock.compileDirective(template);

      var breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(0);
    });

    it('should have a single breadcrumb when current state is the root', function() {

      var expected = states['parent-state'].data.breadcrumb;

      $state.transitionTo('parent-state');
      $el = availity.mock.compileDirective(template);

      var breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(1);
      expect(breadcrumbs[0]).toBeEqual(expected);

    });

    it('should have a single breadcrumb and set the breadcrumb state', function() {

      $state.transitionTo('parent-state');
      $el = availity.mock.compileDirective(template);

      var breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs[0].state).toBeEqual('parent-state');

    });

    it('should have only child breadcrumb when parent state is defined but invalid', function() {

      var expected = states['invalid-parent-state'].data.breadcrumb;

      $state.transitionTo('invalid-parent-state');
      $el = availity.mock.compileDirective(template);

      var breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(1);
      expect(breadcrumbs[0]).toBeEqual(expected);

    });

    it('should have multiple breadcrumbs when current state is a child state', function() {

      var expectedParent = states['parent-state'].data.breadcrumb;
      var expectedChild = states['child-state1'].data.breadcrumb;

      $state.transitionTo('child-state1');
      $el = availity.mock.compileDirective(template);

      var breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeEqual(expectedParent);
      expect(breadcrumbs[1]).toBeEqual(expectedChild);

    });

    it('should have multiple breadcrumbs when current state is a grandchild state', function() {

      var expectedParent = states['parent-state'].data.breadcrumb;
      var expectedChild = states['child-state1'].data.breadcrumb;
      var expectedGrandchild = states['grandchild-state'].data.breadcrumb;

      $state.transitionTo('grandchild-state');
      $el = availity.mock.compileDirective(template);

      var breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(3);
      expect(breadcrumbs[0]).toBeEqual(expectedParent);
      expect(breadcrumbs[1]).toBeEqual(expectedChild);
      expect(breadcrumbs[2]).toBeEqual(expectedGrandchild);

    });

    it('should get breadcrumbs from the singleton service when level is present', function() {
      var mockBreadcrumbs = [{name:'mock'}];
      spyOn(avBreadcrumbsService, 'getBreadcrumbs').and.callFake(function () {
        return mockBreadcrumbs;
      });

      $state.transitionTo('dynamic-parent-state');
      $el = availity.mock.compileDirective(template);

      var breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(avBreadcrumbsService.getBreadcrumbs).toHaveBeenCalled();
      expect(breadcrumbs).toBeEqual(mockBreadcrumbs);
    });

  });

  describe('avBreadcrumbsDirective', function() {

    it('should initialize breadcrumbs during post-link', function() {
      var expected = states['parent-state'].data.breadcrumb;

      $state.transitionTo('parent-state', undefined, { notify: false });
      $rootScope.$digest();
      availity.mock.compileDirective(template);

      var breadcrumbs = availity.mock.$scope.breadcrumbs;
      expect(breadcrumbs.length).toBeEqual(1);
      expect(breadcrumbs[0]).toBeEqual(expected);
    });

    it('should update breadcrumbs on $stateChangeSuccess', function() {

      var expectedParent = states['parent-state'].data.breadcrumb;
      var expectedChild1 = states['child-state1'].data.breadcrumb;
      var expectedChild2 = states['child-state2'].data.breadcrumb;

      $state.transitionTo('child-state1');
      availity.mock.compileDirective(template);

      var breadcrumbs = availity.mock.$scope.breadcrumbs;
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeEqual(expectedParent);
      expect(breadcrumbs[1]).toBeEqual(expectedChild1);

      $state.transitionTo('child-state2');
      $rootScope.$digest();

      breadcrumbs = availity.mock.$scope.breadcrumbs;
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeEqual(expectedParent);
      expect(breadcrumbs[1]).toBeEqual(expectedChild2);

    });

  });

  describe('avBreadcrumbsService', function () {
    var avBreadcrumbsService;

    beforeEach(inject(function(_avBreadcrumbsService_) {
      avBreadcrumbsService = _avBreadcrumbsService_;
    }));

    it('should set top-level states as the root of the breadcrumbs', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(1);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
    });

    it('should overwrite new top-level states as the root of the breadcrumbs', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('dynamic-parent-state2');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(1);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state2');
    });

    it('should append new child states when level is greater', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state1');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-child-state1');
    });

    it('should replace peer child states when level is same', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state1');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state2');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-child-state2');
    });

    it('should append new grandchild states when level is greater', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state1');
      $rootScope.$digest();
      $state.transitionTo('dynamic-grandchild-state1');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(3);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-child-state1');
      expect(breadcrumbs[2]).toBeDefined();
      expect(breadcrumbs[2].state).toBeEqual('dynamic-grandchild-state1');
    });

    it('should replace grandchild states when level is save', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state1');
      $rootScope.$digest();
      $state.transitionTo('dynamic-grandchild-state1');
      $rootScope.$digest();
      $state.transitionTo('dynamic-grandchild-state2');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(3);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-child-state1');
      expect(breadcrumbs[2]).toBeDefined();
      expect(breadcrumbs[2].state).toBeEqual('dynamic-grandchild-state2');
    });

    it('should revert to higher level when state level is lesser', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state1');
      $rootScope.$digest();
      $state.transitionTo('dynamic-grandchild-state1');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state2');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-child-state2');
    });

    it('should skip levels when no state of that level is visited', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('dynamic-grandchild-state1');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-grandchild-state1');
    });

    it('should ignore transitions to states without data', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('no-data');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state1');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-child-state1');
    });

    it('should ignore transitions to states without a breadcrumb config', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('no-breadcrumbs');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state1');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-child-state1');
    });

    it('should ignore transitions to states without a breadcrumb level', function () {
      $state.transitionTo('dynamic-parent-state');
      $rootScope.$digest();
      $state.transitionTo('parent-state');
      $rootScope.$digest();
      $state.transitionTo('dynamic-child-state1');
      $rootScope.$digest();
      var breadcrumbs = avBreadcrumbsService.getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeDefined();
      expect(breadcrumbs[0].state).toBeEqual('dynamic-parent-state');
      expect(breadcrumbs[1]).toBeDefined();
      expect(breadcrumbs[1].state).toBeEqual('dynamic-child-state1');
    });
  });
});

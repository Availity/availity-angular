/* global beforeEach, availity, expect, module, inject, describe, it */
/* global beforeEach, availity, expect, module, inject, describe, it */
describe('avBreadcrumbs', function() {

  const $stateProvider = null;
  const $state = null;
  const $rootScope = null;

  const states = {
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

    for (const state in states) {

      if ({}.hasOwnProperty.call(states, state)) {
        $stateProvider.state(state, states[state]);
      }

    }
  }));

  beforeEach(inject(function(_$rootScope_, _$state_) {
    $rootScope = _$rootScope_;
    $state = _$state_;
  }));

  availity.mock.directiveSpecHelper();
  const $el = null;

  // jscs: disable
  const template = '<div av-breadcrumbs></div>';
  // jscs: enable

  describe('AvBreadcrumbsController', function() {

    it('should not have breadcrumbs if current state has no data option', function() {
      $state.transitionTo('no-data');
      $el = availity.mock.compileDirective(template);

      const breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(0);
    });

    it('should not have breadcrumbs if current state has no breadcrumb configuration', function() {
      $state.transitionTo('no-breadcrumbs');
      $el = availity.mock.compileDirective(template);

      const breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(0);
    });

    it('should have a single breadcrumb when current state is the root', function() {

      const expected = states['parent-state'].data.breadcrumb;

      $state.transitionTo('parent-state');
      $el = availity.mock.compileDirective(template);

      const breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(1);
      expect(breadcrumbs[0]).toBeEqual(expected);

    });

    it('should have a single breadcrumb and set the breadcrumb state', function() {

      $state.transitionTo('parent-state');
      $el = availity.mock.compileDirective(template);

      const breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs[0].state).toBeEqual('parent-state');

    });

    it('should have only child breadcrumb when parent state is defined but invalid', function() {

      const expected = states['invalid-parent-state'].data.breadcrumb;

      $state.transitionTo('invalid-parent-state');
      $el = availity.mock.compileDirective(template);

      const breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(1);
      expect(breadcrumbs[0]).toBeEqual(expected);

    });

    it('should have multiple breadcrumbs when current state is a child state', function() {

      const expectedParent = states['parent-state'].data.breadcrumb;
      const expectedChild = states['child-state1'].data.breadcrumb;

      $state.transitionTo('child-state1');
      $el = availity.mock.compileDirective(template);

      const breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(2);
      expect(breadcrumbs[0]).toBeEqual(expectedParent);
      expect(breadcrumbs[1]).toBeEqual(expectedChild);

    });

    it('should have multiple breadcrumbs when current state is a grandchild state', function() {

      const expectedParent = states['parent-state'].data.breadcrumb;
      const expectedChild = states['child-state1'].data.breadcrumb;
      const expectedGrandchild = states['grandchild-state'].data.breadcrumb;

      $state.transitionTo('grandchild-state');
      $el = availity.mock.compileDirective(template);

      const breadcrumbs = $el.data('$avBreadcrumbsController').getBreadcrumbs();
      expect(breadcrumbs.length).toBeEqual(3);
      expect(breadcrumbs[0]).toBeEqual(expectedParent);
      expect(breadcrumbs[1]).toBeEqual(expectedChild);
      expect(breadcrumbs[2]).toBeEqual(expectedGrandchild);

    });

  });

  describe('avBreadcrumbsDirective', function() {

    it('should initialize breadcrumbs during post-link', function() {
      const expected = states['parent-state'].data.breadcrumb;

      $state.transitionTo('parent-state', undefined, { notify: false });
      $rootScope.$digest();
      availity.mock.compileDirective(template);

      const breadcrumbs = availity.mock.$scope.breadcrumbs;
      expect(breadcrumbs.length).toBeEqual(1);
      expect(breadcrumbs[0]).toBeEqual(expected);
    });

    it('should update breadcrumbs on $stateChangeSuccess', function() {

      const expectedParent = states['parent-state'].data.breadcrumb;
      const expectedChild1 = states['child-state1'].data.breadcrumb;
      const expectedChild2 = states['child-state2'].data.breadcrumb;

      $state.transitionTo('child-state1');
      availity.mock.compileDirective(template);

      const breadcrumbs = availity.mock.$scope.breadcrumbs;
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

});
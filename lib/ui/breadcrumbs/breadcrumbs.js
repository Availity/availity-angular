(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_BREADCRUMBS', {

    TEMPLATE: 'ui/breadcrumbs/breadcrumbs-tpl.html'
  });

  function AvBreadcrumbsController($state, avBreadcrumbsService) {

    this.getBreadcrumb = function(breadcrumbs, state) {
      if(!state || !state.data) {
        return;
      }

      var breadcrumb = state.data.breadcrumb;
      if(!breadcrumb) {
        return;
      }

      if(breadcrumb.parent) {
        var parentState = $state.get(breadcrumb.parent);

        if(parentState) {
          this.getBreadcrumb(breadcrumbs, parentState);
        }
      }
      breadcrumb.state = state.name;
      breadcrumbs.push(breadcrumb);
    };

    this.getBreadcrumbs = function() {
      if ($state.current.data && $state.current.data.breadcrumb && $state.current.data.breadcrumb.level) {
        return avBreadcrumbsService.getBreadcrumbs();
      }
      var breadcrumbs = [];
      this.getBreadcrumb(breadcrumbs, $state.current);
      return breadcrumbs;
    };

  }

  AvBreadcrumbsController.$inject = ['$state', 'avBreadcrumbsService'];
  availity.ui.controller('AvBreadcrumbsController', AvBreadcrumbsController);

  function avBreadcrumbs(AV_BREADCRUMBS) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: AV_BREADCRUMBS.TEMPLATE,
      controller: 'AvBreadcrumbsController',
      link: function(scope, element, attrs, avBreadcrumbs) {
        scope.breadcrumbs = avBreadcrumbs.getBreadcrumbs();

        scope.$on('$stateChangeSuccess', function() {
          scope.breadcrumbs = avBreadcrumbs.getBreadcrumbs();
        });
      }
    };
  }

  avBreadcrumbs.$inject = ['AV_BREADCRUMBS'];
  availity.ui.directive('avBreadcrumbs', avBreadcrumbs);


  function avBreadcrumbsService($rootScope) {
    var self = {};
    var breadcrumbs = [];

    function _createBreadcrumbModel(state) {
      return {
        level: state.data.breadcrumb.level,
        state: state.name,
        displayName: state.data.breadcrumb.displayName
      };
    }

    function _updateBreadcrumbs(event, toState) {
      if (!toState.data || !toState.data.breadcrumb || !toState.data.breadcrumb.level) {
        return;
      }

      var latestBreadcrumb = _.last(breadcrumbs);

      while (latestBreadcrumb && toState.data.breadcrumb.level <= latestBreadcrumb.level) {
        breadcrumbs.pop();
        latestBreadcrumb = _.last(breadcrumbs);
      }
      breadcrumbs.push(_createBreadcrumbModel(toState));
    }

    function activate() {
      $rootScope.$on('$stateChangeSuccess', _updateBreadcrumbs);
    }

    function getBreadcrumbs() {
      return breadcrumbs;
    }

    self.getBreadcrumbs = getBreadcrumbs;
    activate();

    return self;
  }

  avBreadcrumbsService.$inject = ['$rootScope'];
  availity.ui.factory('avBreadcrumbsService', avBreadcrumbsService);


})(window);

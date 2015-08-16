(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_BREADCRUMBS', {

    TEMPLATE: 'ui/breadcrumbs/breadcrumbs-tpl.html'
  });

  function avBreadcrumbsController($state) {
    /*jshint validthis:true */
    var self = this;

    function getBreadcrumb(breadcrumbs, state) {
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
          getBreadcrumb(breadcrumbs, parentState);
        }
      }
      breadcrumb.state = state.name;
      breadcrumbs.push(breadcrumb);
    }

    self.getBreadcrumbs = function() {
      var breadcrumbs = [];
      getBreadcrumb(breadcrumbs, $state.current);
      return breadcrumbs;
    };
  }

  avBreadcrumbsController.$inject = ['$state'];
  availity.ui.controller('AvBreadcrumbsController', avBreadcrumbsController);

  function avBreadcrumbs(AV_BREADCRUMBS) {
    return {
      restrict: 'EA',
      templateUrl: AV_BREADCRUMBS.TEMPLATE,
      controller: 'AvBreadcrumbsController',
      link: function(scope, element, attrs, AvBreadcrumbsController) {
        scope.breadcrumbs = AvBreadcrumbsController.getBreadcrumbs();

        scope.$on('$stateChangeSuccess', function() {
          scope.breadcrumbs = AvBreadcrumbsController.getBreadcrumbs();
        });
      }
    };
  }

  avBreadcrumbs.$inject = ['AV_BREADCRUMBS'];
  availity.ui.directive('avBreadcrumbs', avBreadcrumbs);

})(window);

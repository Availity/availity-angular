(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_BREADCRUMBS', {

    TEMPLATE: 'ui/breadcrumbs/breadcrumbs-tpl.html'
  });

  function avBreadcrumbs($state, AV_BREADCRUMBS) {

    function addBreadcrumb(breadcrumbs, state) {
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
          addBreadcrumb(breadcrumbs, parentState);
        }
      }
      breadcrumb.state = state.name;
      breadcrumbs.push(breadcrumb);
    }

    return {
      restrict: 'EA',
      templateUrl: AV_BREADCRUMBS.TEMPLATE,
      link: function(scope) {
        scope.$on('$stateChangeSuccess', function(event, toState) {
          scope.breadcrumbs = [];
          addBreadcrumb(scope.breadcrumbs, toState);
        });
      }
    };
  }

  avBreadcrumbs.$inject = ['$state', 'AV_BREADCRUMBS'];
  availity.ui.directive('avBreadcrumbs', avBreadcrumbs);

})(window);

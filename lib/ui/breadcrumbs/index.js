import availity from '../module';
import template from './breadcrumbs.html';

function AvBreadcrumbsController($state) {

  this.getBreadcrumb = function(breadcrumbs, state) {
    if (!state || !state.data) {
      return;
    }

    const breadcrumb = state.data.breadcrumb;
    if (!breadcrumb) {
      return;
    }

    if (breadcrumb.parent) {
      const parentState = $state.get(breadcrumb.parent);

      if (parentState) {
        this.getBreadcrumb(breadcrumbs, parentState);
      }
    }
    breadcrumb.state = state.name;
    breadcrumbs.push(breadcrumb);
  };

  this.getBreadcrumbs = function() {
    const breadcrumbs = [];
    this.getBreadcrumb(breadcrumbs, $state.current);
    return breadcrumbs;
  };

}

AvBreadcrumbsController.$inject = ['$state'];
availity.ui.controller('AvBreadcrumbsController', AvBreadcrumbsController);

function avBreadcrumbs() {

  return {
    restrict: 'EA',
    replace: true,
    template,
    controller: 'AvBreadcrumbsController',
    link(scope, element, attrs, avBreadcrumbsCtrl) {

      scope.breadcrumbs = avBreadcrumbsCtrl.getBreadcrumbs();

      scope.$on('$stateChangeSuccess', function() {
        scope.breadcrumbs = avBreadcrumbsCtrl.getBreadcrumbs();
      });
    }

  };
}

availity.ui.directive('avBreadcrumbs', avBreadcrumbs);



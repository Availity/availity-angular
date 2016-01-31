'use strict';

import availity from '../module';
import template from './breadcrumbs.html';

function AvBreadcrumbsController($state) {

  this.getBreadcrumb = function(breadcrumbs, state) {
    if (!state || !state.data) {
      return;
    }

    var breadcrumb = state.data.breadcrumb;
    if (!breadcrumb) {
      return;
    }

    if (breadcrumb.parent) {
      var parentState = $state.get(breadcrumb.parent);

      if (parentState) {
        this.getBreadcrumb(breadcrumbs, parentState);
      }
    }
    breadcrumb.state = state.name;
    breadcrumbs.push(breadcrumb);
  };

  this.getBreadcrumbs = function() {
    var breadcrumbs = [];
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
    template: template,
    controller: 'AvBreadcrumbsController',
    link: function(scope, element, attrs, avBreadcrumbsCtrl) {

      scope.breadcrumbs = avBreadcrumbsCtrl.getBreadcrumbs();

      scope.$on('$stateChangeSuccess', function() {
        scope.breadcrumbs = avBreadcrumbsCtrl.getBreadcrumbs();
      });
    }

  };
}

availity.ui.directive('avBreadcrumbs', avBreadcrumbs);



(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_TABS', {
    TEMPLATE: 'ui/tabs/tabs-tpl.html'
  });

  availity.ui.controller('AvTabsController', function() {
  });

  availity.ui.directive('avTabs', function(AV_TABS) {
    return {
      restrict: 'A',
      controller: 'AvTabsController',
      replace: false,
      transclude: true,
      templateUrl: AV_TABS.TEMPLATE,
      scope: {
        tabs: '=avTabs'
      }
    };
  });

})(window);

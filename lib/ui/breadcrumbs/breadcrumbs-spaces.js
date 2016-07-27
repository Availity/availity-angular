(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.directive('avSpacesBreadcrumbs', function($location, avSpacesResource) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        'pageName': '@',
        'spaceId': '@'
      },
      templateUrl: 'ui/breadcrumbs/breadcrumbs-spaces-tpl.html',
      link: function(scope, element, attrs) {

        if(!scope.spaceId) {
          scope.spaceId = $location.search().spaceId;
        }

        avSpacesResource.get(scope.spaceId).then(function(response) {
          scope.spaceName = response.data.name;
        });
      }
    };
  });

})(window);

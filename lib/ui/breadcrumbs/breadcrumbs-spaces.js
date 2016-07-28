(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.directive('avSpacesBreadcrumbs', function($location, avSpacesResource) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        'pageName': '@',
        'spaceId': '@?'
      },
      templateUrl: 'ui/breadcrumbs/breadcrumbs-spaces-tpl.html',
      link: function(scope, element, attrs) {

        function parseQuery(queryString) {
            var query = {};
            var a = queryString.substr(1).split('&');
            for (var i = 0; i < a.length; i++) {
                var b = a[i].split('=');
                query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
            }
            return query;
        }

        // Find paramter in query string after hash (#)
        if(!scope.spaceId) {
          scope.spaceId = $location.search().spaceId;
        }

        // Find parameter in normal query string
        if(!scope.spaceId) {
          var params = parseQuery(window.location.search);
          scope.spaceId = params.spaceId;
        }

        avSpacesResource.get(scope.spaceId).then(function(response) {
          scope.spaceName = response.data.name;
        });

      }
    };
  });

})(window);

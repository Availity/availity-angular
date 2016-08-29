(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.directive('avSpacesBreadcrumbs', function($location, avSpacesResource, $log) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        'pageName': '@',
        'spaceId': '@?'
      },
      templateUrl: 'ui/breadcrumbs/breadcrumbs-spaces-tpl.html',
      link: function(scope) {

        var spaceId = scope.spaceId;

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
        if(!spaceId) {
          spaceId = $location.search().spaceId;
        }

        // Find parameter in normal query string
        if(!spaceId) {
          var params = parseQuery(window.location.search);
          spaceId = params.spaceId;
        }

        if(spaceId) {
          avSpacesResource.get(spaceId).then(function(response) {
            scope.spaceName = response.data.name;
            scope.spaceId = spaceId;
          });
        } else {
          $log.warn("avSpacesBreadcrumbs could NOT detect a spaceId through scope or by parsing the URL.");
        }

      }
    };
  });

})(window);

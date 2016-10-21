import ngModule from '../module';
import templateUrl from './spaces.html';
import '../../core/api/spaces';

ngModule.directive('avSpacesBreadcrumbs', ($location, avSpacesResource, $log) =>{
  return {
    restrict: 'A',
    replace: true,
    scope: {
      'pageName': '@',
      'spaceId': '@?'
    },
    templateUrl,
    link(scope) {

      let spaceId = scope.spaceId;

      function parseQuery(queryString) {
        const query = {};
        const a = queryString.substr(1).split('&');
        for (let i = 0; i < a.length; i++) {
          const b = a[i].split('=');
          query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
      }

      // Find paramter in query string after hash (#)
      if (!spaceId) {
        spaceId = $location.search().spaceId;
      }

      // Find parameter in normal query string
      if (!spaceId) {
        const params = parseQuery(window.location.search);
        spaceId = params.spaceId;
      }

      if (spaceId) {
        avSpacesResource.get(spaceId).then( response => {
          scope.spaceName = response.data.name;
          scope.spaceId = spaceId;
        });
      } else {
        $log.warn('avSpacesBreadcrumbs could NOT detect a spaceId through scope or by parsing the URL.');
      }

    }
  };
});

export default ngModule;

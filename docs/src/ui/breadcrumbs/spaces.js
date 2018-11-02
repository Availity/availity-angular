import ngModule from '../module';
import templateUrl from './spaces.html';
import '../../core/api/spaces';

ngModule.directive('avSpacesBreadcrumbs', ($location, avSpacesResource, $log) =>{
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      'pageName': '@',
      'useSpaceUrl': '@?',
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

      // Find parameter in query string after hash (#)
      if (!spaceId) {
        spaceId = $location.search().spaceId;
      }

      // Find parameter in normal query string
      if (!spaceId) {
        const params = parseQuery(window.location.search);
        spaceId = params.spaceId;
      }

      if (spaceId) {
        avSpacesResource.get(spaceId).then(response => {
          scope.spaceName = response.data.name;
          scope.spaceId = spaceId;
          scope.spaceUrl = `/public/apps/spaces/#/${spaceId}`;
          if (scope.useSpaceUrl === 'true') {
            const urlFromSpace = response.data.link && response.data.link.url;
            if (!urlFromSpace) {
              $log.warn(`avSpacesBreadcrumbs has useSpaceUrl option set to true but space has no URL. Using "${scope.spaceUrl}" instead`);
            } else {
              scope.spaceUrl = urlFromSpace;
            }
          }
        });
      } else {
        $log.warn('avSpacesBreadcrumbs could NOT detect a spaceId through scope or by parsing the URL.');
      }

    }
  };
});

export default ngModule;

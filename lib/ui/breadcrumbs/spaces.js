'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _spaces = require('./spaces.html');

var _spaces2 = _interopRequireDefault(_spaces);

require('../../core/api/spaces');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avSpacesBreadcrumbs', function ($location, avSpacesResource, $log) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      'pageName': '@',
      'spaceId': '@?'
    },
    templateUrl: _spaces2.default,
    link: function link(scope) {

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
      if (!spaceId) {
        spaceId = $location.search().spaceId;
      }

      // Find parameter in normal query string
      if (!spaceId) {
        var params = parseQuery(window.location.search);
        spaceId = params.spaceId;
      }

      if (spaceId) {
        avSpacesResource.get(spaceId).then(function (response) {
          scope.spaceName = response.data.name;
          scope.spaceId = spaceId;
        });
      } else {
        $log.warn('avSpacesBreadcrumbs could NOT detect a spaceId through scope or by parsing the URL.');
      }
    }
  };
});

exports.default = _module2.default;
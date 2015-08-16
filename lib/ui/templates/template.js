(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.factory('avTemplateCache', function($q, $templateCache, $http) {

    return {

      get: function(options) {

        var valid = !options.template || !options.templateUrl;

        if(!valid) {
          throw new Error('Either options.template or options.templateUrl must be defined for avTemplateCache');
        }

        return options.template ? $q.when(options.template) :
          $http.get(options.templateUrl, {cache: $templateCache})
            .then(function(result) {
              return result.data;
            });
      }
    };
  });

})(window);

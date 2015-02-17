(function(root) {

  'use strict';

  var availity = root.availity;

  var AvDocumentsResourceFactory = function(AvApiResource) {

    var AvDocumentsResource = function() {
      AvApiResource.call(this, 'documents');
    };

    angular.extend(AvDocumentsResource.prototype, AvApiResource.prototype, {

      getContents: function(id) {
        var config = this._config();
        config.url = this.getContentsUrl(id);
        return this._request(config);
      },

      getContentsUrl: function(id) {
        return this._getUrl(id) + '/contents';
      }

    });

    return new AvDocumentsResource();

  };

  availity.core.factory('avDocumentsResource', AvDocumentsResourceFactory);

})(window);

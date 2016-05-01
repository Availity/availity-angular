'use strict';

import angular from 'angular';
import availity from '../module';

const AvDocumentsResourceFactory = function(AvApiResource) {

  const AvDocumentsResource = function() {
    AvApiResource.call(this, 'documents');
  };

  angular.extend(AvDocumentsResource.prototype, AvApiResource.prototype, {

    getContents: function(id) {
      const config = this._config();
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


/*global module*/

(function(root) {

  'use strict';

  var availity = root.availity || {};
  availity.VERSION = 'v0.0.0';
  availity.MODULE = 'availity';
  availity.core = angular.module(availity.MODULE, ['ng']);

  var originalModule = angular.module;
  var modules = [];

  angular.module = function(name, deps) {

    if(deps && _.indexOf(modules, name) !== -1 && !window.__karma__) {
      throw new Error('redefining module: ' + name);
    }

    modules.push(name);

    return originalModule(name, deps);
  };

  root.availity = availity;

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = availity;
  }

})(window);


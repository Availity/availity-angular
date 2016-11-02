'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./service');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('avBlockManager', function ($injector) {
  var AvBlockManager = function () {
    function AvBlockManager() {
      _classCallCheck(this, AvBlockManager);

      this.instances = [];
    }

    AvBlockManager.prototype.get = function get(id) {

      // if (!this.main) {
      //   mainBlock.addRef();
      //   this.main = null;
      // }

      if (!isNaN(id)) {
        throw new Error('AvBlock id cannot be a number');
      }

      var instance = this.instances[id];

      if (!instance) {
        var AvBlock = $injector.get('AvBlock');
        instance = this.instances[id] = new AvBlock(id);
        this.instances.push(instance);
      }

      return instance;
    };

    AvBlockManager.prototype.destroy = function destroy(idOrInstance) {

      if (_angular2.default.isString(idOrInstance)) {
        idOrInstance = this.instances[idOrInstance];
      }

      if (idOrInstance) {
        idOrInstance.reset();

        var i = (0, _utils.indexOf)(this.instances, idOrInstance);
        this.instances.splice(i, 1);

        delete this.instances[idOrInstance.state().id];
      }
    };

    AvBlockManager.prototype.reset = function reset() {
      this.instances.forEach(function (instance) {
        return instance.reset();
      });
    };

    AvBlockManager.prototype.locate = function locate(request) {

      var result = [];

      // Add function wrappers that will be executed on every item
      // in the array.

      (0, _utils.forEachFnHook)(result, 'start');
      (0, _utils.forEachFnHook)(result, 'stop');

      var i = this.instances.length;

      while (i--) {
        var instance = this.instances[i];
        var pattern = instance._pattern;

        if (pattern && pattern.test(request.url)) {
          result.push(instance);
        }
      }

      if (result.length === 0) {
        result.push(this.mainBlock);
      }

      return result;
    };

    return AvBlockManager;
  }();

  return new AvBlockManager();
});
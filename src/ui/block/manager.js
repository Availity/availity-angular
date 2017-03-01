import angular from 'angular';

import ngModule from '../module';
import './service';
import { indexOf, forEachFnHook } from './utils';

ngModule.factory('avBlockManager', $injector => {

  class AvBlockManager {

    constructor() {
      this.instances = [];
    }

    get(id) {

      // if (!this.main) {
      //   mainBlock.addRef();
      //   this.main = null;
      // }

      if (!isNaN(id)) {
        throw new Error('AvBlock id cannot be a number');
      }

      let instance = this.instances[id];

      if (!instance) {
        const AvBlock = $injector.get('AvBlock');
        instance = this.instances[id] = new AvBlock(id);
        this.instances.push(instance);
      }

      return instance;

    }

    destroy(idOrInstance) {

      if (angular.isString(idOrInstance)) {
        idOrInstance = this.instances[idOrInstance];
      }

      if (idOrInstance) {
        idOrInstance.reset();

        const i = indexOf(this.instances, idOrInstance);
        this.instances.splice(i, 1);

        delete this.instances[idOrInstance.state().id];
      }
    }

    reset() {
      this.instances.forEach(instance => instance.reset());
    }

    locate(request) {

      const result = [];

      // Add function wrappers that will be executed on every item
      // in the array.

      forEachFnHook(result, 'start');
      forEachFnHook(result, 'stop');

      let i = this.instances.length;

      while (i--) {
        const instance = this.instances[i];
        const pattern = instance._pattern;

        if (pattern && pattern.test(request.url)) {
          result.push(instance);
        }
      }

      if (result.length === 0) {
        result.push(this.mainBlock);
      }

      return result;
    }


  }


  return new AvBlockManager();

});

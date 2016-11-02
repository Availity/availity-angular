import ngModule from '../module';

const ProxyResourceFactory = function(AvApiResource) {

  class ProxyResource extends AvApiResource {

    constructor(options) {

      if (!options && !options.tenant) {
        throw Error('Must specify tenant name for ProxyResource');
      }

      // /v1/proxy/{tenant}/{name}
      super({
        path: `v1/proxy/${options.tenant}`,
        version: '',
        name: options.name
      });
    }

  }

  return ProxyResource;

};

ngModule.service('AvProxyResource', ProxyResourceFactory);

export default ngModule;


import ngModule from '../ngModule';

ngModule.factory('blockHttpInterceptor', ($q, $injector, avBlockConfig, $templateCache, $log) => {

  class BlockHttpInterceptor {

    constructor() {
      this.avBlockManager = null;
    }

    injectBlock() {
      this.avBlockManager = this.avBlockManager || $injector.get('avBlockManager');
    }

    stopBlock(config) {
      if (avBlockConfig.autoBlock && (config && !config.$_noBlock && config.$_blocks)) {
        this.injectBlock();
        config.$_blocks.stop();
      }
    }

    requestError(rejection) {

      try {
        this.stopBlock(rejection.config);
      } catch (ex) {
        $log.error('httpRequestError', ex);
      }

      return $q.reject(rejection);
    }

    request(config) {

      // Only block when autoBlock is enabled ...
      // ... and the request doesn't match a cached template.

      if (avBlockConfig.autoBlock
          && !(config.method === 'GET'
          && $templateCache.get(config.url))) {

        // Don't block excluded requests

        const result = avBlockConfig.requestFilter(config);

        if (result === false) {
          // Tag the config so we don't unblock this request
          config.$_noBlock = true;
        } else {

          this.injectBlock();

          config.$_blocks = this.avBlockManager.locate(config);
          config.$_blocks.start(result);
        }
      }

      return config;

    }

    requestError(...args) {
      this.error(...args);
    }

    response(response) {

      // If the connection to the website goes down the response interceptor gets and error with 'cannot read property config of null'.
      // https://github.com/McNull/angular-block-ui/issues/53

      if (response) {
        this.stopBlock(response.config);
      }

      return response;
    }

    responseError(...args) {
      this.error(...args);
    }

  }

  return new BlockHttpInterceptor();

});


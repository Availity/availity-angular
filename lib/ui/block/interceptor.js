'use strict';

var _ngModule = require('../ngModule');

var _ngModule2 = _interopRequireDefault(_ngModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_ngModule2.default.factory('blockHttpInterceptor', function ($q, $injector, avBlockConfig, $templateCache, $log) {
  var BlockHttpInterceptor = function () {
    function BlockHttpInterceptor() {
      _classCallCheck(this, BlockHttpInterceptor);

      this.avBlockManager = null;
    }

    BlockHttpInterceptor.prototype.injectBlock = function injectBlock() {
      this.avBlockManager = this.avBlockManager || $injector.get('avBlockManager');
    };

    BlockHttpInterceptor.prototype.stopBlock = function stopBlock(config) {
      if (avBlockConfig.autoBlock && config && !config.$_noBlock && config.$_blocks) {
        this.injectBlock();
        config.$_blocks.stop();
      }
    };

    BlockHttpInterceptor.prototype.requestError = function requestError(rejection) {

      try {
        this.stopBlock(rejection.config);
      } catch (ex) {
        $log.error('httpRequestError', ex);
      }

      return $q.reject(rejection);
    };

    BlockHttpInterceptor.prototype.request = function request(config) {

      // Only block when autoBlock is enabled ...
      // ... and the request doesn't match a cached template.

      if (avBlockConfig.autoBlock && !(config.method === 'GET' && $templateCache.get(config.url))) {

        // Don't block excluded requests

        var result = avBlockConfig.requestFilter(config);

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
    };

    BlockHttpInterceptor.prototype.requestError = function requestError() {
      this.error.apply(this, arguments);
    };

    BlockHttpInterceptor.prototype.response = function response(_response) {

      // If the connection to the website goes down the response interceptor gets and error with 'cannot read property config of null'.
      // https://github.com/McNull/angular-block-ui/issues/53

      if (_response) {
        this.stopBlock(_response.config);
      }

      return _response;
    };

    BlockHttpInterceptor.prototype.responseError = function responseError() {
      this.error.apply(this, arguments);
    };

    return BlockHttpInterceptor;
  }();

  return new BlockHttpInterceptor();
});
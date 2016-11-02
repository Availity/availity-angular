'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.config(function ($provide, $httpProvider, $log) {

  $provide.decorator('$exceptionHandler', function ($delegate, $injector) {

    var avBlockManager = void 0;
    var avBlockConfig = void 0;

    return function (exception, cause) {

      avBlockConfig = avBlockConfig || $injector.get('avBlockConfig');

      if (avBlockConfig.resetOnException) {
        try {
          avBlockManager = avBlockManager || $injector.get('avBlockManager');
          avBlockManager.reset();
        } catch (ex) {
          $log.log('$exceptionHandler', exception);
        }
      }

      $delegate(exception, cause);
    };
  });

  $httpProvider.interceptors.push('blockHttpInterceptor');
});
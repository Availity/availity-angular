import ngModule from '../module';
import './config';

ngModule.config( ($provide, $httpProvider, $log) => {

  $provide.decorator('$exceptionHandler', ($delegate, $injector) => {

    let avBlockManager;
    let avBlockConfig;

    return (exception, cause) => {

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

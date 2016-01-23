import availity from '../module';

availity.core.constant('AV_API', {
  HEADERS: {
    SERVER: {
      ID: 'X-API-ID',
      LOCATION: 'Location',
      STATUS: 'X-Status-Message',
      GLOBAL_ID: 'X-Global-Transaction-ID'
    },
    CLIENT: {
      SESSION_ID: 'X-Session-ID',
      AUTH: 'Authorization',
      OVERRIDE: 'X-HTTP-Method-Override',
      CALLBACK_URL: 'X-Callback-URL',
      CUSTOMER_ID: 'X-Availity-Customer-ID'
    }
  }
});

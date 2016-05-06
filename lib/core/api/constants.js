import ngModule from '../module';

ngModule.constant('AV_API', {
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
      CUSTOMER_ID: 'X-Availity-Customer-ID',
      RESPONSE_ENCODING: 'X-Response-Encoding-Context'
    }
  },
  OPTIONS: {

    // default base segment for Availity API endpoints
    path: '/api',

    // full url to api resource
    url: null,

    // name of resource
    name: null,

    // defaults version for api
    version: '/v1',

    // cache all request by default
    cache: true,

    // flag used to enable behaviors around the Availity Rest API
    api: true,

    // in ms
    pollingInterval: 1000,

    // % the polling interval decays after every retry
    pollingDecay: 1.2,

    // maximum time polling is allowed before rejecting the request
    pollingMaxInterval: 30000,

    // default headers
    headers: {
      // Turn off content encoding for angular apis
      'X-Response-Encoding-Context': 'NONE'
    }
  }
});

export default ngModule;

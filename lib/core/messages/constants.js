import ngModule from '../module';

ngModule.constant('AV_MESSAGES', {

  EVENTS: {

    MESSAGE: 'message', // post message window event
    RESIZE: 'resize', // window resize event

    AV_LOGIN: 'av:login',
    AV_LOGOUT: 'av:logout',
    AV_SESSION_TIMEOUT: 'av:session:timeout'

  },

  RESIZE_DEBOUNCE: 400,

  DOMAIN: /https?:\/\/([\w\d\-]+\.)?availity\.(com|net)/,
  LOCAL: /http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)/

});



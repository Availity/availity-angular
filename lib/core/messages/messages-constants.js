(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_MESSAGES', {

    EVENTS: {

      MESSAGE: 'message', // post message window event
      RESIZE: 'resize', // window resize event
      UNLOAD: 'beforeunload',

      AV_RESIZE: 'av:window:resize',
      AV_RECEIVED: 'av:message:received',
      AV_MAXIMIZE: 'nav:left:hide',  // @deprecated,
      AV_MINIMIZE: 'nav:left:hide',  // @deprecated
      // MAXIMIZE: 'av:window:maximize',
      // MINIMIZE: 'av:window:minimize',
      AV_LOGIN: 'av:login',
      AV_LOGOUT: 'av:logout',
      AV_SESSION_TIMEOUT: 'av:session:timeout'

    },

    RESIZE_DEBOUNCE: 400,

    DOMAIN: /https?:\/\/([\w\d\-]+\.)?availity\.(com|net)/,
    LOCAL: /http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)/

  });

})(window);

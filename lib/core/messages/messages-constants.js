(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_MESSAGES', {
    EVENTS: {
      MESSAGE: 'message',
      RESIZE: 'av:window:resize',
      RECEIVED: 'av:message:received',
      MAXIMIZE: 'nav:left:hide',  // @deprecated,
      MINIMIZE: 'nav:left:hide',  // @deprecated
      // MAXIMIZE: 'av:window:maximize',
      // MINIMIZE: 'av:window:minimize',
      LOGIN: 'av:login',
      LOGOUT: 'av:logout',
      SESSION_TIMEOUT: 'av:session:timeout'
    },
    DOMAIN: /https?:\/\/([\w\d\-]+\.)?availity\.(com|net)/,
    LOCAL: /http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)/,
    WHITELIST: []
  });

})(window);

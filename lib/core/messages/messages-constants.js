(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_MESSAGES', {
    EVENTS: {
      MESSAGE: 'message',
      RESIZE: 'av:window:resize',
      RECEIVED: 'av:message:received',
      _MAXIMIZE: 'nav:left:hide',  // @deprecated,
      _MINIMIZE: 'nav:left:hide',  // @deprecated
      MAXIMIZE: 'av:window:maximize',
      MINIMIZE: 'av:window:minimize',
      LOGIN: 'av:login',
      LOGOUT: 'av:logout',
      SESSION_TIMEOUT: 'av:session:timeout'
    },
    DOMAIN: /^http:\/\/[^.\s]+\.availity\.com.*$/gi
  });

})(window);

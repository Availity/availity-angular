'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_MESSAGES', {

  EVENTS: {

    MESSAGE: 'message', // post message window event
    RESIZE: 'resize.av.message',
    UNLOAD: 'unload.av.message'

  },

  RESIZE_DEBOUNCE: 400,

  DOMAIN: /https?:\/\/([\w\d\-]+\.)?availity\.(com|net)/,
  LOCAL: /http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)/

});
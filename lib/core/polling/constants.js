'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_POLLING', {
  INTERVAL: 1000, // delay in ms before retrying an async request
  MAX_ELAPSED_TIME: 5000, // max time in ms before polling stops and rejects original request
  MAX_RETRY: 30, // # of times the request will be tried
  DECAY: 1.2, // % the polling interval decays after every retry
  // maximum time polling is allowed before rejecting the request
  EVENTS: {
    MAX_RETRY: 'av:polling:max:retry'
  },
  REGEX_URL: /^.*?api.availity.com(.*)$/ // capture the relative url from API
});

exports.default = _module2.default;
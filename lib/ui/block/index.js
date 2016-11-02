'use strict';

require('./block.less');

require('./directive');

require('./manager');

require('./container');

require('./service');

require('./constants');

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.run(function ($document, avBlockConfig, $templateCache) {

  if (avBlockConfig.autoInjectBodyBlock) {
    $document.find('body').attr('av-block', 'main');
  }

  if (avBlockConfig.template) {

    // Swap the builtin template with the custom template.
    // Create a magic cache key and place the template in the cache.

    avBlockConfig.templateUrl = '$$av-block-template$$';
    $templateCache.put(avBlockConfig.templateUrl, avBlockConfig.template);
  }
});
// import './integration';
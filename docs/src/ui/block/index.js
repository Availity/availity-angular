import './block.less';
import './directive';
// import './integration';
import './manager';
import './container';
import './service';
import './constants';

import ngModule from '../module';

ngModule.run( ($document, avBlockConfig, $templateCache) => {

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


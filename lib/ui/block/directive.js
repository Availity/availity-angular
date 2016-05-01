'use strict';

import availity from '../module';

// Helper directive that hooks into block-ui's start-up lifecycle and starts the loader
availity.ui.directive('avBlockUi', function(blockUI) {

  return {
    restrict: 'A',
    link($scope, $element, $attrs) {

      const blockId = $attrs.avBlockUi;
      const blockCount = $attrs.blockCount;
      const instance = blockUI.instances.get(blockId);
      if (blockCount > 0) {
        instance.startLoader();
      }

    }
  };

});



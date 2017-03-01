import ngModule from '../module';

import avDimmerController from './controller';

ngModule.directive('avDimmer', () => {
  return {
    restrict: 'AE',
    scope: {
      avDimmerConfig: '<?'
    },
    controller: avDimmerController
  };
});

export default ngModule;

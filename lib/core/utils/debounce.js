import _ from 'lodash';

import availity from '../module';

// Original => https://github.com/mgcrea/angular-strap/blob/master/src/helpers/debounce.js
availity.core.factory('avDebounce', function($timeout) {

  return function(fn, wait, options) {

    let timeout = null;
    options = _.merge({}, {immeditate: false, update: false}, options);

    return function() {

      const context = options.context || this;
      const args = arguments;

      const later = function() {
        timeout = null;
        if (!options.immediate) {
          fn.apply(context, args);
        }
      };

      const callNow = options.immediate && !timeout;
      if (timeout) {
        $timeout.cancel(timeout);
      }
      timeout = $timeout(later, wait, options.update);

      if (callNow) {
        fn.apply(context, args);
      }
    };
  };
});


import angular from 'angular';
import _ from 'lodash';

import availity from '../module';

availity.core.constant('AV_THROTTLE', {
  OPTIONS: {
    wait: 1000,
    update: false,
    trailing: true,
    leading: false
  }
});

// Original => https://github.com/mgcrea/angular-strap/blob/master/src/helpers/debounce.js
availity.core.factory('avThrottle', function(AV_THROTTLE, $timeout) {

  return function(fn, _wait, _options) {

    let options = _options;

    options = _.merge({}, AV_THROTTLE.OPTIONS, options);

    const wait = _wait ? _wait : AV_THROTTLE.THRESHOLD;
    const update = angular.isDefined(options.update) ? options.update : AV_THROTTLE.UPDATE;
    let timer = null;

    return function() {
      const context = options.context || this;
      const args = arguments;

      if (!timer) {
        if (options.leading !== false) {
          fn.apply(context, args);
        }

        const later = function() {
          timer = null;
          if (options.trailing !== false) {
            fn.apply(context, args);
          }
        };

        timer = $timeout(later, wait, update);
      }

      return timer;

    };
  };
});



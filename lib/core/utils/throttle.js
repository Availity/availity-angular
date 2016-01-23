
'use strict';

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

    var options = _options;

    options = _.merge({}, AV_THROTTLE.OPTIONS, options);

    var wait = _wait ? _wait : AV_THROTTLE.THRESHOLD;
    var update = angular.isDefined(options.update) ? options.update : AV_THROTTLE.UPDATE;
    var timer = null;

    return function() {
      var context = options.context || this;
      var args = arguments;

      if (!timer) {
        if (options.leading !== false) {
          fn.apply(context, args);
        }

        var later = function() {
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



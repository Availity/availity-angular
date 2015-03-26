// Original => https://gist.github.com/dorthrithil/8a731266f1fc92dda65a

(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_THROTTLE', {
    THRESHOLD: 250,
    UPDATE: false
  });

  availity.core.factory('avThrottle', function(AV_THROTTLE, $timeout) {

    return function(fn, threshold, context, update) {

      threshold = threshold ? threshold : AV_THROTTLE.THRESHOLD;
      update = angular.isDefined(update) ? update : AV_THROTTLE.UPDATE;

      var last;
      var timer;

      return function () {

        var _context = context || this;
        var now = new Date().getTime();
        var args = arguments;

        if(last && now < last + threshold) {
          $timeout.cancel(timer);
          timer = $timeout(function () {
            last = now;
            fn.apply(_context, args);
          }, threshold, update);

          return;
        }

        last = now;
        fn.apply(context, args);
      };
    };
  });

})(window);

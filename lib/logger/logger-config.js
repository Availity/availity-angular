(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.config(function($provide) {

    $provide.decorator('$log', function($delegate, AvLogger) {
      return new AvLogger(null, $delegate);
    });

  });

  })(window);

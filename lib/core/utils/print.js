(function(root) {

  'use strict';

  var availity = root.availity;

  // https://github.com/jasonday/printThis/commit/66f9cbd0e3760767342eed4ef32cf8294417b227
  availity.print = function() {

    if(document.queryCommandSupported('print')) {
      document.execCommand('print', false, null);
    } else {
      window.focus();
      window.print();
    }
  };

})(window);

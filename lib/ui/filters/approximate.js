(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.filter('avApproximate', function() {
    var pow = Math.pow;
    var floor = Math.floor;
    var abs = Math.abs;
    var log = Math.log;

    function round(number, precision) {
      var prec = pow(10, precision);
      return Math.round(number * prec) / prec;
    }

    return function (number, precision) {
      precision = precision || 0;
      var base = floor(log(abs(number)) / log(1000));
      var unit = 'kMGTPE'[base - 1];
      return unit ? round(number / pow(1000, base), precision) + unit : (number || 0);
    };
  });

})(window);

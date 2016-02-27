import availity from '../module';

availity.ui.filter('avApproximate', function() {

  const pow = Math.pow;
  const floor = Math.floor;
  const abs = Math.abs;
  const log = Math.log;

  function round(number, precision) {

    const prec = pow(10, precision);
    return Math.round(number * prec) / prec;

  }

  return function(number, _precision) {

    const precision = _precision || 0;
    const base = floor(log(abs(number)) / log(1000));
    const unit = 'kMGTPE'[base - 1];
    return unit ? round(number / pow(1000, base), precision) + unit : (number || 0);

  };

});



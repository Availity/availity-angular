// https://github.com/jasonday/printThis/commit/66f9cbd0e3760767342eed4ef32cf8294417b227

// https://github.com/jasonday/printThis/commit/66f9cbd0e3760767342eed4ef32cf8294417b227

import availity from '../module';

availity.print = function() {

  if (document.queryCommandSupported('print')) {
    document.execCommand('print', false, null);
  } else {
    window.focus();
    window.print();
  }

};
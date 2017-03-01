// https://github.com/jasonday/printThis/commit/66f9cbd0e3760767342eed4ef32cf8294417b227

export default function print() {

  if (document.queryCommandSupported('print')) {
    document.execCommand('print', false, null);
  } else {
    window.focus();
    window.print();
  }

}

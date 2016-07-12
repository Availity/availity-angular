// https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/helper/makeString.js
export function stringify(object) {
  if (object === null) {
    return '';
  }
  return `${object}`;
}

// https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/isBlank.js
export function isBlank(str) {
  return (/^\s*$/).test(stringify(str));
}



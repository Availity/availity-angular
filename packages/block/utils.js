import angular from 'angular';

export function buildRegExp(pattern) {

  const match = pattern.match(/^\/(.*)\/([gim]*)$/);
  let regExp;

  if (match) {
    regExp = new RegExp(match[1], match[2]);
  } else {
    throw Error(`Incorrect regular expression format: ${pattern}`);
  }

  return regExp;

}

export function forEachFn(arr, fnName, args) {
  let i = arr.length;
  while (i--) {
    const t = arr[i];
    t[fnName](...args);
  }
}

export function forEachFnHook(arr, fnName) {
  arr[fnName] = function() {
    forEachFn(this, fnName, arguments);
  };
}

export function isElementInBlockScope($element, blockScope) {

  let c = $element.inheritedData('av-block');

  while (c) {
    if (c === blockScope) {
      return true;
    }

    c = c._parent;
  }

  return false;
}

export function findElement($element, predicateFn, traverse) {
  let ret = null;

  if (predicateFn($element)) {
    ret = $element;
  } else {

    let $elements;

    if (traverse) {
      $elements = $element.parent();
    } else {
      $elements = $element.children();
    }

    let i = $elements.length;
    while (!ret && i--) {
      ret = findElement(angular.element($elements[i]), predicateFn, traverse);
    }
  }

  return ret;
}

export function indexOf(arr, obj, start) {

  for (let i = (start || 0), j = arr.length; i < j; i++) {
    if (arr[i] === obj) {
      return i;
    }
  }

  return -1;
}

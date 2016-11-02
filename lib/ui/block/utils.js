'use strict';

exports.__esModule = true;
exports.buildRegExp = buildRegExp;
exports.forEachFn = forEachFn;
exports.forEachFnHook = forEachFnHook;
exports.isElementInBlockScope = isElementInBlockScope;
exports.findElement = findElement;
exports.indexOf = indexOf;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildRegExp(pattern) {

  var match = pattern.match(/^\/(.*)\/([gim]*)$/);
  var regExp = void 0;

  if (match) {
    regExp = new RegExp(match[1], match[2]);
  } else {
    throw Error('Incorrect regular expression format: ' + pattern);
  }

  return regExp;
}

function forEachFn(arr, fnName, args) {
  var i = arr.length;
  while (i--) {
    var t = arr[i];
    t[fnName].apply(t, args);
  }
}

function forEachFnHook(arr, fnName) {
  arr[fnName] = function () {
    forEachFn(this, fnName, arguments);
  };
}

function isElementInBlockScope($element, blockScope) {

  var c = $element.inheritedData('av-block');

  while (c) {
    if (c === blockScope) {
      return true;
    }

    c = c._parent;
  }

  return false;
}

function findElement($element, predicateFn, traverse) {
  var ret = null;

  if (predicateFn($element)) {
    ret = $element;
  } else {

    var $elements = void 0;

    if (traverse) {
      $elements = $element.parent();
    } else {
      $elements = $element.children();
    }

    var i = $elements.length;
    while (!ret && i--) {
      ret = findElement(_angular2.default.element($elements[i]), predicateFn, traverse);
    }
  }

  return ret;
}

function indexOf(arr, obj, start) {

  for (var i = start || 0, j = arr.length; i < j; i++) {
    if (arr[i] === obj) {
      return i;
    }
  }

  return -1;
}
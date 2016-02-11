/**
 * TODO: Remove polyfill when angular dependency contains merge function
 * Merge polyfill for angular < v1.4.0
 * Taken directly from angular v1.5.0 source beginning on line 314: https://github.com/angular/angular.js/blob/master/src/Angular.js#L314
 * Lines 314-360, 385-405, 608-617
 */

// jshint ignore: start
// jscs:disable
(function() {
  if (angular.merge) {
    return;
  }

  var isObject = angular.isObject,
      isFunction = angular.isFunction,
      isDate = angular.isDate,
      isElement = angular.isElement,
      isArray = angular.isArray,
      slice = [].slice;

  angular.merge = (function() {
    /**
     * Set or clear the hashkey for an object.
     * @param obj object
     * @param h the hashkey (!truthy to delete the hashkey)
     */
    function setHashKey(obj, h) {
      if (h) {
        obj.$$hashKey = h;
      } else {
        delete obj.$$hashKey;
      }
    }


    function baseExtend(dst, objs, deep) {
      var h = dst.$$hashKey;

      for (var i = 0, ii = objs.length; i < ii; ++i) {
        var obj = objs[i];
        if (!isObject(obj) && !isFunction(obj)) continue;
        var keys = Object.keys(obj);
        for (var j = 0, jj = keys.length; j < jj; j++) {
          var key = keys[j];
          var src = obj[key];

          if (deep && isObject(src)) {
            if (isDate(src)) {
              dst[key] = new Date(src.valueOf());
            } else if (isRegExp(src)) {
              dst[key] = new RegExp(src);
            } else if (src.nodeName) {
              dst[key] = src.cloneNode(true);
            } else if (isElement(src)) {
              dst[key] = src.clone();
            } else {
              if (!isObject(dst[key])) dst[key] = isArray(src) ? [] : {};
              baseExtend(dst[key], [src], true);
            }
          } else {
            dst[key] = src;
          }
        }
      }

      setHashKey(dst, h);
      return dst;
    }

    /**
    * @ngdoc function
    * @name angular.merge
    * @module ng
    * @kind function
    *
    * @description
    * Deeply extends the destination object `dst` by copying own enumerable properties from the `src` object(s)
    * to `dst`. You can specify multiple `src` objects. If you want to preserve original objects, you can do so
    * by passing an empty object as the target: `var object = angular.merge({}, object1, object2)`.
    *
    * Unlike {@link angular.extend extend()}, `merge()` recursively descends into object properties of source
    * objects, performing a deep copy.
    *
    * @param {Object} dst Destination object.
    * @param {...Object} src Source object(s).
    * @returns {Object} Reference to `dst`.
    */
    function merge(dst) {
      return baseExtend(dst, slice.call(arguments, 1), true);
    }

    /**
     * Determines if a value is a regular expression object.
     *
     * @private
     * @param {*} value Reference to check.
     * @returns {boolean} True if `value` is a `RegExp`.
     */
    function isRegExp(value) {
      return toString.call(value) === '[object RegExp]';
    }

    return merge;
  })();
})();

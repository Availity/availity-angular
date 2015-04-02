(function(root) {
  'use strict';

  var availity = root.availity;

  // local variables
  var $q;

  /**
   * Convert all keys to strings to avoid unexpected
   * @param key
   * @returns {string}
   */
  function normalizeKey(key) {
    return '' + key;
  }

  /**
   * CacheItem is wrapper around permission with promise
   * @constructor
   */
  function CacheItem() {
    this.value = null;
    this.loading = null;
    this.error = null;
    this.promises = [];
  }

  CacheItem.prototype.invalidate = function() {
    this.value = null;
    this.loading = null;
    this.error = null;
    this.resolveAll();
  };

  CacheItem.prototype.onSuccess = function(value) {
    this.value = value;
    this.loading = false;
    this.error = false;
    this.resolveAll();
  };

  CacheItem.prototype.onError = function() {
    this.value = null;
    this.loading = false;
    this.error = true;
    this.resolveAll();
  };


  CacheItem.prototype.shouldLoad = function() {
    var shouldLoad = (this.loading === null);
    if(shouldLoad) {
      this.loading = true;
    }
    return shouldLoad;
  };

  CacheItem.prototype.promise = function() {
    var deferred = $q.defer();
    if(this.loading === false) {
      this.resolve(deferred);
    } else {
      this.promises.push(deferred);
    }
    return deferred.promise;
  };

  CacheItem.prototype.resolve = function(deferred) {
    if(this.error === true) {
      deferred.reject(this.value);
    } else {
      deferred.resolve(this.value);
    }
  };

  CacheItem.prototype.resolveAll = function() {
    var self = this;
    // resolve and clear all promises
    while(this.promises.length > 0) {
      var deferred = this.promises.pop();
      self.resolve(deferred);
    }
  };

  /**
   * AvCache is instance of cacc.  This service designed implement cache simliar to java
   * guava caches
   *
   * @constructor
   **/
  function AvCache(cacheName) {
    this.cacheName = cacheName;
    this.cacheItems = {};
  }

  /**
   * Return size of number of keys in cache
   * @returns int
   */
  AvCache.prototype.size = function() {
    return _.size(this.cacheItems);
  };

  /**
   * Get value from cache returning promise for value.
   * @param key  - key
   * @param valueLoader - value
   * @returns promise
   */
  AvCache.prototype.get = function(key, valueLoader) {
    var self = this;
    var cacheItem = self._getCacheItem(key);
    if(angular.isFunction(valueLoader)) {
      // if passed in value loader and should load call loader
      if(cacheItem.shouldLoad()) {
        var success = function(value) {
          cacheItem.onSuccess(value);
        };
        var error = function() {
          cacheItem.onError();
        };
        valueLoader(key).then(success, error);
      }
    }
    return cacheItem.promise();
  };

  /**
   * Return the value if exists, does not return promise.
   * @param key
   * @returns {*}
   */
  AvCache.prototype.getIfPresent = function(key) {
    key = normalizeKey(key);
    var cacheItem = this.cacheItems[key];
    var value = null;
    if(cacheItem) {
      value = cacheItem.value;
    }
    return value;
  };

  /**
   * Put a value in cache
   * @param key
   * @param value
   */
  AvCache.prototype.put = function(key, value) {
    var cacheItem = this._getCacheItem(key);
    cacheItem.onSuccess(value);
  };

  /**
   * Invalidate cache item so will be reloaded
   * @param key
   */
  AvCache.prototype.invalidate = function(key) {
    key = normalizeKey(key);
    var cacheItem = this.cacheItems[key];
    if(cacheItem) {
      cacheItem.invalidate();
    }
  };

  /**
   * Internal function to get internal cache item value
   * @param key
   * @returns {*}
   * @private
   */
  AvCache.prototype._getCacheItem = function(key) {
    key = normalizeKey(key);
    var cacheItem = this.cacheItems[key];
    if(!cacheItem) {
      cacheItem = new CacheItem();
      this.cacheItems[key] = cacheItem;
    }
    return cacheItem;
  };

  /**
   * AvCacheService is singleton instance of that manages all caches
   *
   * @constructor
   */
  function AvCacheService() {
    this.caches = {};
  }

  /**
   *
   * @param cacheName
   */
  AvCacheService.prototype.getCache = function(cacheName) {
    cacheName = normalizeKey(cacheName);
    var cache = this.caches[cacheName];
    if(!cache) {
      cache = new AvCache(cacheName);
      this.caches[cacheName] = cache;
    }
    return cache;
  };

  availity.core.factory('avCache', function($injector) {
    $q = $injector.get('$q');
    return new AvCacheService();
  });
})(window);

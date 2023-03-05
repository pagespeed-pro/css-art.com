/**
 * Cache API key/value store - github.com/optimalisatie/Cache-API-Key-Value-Store
 * Released under the terms of MIT license
 *
 * Smaller version
 * 
 * - no fallback mechanism
 * - no error messages
 * +
 * - no expire 
 *
 * Copyright (C) 2018 github.com/optimalisatie
 */

(function(factory) {

    var _root = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);

    // detect Cache API support
    if (!("caches" in _root) || !(caches instanceof CacheStorage)) {
        return;
    } else {

        // enable instant usage of Cache API store
        _root.CacheApiDB = factory();

    }
})(function() {

    var CONTENT_TYPE_HEADER = 'Content-Type';

    // open cache storage
    function CACHE_OPEN(store, callback) {
        return caches.open(store).then(callback);
    }

    // return cache key
    function CACHE_KEY(key) {
        return new Request(STRING(key || ''));
    }

    // get key from cache
    function CACHE_GET(store, key) {
        return CACHE_OPEN(store, function(cache) {

            if (IS_UNDEFINED(key)) {
                ERROR();
            }

            var cache_key = CACHE_KEY(key);

            return cache.match(cache_key).then(function(cachedata) {

                // handle expiration
                if (!cachedata) {
                    return false;
                }

                return cachedata.json();
            });

        });
    }

    // set key in cache
    function CACHE_SET(store, key, data) {
        return CACHE_OPEN(store, function(cache) {

            if (IS_UNDEFINED(key) || IS_UNDEFINED(data)) {
                ERROR();
            }

            var cache_key = CACHE_KEY(key);

            var cache_headers = {};

            // JSON
            cache_headers[CONTENT_TYPE_HEADER] = 'application/json';
            data = JSON.stringify(data);

            var cache_data = new Response(data, {
                headers: cache_headers
            });

            return cache.put(cache_key, cache_data);

        });
    }

    // set key in cache
    function CACHE_DELETE(store, key, cache_key) {
        return CACHE_OPEN(store, function(cache) {

            if (IS_UNDEFINED(key)) {
                ERROR();
            }

            key = (cache_key) ? key : CACHE_KEY(key);
            return cache.delete(key);
        });
    }

    // cache api constructor
    function CACHE(store, options) {
        var that = this;
        if (that instanceof CACHE) {
            that.store = store;

            if (IS_OBJECT(options)) {
                if (options.namespace) {
                    that.ns = options.namespace;
                }
            }
        } else {

            // instantiate
            return new CACHE(store, options);
        }
    }

    // return namespaced key
    function NAMESPACE(ns, key) {
        return ((ns) ? ns + ':' : '') + key;
    }

    // return string
    function STRING(str) {
        return str.toString();
    }

    // return INTEGER
    function INT(num) {
        return parseInt(num);
    }

    // type check
    function IS(obj, type) {
        return typeof obj === type;
    }

    // detect if object
    function IS_OBJECT(obj) {
        return IS(obj, 'object');
    }

    // detect if undefined
    function IS_UNDEFINED(obj) {
        return IS(obj, 'undefined');
    }

    // output error
    function ERROR() {
        throw Error();
    }

    // public get method
    CACHE.prototype.get = function(key) {
        return CACHE_GET(this.store, NAMESPACE(this.ns, key));
    }

    // public set method
    CACHE.prototype.set = function(key, value) {
        return CACHE_SET(this.store, NAMESPACE(this.ns, key), value);
    }

    // public delete method
    CACHE.prototype.del = function(key) {
        return CACHE_DELETE(this.store, NAMESPACE(this.ns, key));
    }

    // cache api constructor
    return CACHE;

});
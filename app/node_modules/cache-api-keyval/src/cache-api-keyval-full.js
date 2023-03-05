/**
 * Cache API key/value store - github.com/optimalisatie/Cache-API-Key-Value-Store
 * Released under the terms of MIT license
 *
 * Copyright (C) 2018 github.com/optimalisatie
 */

(function(factory) {

    var _root = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);

    function print_error(msg) {
        if (console) {
            console.error(msg);
        }
    }

    var queue = [];
    _root.onCacheApiDB = function(callback) {
        if (_root.CacheApiDB) {
            callback();
        } else {
            queue.push(callback);
        }
    }

    // set cache api db controller
    function setCacheApiDB(fallbackFactory) {

        // set fallback
        if (fallbackFactory) {
            _root.CacheApiDB = fallbackFactory;
        }

        // process callback queue
        var callback = queue.shift();
        while (callback) {
            callback();
        }
    }

    var nosupport_error = 'No Cache API';

    if (!_root.CacheApiDBFallback) {
        _root.CacheApiDBFallback = function() {
            var that = this;
            that.no = 1;
            ['get', 'set', 'del', 'prune'].forEach(function(method) {
                that[method] = function() {
                    return Promise.reject(nosupport_error);
                }
            });
        }
    }

    // detect Cache API support
    if (!("caches" in _root) || !(caches instanceof CacheStorage)) {
        print_error(nosupport_error);
        _root.CacheApiDB = _root.CacheApiDBFallback;
    } else {

        // enable instant usage of Cache API store
        _root.CacheApiDB = factory();

        // filtered out by Google Closure Compiler to create .silent.js version

        // test if Cache API is blocked by browser privacy settings
        caches.open('x').catch(function(e) {

            // report errors unrelated to privacy settings
            if (e.name != 'SecurityError') {
                print_error('Cache API: ' + e.message);
            }

            // fallback
            setCacheApiDB(_root.CacheApiDBFallback);

        }).then(function() {

            // continue with Cache API
            setCacheApiDB();
        });

    }
})(function() {

    var DATE_HEADER = 'x-d';
    var EXPIRE_HEADER = 'x-e';
    var CONTENT_TYPE_HEADER = 'Content-Type';

    // return timestamp
    function NOW() {
        return Math.round(Date.now() / 1000);
    }

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
                if (!cachedata || CACHE_EXPIRED(store, cache_key, cachedata, 1)) {
                    return false;
                }

                return cachedata.json();
            });

        });
    }

    // set key in cache
    function CACHE_SET(store, key, data, expire) {
        return CACHE_OPEN(store, function(cache) {

            if (IS_UNDEFINED(key) || IS_UNDEFINED(data)) {
                ERROR();
            }

            var cache_key = CACHE_KEY(key);

            var cache_headers = {};

            // JSON
            cache_headers[CONTENT_TYPE_HEADER] = 'application/json';
            data = JSON.stringify(data);

            // expire time
            if (expire) {

                // cache date
                cache_headers[DATE_HEADER] = NOW();

                expire = INT(expire);
                if (isNaN(expire) || expire < 0) {
                    ERROR();
                }
                cache_headers[EXPIRE_HEADER] = STRING(expire);
            }

            var cache_data = new Response(data, {
                headers: cache_headers
            });

            return cache.put(cache_key, cache_data);

        });
    }

    // return cache expired state
    function CACHE_EXPIRED(store, cache_key, cachedata) {
        var exp = cachedata.headers.get(EXPIRE_HEADER);
        var date = cachedata.headers.get(DATE_HEADER);
        if (exp && date) {
            exp = INT(exp);
            date = INT(date);

            // expired
            if ((date + exp) < NOW()) {
                CACHE_DELETE(store, cache_key, 1);
                return true;
            }
        }
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

    // set key in cache
    function CACHE_PRUNE(store) {
        return CACHE_OPEN(store, function(cache) {

            // get all keys from store
            return cache.keys().then(function(keys) {

                var queries = [];

                // read all entries in cache
                keys.forEach(function(cache_key) {
                    //cacheRequests.push(cache_key);
                    queries.push(cache.match(cache_key));
                });

                // process cache data
                return Promise.all(queries)
                    .then(function(cacheEntries) {

                        cacheEntries.forEach(function(cachedata, key) {

                            // run expired check, auto-deletes expired entry
                            CACHE_EXPIRED(store, key, cachedata);
                        });
                    });
            });
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
    function ERROR(msg) {

        // filtered out by Google Closure Compiler to create .silent.js version
        throw Error(msg || 'input');
    }

    // public get method
    CACHE.prototype.get = function(key) {
        return CACHE_GET(this.store, NAMESPACE(this.ns, key));
    }

    // public set method
    CACHE.prototype.set = function(key, value, expire) {
        return CACHE_SET(this.store, NAMESPACE(this.ns, key), value, expire);
    }

    // public delete method
    CACHE.prototype.del = function(key) {
        return CACHE_DELETE(this.store, NAMESPACE(this.ns, key));
    }

    // public cache prune method
    CACHE.prototype.prune = function() {
        return CACHE_PRUNE(this.store);
    }

    // cache api constructor
    return CACHE;

});
var CacheApiDB = (function (exports) {
'use strict';

/**
 * Cache API key/value store - github.com/optimalisatie/Cache-API-Key-Value-Store
 * Released under the terms of MIT license
 *
 * Copyright (C) 2018 github.com/optimalisatie
 */
var defaultStore = '--keyval';
var dateHeader = 'x-d';
var expireHeader = 'x-e';
var contentTypeHeader = 'Content-Type';
var slashKey = '/';
// open store
function getStore(store, key, callback, value, expire) {
    store = store || defaultStore;
    return caches.open(store).then(function (cache) {
        return callback(cache, new Request(['', defaultStore, key || ''].join(slashKey)), value, expire);
    });
}
// get entry from cache
function cacheGet(cache, cache_key) {
    return cache.match(cache_key).then(function (cachedata) {
        // expired check
        if (!cachedata || cacheExpired(cache, cache_key, cachedata)) {
            return;
        }
        return cachedata.json();
    });
}
// delete entry from cache
function cacheDel(cache, cache_key) {
    cacheDelete(cache, cache_key);
}
// set entry in cache
function cacheSet(cache, cache_key, value, expire) {
    var headers = {};
    // JSON
    headers[contentTypeHeader] = 'application/json';
    value = JSON.stringify(value);
    // expire time
    if (IS_INT(expire)) {
        headers[dateHeader] = timestamp();
        headers[expireHeader] = expire;
    }
    value = new Response(value, {
        headers: headers
    });
    return cache.put(cache_key, value);
}
// delete expired
function cacheExpired(cache, cache_key, cachedata) {
    if (cachedata) {
        var headers = cachedata.headers;
        // expired check
        var exp = INT(headers.get(expireHeader));
        var date = INT(headers.get(dateHeader));
        if (IS_INT(exp)) {
            // expired
            if ((date + exp) < timestamp()) {
                cacheDelete(cache, cache_key);
                return 1;
            }
        }
    }
}
// return keys
function cacheKeys(cache) {
    return cache.keys().then(function (rawKeys) {
        var keys = [];
        rawKeys.forEach(function (key) {
            key = new URL(key.url).pathname.split(slashKey);
            key.shift();
            key.shift();
            keys.push(key.join(slashKey));
        });
        return keys;
    });
}
// clear store
function cacheClear(cache) {
    return cache.keys().then(function (keys) {
        keys.forEach(function (key) {
            cacheDelete(cache, key);
        });
    });
}
// prune expired entries
function cachePrune(cache) {
    return cache.keys().then(function (keys) {
        // read all entries which automatically verifies the expire date
        keys.forEach(function (cache_key) {
            cacheGet(cache, cache_key);
        });
    });
}
// delete from cache
function cacheDelete(cache, cache_key) {
    cache["delete"](cache_key);
}
// return timestamp
function timestamp() {
    return Math.round(Date.now() / 1000);
}
// return INTEGER
function INT(num) {
    return parseInt(num);
}
// return INTEGER
function IS_INT(num) {
    return !isNaN(num);
}
function get(key, store) {
    return getStore(store, key, cacheGet);
}
function set(key, value, expire, store) {
    return getStore(store, key, cacheSet, value, expire);
}
function del(key, store) {
    return getStore(store, key, cacheDel);
}
function clear(store) {
    return getStore(store, '', cacheClear);
}
function prune(store) {
    return getStore(store, '', cachePrune);
}
function keys(store) {
    return getStore(store, '', cacheKeys);
}

exports.get = get;
exports.set = set;
exports.del = del;
exports.clear = clear;
exports.prune = prune;
exports.keys = keys;

return exports;

}({}));

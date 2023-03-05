/**
 * Cache API key/value store - github.com/optimalisatie/Cache-API-Key-Value-Store
 * Released under the terms of MIT license
 *
 * Copyright (C) 2018 github.com/optimalisatie
 */

const defaultStore = '--keyval';
const dateHeader = 'x-d';
const expireHeader = 'x-e';
const contentTypeHeader = 'Content-Type';
const slashKey = '/';

// open store
function getStore(store: string, key: string, callback: Function, value?: any, expire?: number): Promise<void> {
    store = store || defaultStore;
    return caches.open(store).then(cache => {
        return callback(cache, new Request(['', defaultStore, key || ''].join(slashKey)), value, expire);
    });
}

// get entry from cache
function cacheGet(cache: any, cache_key: string) {
    return cache.match(cache_key).then(function(cachedata) {

        // expired check
        if (!cachedata || cacheExpired(cache, cache_key, cachedata)) {
            return;
        }

        return cachedata.json();
    });
}

// delete entry from cache
function cacheDel(cache: any, cache_key: string) {
    cacheDelete(cache, cache_key);
}

// set entry in cache
function cacheSet(cache: any, cache_key: string, value: any, expire?: number) {

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
function cacheExpired(cache: any, cache_key: string, cachedata: any) {
    if (cachedata) {

        var headers = cachedata.headers;

        // expired check
        var exp = INT(headers.get(expireHeader));
        var date = INT(headers.get(dateHeader));
        if (IS_INT(exp)) {

            // expired
            if ((date + exp) < timestamp()) {
                cacheDelete(cache, cache_key)
                return 1;
            }
        }
    }
}

// return keys
function cacheKeys(cache: any) {
    return cache.keys().then(function(rawKeys) {
        var keys = [];
        rawKeys.forEach(function(key) {
            key = new URL(key.url).pathname.split(slashKey);
            key.shift();
            key.shift();
            keys.push(key.join(slashKey));
        });
        return keys;
    });
}

// clear store
function cacheClear(cache: any) {
    return cache.keys().then(function(keys) {
        keys.forEach(function(key) {
            cacheDelete(cache, key);
        });
    });
}

// prune expired entries
function cachePrune(cache: any) {
    return cache.keys().then(function(keys) {

        // read all entries which automatically verifies the expire date
        keys.forEach(function(cache_key) {
            cacheGet(cache, cache_key);
        });
    });
}

// delete from cache
function cacheDelete(cache: any,cache_key:string) {
    cache.delete(cache_key);
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

export function get<Type>(key: string, store?: string): Promise<void> {
  return getStore(store, key, cacheGet);
}

export function set(key: string, value: any, expire?: number, store?: string): Promise<void> {
  return getStore(store, key, cacheSet, value, expire);
}

export function del(key: string, store?: string): Promise<void> {
  return getStore(store, key, cacheDel);
}

export function clear(store?: string): Promise<void> {
  return getStore(store, '', cacheClear);
}

export function prune(store?: string): Promise<void> {
  return getStore(store, '', cachePrune);
}

export function keys(store?: string): Promise<void> {
  return getStore(store, '', cacheKeys);
}
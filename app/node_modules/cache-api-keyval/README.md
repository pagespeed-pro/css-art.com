![Version](https://img.shields.io/github/release/optimalisatie/Cache-API-Key-Value-Store.svg) [![npm version](https://badge.fury.io/js/cache-api-keyval.svg)](http://badge.fury.io/js/cache-api-keyval)

# Cache API Key/Value Store

Fast and tiny key/value store with +50MB storage capacity in [most browsers](https://developer.mozilla.org/en-US/docs/Web/API/Cache#Browser_compatibility), expiration and JSON object data-type support.

Cache API is currently available in Chrome >= 40, Firefox >=39 and Opera >= 27.

Safari and Edge recently introduced support for it.

Info by Google: https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api

## Usage

### as `<script>`

```html
<script src="dist/cache-api-keyval-iife.js"></script>
```

```js
// set JSON object data
CacheApiDB.set('key', { json: 'object' }); 

// set text data with expiration in 24 hours
CacheApiDB.set('key2', 'string', 86400); 

// get data from cache
CacheApiDB.get('key').then(function(json) {
    console.log('json object', json);
});

// delete key from database
CacheApiDB.del('key2'); 

// clear database
CacheApiDB.clear();

// prune expired cache entries
CacheApiDB.prune();
```


### set:

```js
import { set } from 'cache-api-keyval';

set('hello', 'world');
set('foo', 'bar', 3600); // expire in 1 hour
```

The data is stored in JSON format and supports big data.

All methods return promises:

```js
import { set } from 'cache-api-keyval';

set('hello', 'world')
  .then(() => console.log('It worked!'))
  .catch(err => console.log('It failed!', err));
```

### get:

```js
import { get } from 'cache-api-keyval';

// logs: "world"
get('hello').then(val => console.log(val));
```

If there is no 'hello' key, then `val` will be `undefined`.

### keys:

```js
import { keys } from 'cache-api-keyval';

// logs: ["hello", "foo"]
keys().then(keys => console.log(keys));
```

### del:

```js
import { del } from 'cache-api-keyval';

del('hello');
```

### clear:

```js
import { clear } from 'cache-api-keyval';

clear();
```

### prune:

```js
import { prune } from 'cache-api-keyval';

prune();
```

The prune method clears all expired keys.

### Custom stores:

By default, the methods above use a default `keyval` store. You can create your own store, and pass it as an additional parameter to any of the above methods:

```js
import { get, set } from 'cache-api-keyval';

set('foo', 'bar', 'custom-store');
get('foo', 'custom-store');
```

That's it!

With thanks to [idb-keyval](https://github.com/jakearchibald/idb-keyval). The `v2.0.0` code structure has been copied from `idb-keyval`.


## Installing

### Via npm + webpack/rollup

```sh
npm install --save cache-api-keyval
```

Now you can require/import `cache-api-keyval`:

```js
import { get, set } from 'cache-api-keyval';
```

### Via `<script>`

* `dist/cache-api-keyval.mjs` is a valid JS module.
* `dist/cache-api-keyval-iife.js` can be used in browsers that don't support modules. `CacheApiDB` is created as a global.
* `dist/cache-api-keyval-iife.min.js` As above, but minified.
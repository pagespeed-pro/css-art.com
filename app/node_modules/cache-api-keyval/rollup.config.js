import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'cache-api-keyval.ts',
    plugins: [typescript()],
    output: [{
        file: 'dist/cache-api-keyval-iife.js',
        format: 'iife',
        name: 'CacheApiDB'
    }, {
        file: 'dist/cache-api-keyval-cjs.js',
        format: 'cjs'
    }, {
        file: 'dist/cache-api-keyval.mjs',
        format: 'es'
    }, {
        file: 'dist/cache-api-keyval-amd.js',
        format: 'amd',
    }]
};
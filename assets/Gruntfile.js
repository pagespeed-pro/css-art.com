/* global module:false */
module.exports = function(grunt) {

    // dependencies
    var merge = require('merge');
    var fs = require('fs');

    // closure compiler
    var define = [];
    var externs = ['css-art.ext.js'];

    // Grunt configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! CSS-ART.COM by 📐 Style.Tools v<%= pkg.version %> */\n'
        },

        // IIFE
        iife: {
            // global scripts (loaded on every page in wp-admin/)
            "css-art": {
                options: {
                    useStrict: true,
                    prependSemicolon: false,
                    trimCode: true,
                    args: ['window'],
                    params: ['w', 'undefined']
                },
                files: {
                    'iife/css-art.js': [
                        'js/global.js'
                    ]
                }
            }
        },

        // minify
        uglify: {
            "css-art": {
                options: {
                    compress: {
                        global_defs: merge({}, {

                        })
                    },
                    mangle: {},
                    dead_code: true,
                    banner: ''
                },
                files: {
                    '../httpdocs/js/css-art.js': [
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/datatables.net/js/jquery.dataTables.js',
                        'node_modules/datatables.net-dt/js/dataTables.dataTables.js',
                        'node_modules/platform/platform.js',
                        'iife/css-art.js'
                    ]
                }
            }
        },

        cssmin: {
            "css-art": {
                options: {
                    banner: '/*! CSS-ART.COM by 📐 Style.Tools */\n',
                    advanced: true,
                    aggressiveMerging: true,
                    processImport: true
                },
                files: {

                    // control panel
                    '../httpdocs/css/css-art.css': [
                        'node_modules/datatables.net-dt/css/jquery.dataTables.css',
                        'css/app.css',
                        'css/perf.css',
                        'css/roboto.css'
                    ]
                }
            }
        },

        // copy
        copy: {
            "css-art": {
                src: ['../artwork/**/*.css'],
                dest: '../httpdocs/artwork/',
                options: {
                    process: function(content, srcpath) {
                        return '/* CSS-ART.COM by 📐 Style.Tools */\n' + content;
                    }
                }
            },

            "css-art-img": {
                src: ['../artwork/**/*.png', '../artwork/**/*.jpg', '../artwork/**/*.gif'],
                dest: '../httpdocs/artwork/'
            }

        }
    });

    // Load Dependencies
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('build', [
        'css',
        'iife',
        'uglify:css-art'
    ]);

    grunt.registerTask('css', [
        'cssmin:css-art'
    ]);

    grunt.registerTask('default', ['']);
};
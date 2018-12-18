/**
 * CSS-ART.COM - github.com/style-tools/css-art.com
 * Released under the terms of MIT license
 *
 * Copyright (C) 2018 github.com/style-tools
 */

jQuery(function($) {

    // detect cache API support
    var cacheapi_support = ("caches" in window);

    // write artwork frame
    function write_artwork_frame() {
        if (art_frame) {
            art_frame.parentNode.removeChild(art_frame);
        }

        $('main.cssart section.cssart').append('<iframe src="about:blank" name="artwork" frameborder="0" width="100%" height="100%">Your browser does not support iframes.</iframe>');
        art_frame = $('iframe[name=artwork]')[0];

        if (performance) {
            art_frame_render_start = performance.now();
        }

        // write html
        art_frame.contentWindow.document.open();
        art_frame.contentWindow.document.write('<!DOCTYPE html><html><head><title>artwork</title><script>' + artwork[3] + '</script></head><body>' + artwork[2] + '</body></html>');
        art_frame.contentWindow.document.close();

        artwork_css = new art_frame.contentWindow.Array;
        artwork[1].forEach(function(sheet) {
            artwork_css.push(artwork_dir + sheet + ((sheet.indexOf('?') === -1) ? '?' : '&') + artwork_css_time);
        });

        return art_frame.contentWindow.asyncCSS;
    }

    // save performance results
    function perfResults_save(perfResults) {

        if (perfResultsRegistered) {
            return;
        }

        var data = {
            artwork: artwork[0],
            browser: platform.name + ' ' + platform.version,
            os: platform.os.toString(),
            perf: perfResults
        };
        if (platform.name === 'Chrome' || platform.name === 'Opera' || platform.name === 'Chrome Mobile') {
            data.browser = data.browser.replace(/^([a-z ]+ \d+\.\d+)\..*$/i, '$1');
        }

        localStorage.setItem('perf:' + artwork[0], data);

        fetch('/perf', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            response.json().then(function(res) {
                console.log(data, res);
            })
        });
    }

    // display performance test error
    function perfResults_error(msg) {
        $('.cssart-results .cssart-perf-cols').html('');
        $('.cssart-results .cssart-perf-cols').append('<div class="cssart-perf-error"><p>' + msg + '</p></div>');
    }

    // display performance results
    function perfResults_display(col, perf, category, label) {

        var end = art_frame_render_start + perf.startTime + perf.duration;

        var sheet_total = (perf.startTime + perf.duration - loadPerf.startTime);

        var async = $(col);

        gtag('event', 'timing_complete', {
            'name': 'css-loaded',
            'value': sheet_total.toFixed(2),
            'event_category': category,
            'event_label': label
        });

        $('.cssart-perf-total', async).html(sheet_total.toFixed(2) + 'ms');
        $('.cssart-perf-download .cssart-perf-start', async).html(loadPerf.startTime.toFixed(3));
        $('.cssart-perf-download .cssart-perf-duration', async).html(loadPerf.duration.toFixed(3));
        $('.cssart-perf-render .cssart-perf-start', async).html(perf.startTime.toFixed(3));
        $('.cssart-perf-render .cssart-perf-duration', async).html(perf.duration.toFixed(3));

        return sheet_total;
    }

    if ($('#artwork').length) {

        // load artwork
        var artwork = JSON.parse($('#artwork').html());
        var performance = window.performance;

        // create artwork iframe
        var perfResultsRegistered = localStorage.getItem('perf:' + artwork[0]);

        var art_frame;
        var art_frame_render_start;
        var artwork_dir = '/artwork/' + artwork[0] + '/';
        if (!(artwork[1] instanceof Array)) {
            artwork[1] = [artwork[1]];
        }
        var artwork_css;
        var artwork_css_time = Date.now();

        // write iframe and return asyncCSS loader
        var asyncCSS = write_artwork_frame();

        // performance test already completed
        if (!performance) {
            // default <link>
            asyncCSS(artwork_css).then(function() {
                $('.cssart-loading').remove();
            })

            if (!performance) {
                perfResults_error('Browser does not support <a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance" target="_blank">Performance Timing API</a>.')
            }

        } else {

            try {
                // default <link>
                var perfResults = {};
                var loadPerf;
                asyncCSS.on('perf:load', function(href, perf, cached) {
                    loadPerf = perf;
                }).on('perf:render', function(href, perf, cached) {
                    perfResults['async'] = perfResults_display('.cssart-perf-async', perf, 'Async', 'Async <link> timing');
                }).on('cache_api_save', function() { // wait for cache api fallback to be saved (available in debug mode only)

                    // rewrite frame
                    asyncCSS = write_artwork_frame();

                    // test localStorage
                    asyncCSS.on('perf:load', function(href, perf, cached) {
                        loadPerf = perf;
                    }).on('perf:render', function(href, perf, cached) {
                        perfResults['localStorage'] = perfResults_display('.cssart-perf-ls', perf, 'localStorage', 'localStorage timing');
                    }).load(artwork_css, {
                        "cache": {
                            "type": "localStorage",
                            "fallback": "cache-api"
                        }
                    }).then(function() {

                        // rewrite frame
                        asyncCSS = write_artwork_frame();

                        // cache api fallback
                        for (var key in localStorage) {
                            if (/^st:/.test(key) && key !== 'st:/css/css-art.css') {
                                localStorage.removeItem(key);
                            }
                        }

                        if (cacheapi_support) {

                            // test cache-api performance
                            asyncCSS.on('perf:load', function(href, perf, cached) {
                                loadPerf = perf;
                            }).on('perf:render', function(href, perf, cached) {
                                perfResults['api'] = perfResults_display('.cssart-perf-api', perf, 'Cache-API', 'Cache-API timing');
                            }).load(artwork_css, {
                                "cache": {
                                    "type": "localStorage",
                                    "fallback": "cache-api"
                                }
                            }).then(function() {

                                // clear cache API for next test
                                window.caches.open('st:').then(function(cache) {
                                    cache.keys().then(function(keys) {
                                        keys.forEach(function(key) {
                                            cache.delete(key);
                                        });
                                    });
                                });

                                $('.cssart-loading').remove();

                                perfResults_save(perfResults);
                            });

                        } else {
                            $('.cssart-perf-api .cssart-perf-round').html('Not supported by browser');

                            $('.cssart-loading').remove();
                        }

                    });
                }).load(artwork_css, {
                    "cache": {
                        "type": "localStorage",
                        "fallback": "cache-api"
                    }
                });

            } catch (e) {
                perfResults_error(e.message);
            }
        }

        // performance results 
        $('button.cssart-view-perf').on('click', function() {
            var active = $('footer.cssart').hasClass('active');
            $('footer.cssart').toggleClass('active');

            if (!active) {
                gtag('event', 'view', {
                    'event_category': 'Performance Test Results',
                    'event_label': 'View Performance Test Results'
                });
            }

            $(this).html((active) ? 'View Test Results' : 'Hide Test Results');
        });
    }

    // browser history table
    if ($('#perf-browsers')) {
        $('#perf-browsers').DataTable({
            order: [
                [3, 'asc']
            ]
        });
    }

    // rankings table
    if ($('#rankings')) {
        $('#rankings').DataTable({
            /*order: [
                [3, 'asc']
            ]*/
        });
    }

    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-131137791-1';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-131137791-1');

});
'use strict';

/**
 * CSS-ART.COM database logic
 */

const mysql = require('mysql');
const fs = require('fs');

const mysqlConfig = JSON.parse(fs.readFileSync('./mysql.json', 'utf-8'));
const connection = mysql.createConnection(mysqlConfig);
const cache = require('memory-cache');
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

// get/insert browser
function getBrowser(browser, os) {
    return new Promise(function(resolve, reject) {
        connection.query('SELECT `id` FROM `browsers` WHERE `browser` = ? AND `os` = ? LIMIT 1', [browser, os], function(error, results, fields) {
            if (error) {
                reject(error);
            } else if (results.length === 0) {
                connection.query('INSERT IGNORE INTO `browsers` SET ?', {
                    browser: browser,
                    os: os
                }, function(error, results, fields) {
                    if (error || !results.insertId) {
                        return reject(error);
                    } else {
                        resolve(results.insertId);
                    }
                });
            } else {
                resolve(results[0].id);
            }
        });
    });
}

// get/insert artwork
function getArtworkID(artwork) {
    return new Promise(function(resolve, reject) {

        var artwork_id = cache.get(artwork + ':id');
        if (artwork_id) {
            return resolve(artwork_id);
        }

        connection.query('SELECT `id` FROM `artworks` WHERE `name` = ? LIMIT 1', [artwork], function(error, results, fields) {
            if (error) {
                reject(error);
            } else if (results.length === 0) {
                connection.query('INSERT IGNORE INTO `artworks` SET ?', {
                    name: artwork
                }, function(error, results, fields) {
                    if (error || !results.insertId) {
                        return reject(error);
                    } else {

                        cache.put(artwork + ':id', results.insertId);

                        resolve(results.insertId);
                    }
                });
            } else {

                cache.put(artwork + ':id', results[0].id);

                resolve(results[0].id);
            }
        });
    });
}

// log IP for test results
function logIP(artwork_id, version, ip) {
    return new Promise(function(resolve, reject) {
        connection.query('SELECT * FROM `ip_log` WHERE `artwork` = ? AND `version` = ? AND `ip` = INET_ATON(?) LIMIT 1', [artwork_id, version, ip], function(error, results, fields) {
            if (error) {
                reject(error);
            } else if (results.length === 0) {
                //  || ip === '216.37.72.238'
                // crossbrowsertesting.com = 216.37.72.238
                connection.query('INSERT IGNORE INTO `ip_log` (`artwork`, `version`, `ip`) VALUES (?, ?, INET_ATON(?))', [artwork_id, version, ip], function(error, results, fields) {
                    if (error) {
                        return reject(error);
                    } else {
                        resolve(false);
                    }
                });
            } else {
                resolve(true);
            }
        });
    });
}

// log IP for test results
function registerPerformanceResults(artwork, version, ip, browser, os, perfResults) {
    return new Promise(function(resolve, reject) {

        perfResults.async = parseFloat(perfResults.async);
        perfResults.localStorage = parseFloat(perfResults.localStorage);
        perfResults.api = parseFloat(perfResults.api);

        if (isNaN(perfResults.async) || isNaN(perfResults.localStorage) || isNaN(perfResults.api)) {
            return reject('invalid results');
        }

        getBrowser(browser, os).then(function(browser_id) {

            getArtworkID(artwork).then(function(artwork_id) {

                logIP(artwork_id, version, ip).then(function(already_logged) {
                    if (already_logged) {
                        resolve(false);
                    } else {
                        connection.query('SELECT `id` FROM `tests` WHERE `artwork` = ? AND `browser` =? AND `version` = ? LIMIT 1', [artwork_id, browser_id, version], function(error, results, fields) {
                            if (error) {
                                reject(error);
                            } else if (results.length === 0) {
                                connection.query('INSERT IGNORE INTO `tests` (`id`, `artwork`, `browser`, `version`, `async`, `localStorage`, `api`, `tests`, `last_test`) VALUES (null, ?, ?, ?, ?, ?, ?, 1, NOW())', [artwork_id, browser_id, version, perfResults.async, perfResults.localStorage, perfResults.api], function(error, results, fields) {
                                    if (error) {
                                        return reject(error);
                                    } else {
                                        resolve(true);
                                    }
                                });
                            } else {

                                var id = results[0].id;

                                connection.query('UPDATE `tests` SET `async`=`async`+?, `localStorage`=`localStorage`+?, `api`=`api`+?, `tests`=`tests`+1, `last_test`=NOW() WHERE `id`=? LIMIT 1', [perfResults.async, perfResults.localStorage, perfResults.api, id], function(error, results, fields) {
                                    if (error) {
                                        return reject(error);
                                    } else {
                                        resolve(true);
                                    }
                                });
                            }
                        });
                    }
                }).catch(reject);

            }).catch(reject);

        }).catch(reject);
    });
}

// query scores for artwork
function getScores(artwork, version) {
    return new Promise(function(resolve, reject) {
        getArtworkID(artwork).then(function(artwork_id) {

            connection.query('SELECT b.browser, b.os, t.tests, t.async/t.tests as `async`, ' +
                '(SUM(pt.async)/SUM(pt.tests)) as `async_prev`, ' +
                't.localstorage/t.tests as `localstorage`, ' +
                '(SUM(pt.localstorage)/SUM(pt.tests)) as `localstorage_prev`, ' +
                't.api/t.tests as `api`, ' +
                '(SUM(pt.api)/SUM(pt.tests)) as `api_prev` FROM `tests` as t INNER JOIN `browsers` as b ON (b.id=t.browser) LEFT JOIN `tests` as pt ON (pt.artwork = t.artwork AND pt.browser = t.browser AND pt.version != t.version) WHERE t.artwork=? AND t.version = ? GROUP BY t.id ORDER BY t.tests DESC LIMIT 50', [artwork_id, version],
                function(error, results, fields) {
                    if (error) {
                        reject(error);
                    } else {
                        results = JSON.parse(JSON.stringify(results));
                        results.forEach(function(row, i) {
                            var change = row.async / (row.async_prev / 100);
                            var _change = row.localstorage - row.localstorage_prev;
                            if (_change < change) {
                                change = _change;
                            }
                            _change = row.api - row.api_prev;
                            if (_change < change) {
                                change = _change;
                            }
                            results[i].improvement = change * -1;
                            results[i].async = results[i].async.toFixed(2);
                            results[i].localstorage = results[i].localstorage.toFixed(2);
                            results[i].api = results[i].api.toFixed(2);
                        });
                        resolve(results);
                    }
                });
        });
    });
}

// query artworks
function getArtworkIndex(version) {
    return new Promise(function(resolve, reject) {

        var index = cache.get('artwork-index');
        if (index) {
            return resolve(index);
        }

        var indexPromises = [];

        // artwork directory
        var artwork_base_dir = '../artwork/';

        try {
            fs.readdir(artwork_base_dir, (err, files) => {
                if (err) {
                    return reject(err);
                }
                files.forEach(dir => {

                    indexPromises.push(new Promise(function(resolve, reject) {

                        var artwork_dir = artwork_base_dir + dir + '/';
                        fs.lstat(artwork_dir, function(err, stats) {
                            if (err) {
                                return reject(err);
                            }
                            if (!stats.isDirectory()) {
                                resolve();
                            } else {

                                fs.lstat(artwork_dir + 'package.json', function(err, stats) {
                                    if (err || !stats) {
                                        return reject(err);
                                    }

                                    // read artwork package
                                    fs.readFile(artwork_dir + 'package.json', 'utf-8', function(err, pack) {
                                        pack = JSON.parse(pack);

                                        if (pack.name !== dir) {
                                            console.log('error: artwork package name does not match directory', pack.name, dir);
                                            return reject(dir + ' name in package mismatch');
                                        }

                                        if (!pack.html) {
                                            console.log('error: no "html" param in package');
                                            return reject(dir + ' no html in package');
                                        }

                                        // read artwork package
                                        fs.readFile(artwork_dir + pack.html, 'utf-8', function(err, artwork_html) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            pack.html = artwork_html;

                                            // sanitize author
                                            if (pack.author) {
                                                if (pack.author.web) {
                                                    if (!/^http(s)?:\/\//.test(pack.author.web)) {
                                                        pack.author.web = 'http://' + pack.author.web;
                                                    }
                                                    if (!/^http(s)?:/.test(pack.author.web)) {
                                                        pack.author.web = 'http:' + pack.author.web;
                                                    }
                                                    pack.author.web_print = pack.author.web.replace(/^http(s)?:\/\/([^\/]+)(\/.*)?$/, '$2');
                                                }
                                            }

                                            // render description markdown
                                            pack.description = md.render(pack.description);
                                            pack.keywords = (pack.keywords) ? pack.keywords.join(', ') : '';

                                            // get ID
                                            getArtworkID(pack.name).then(function(artwork_id) {

                                                pack.artwork_id = artwork_id;

                                                if (pack.thumbnail) {

                                                    fs.lstat(artwork_dir + pack.thumbnail, function(err, stat) {
                                                        if (err || !stat) {
                                                            pack.thumbnail = false;
                                                        }
                                                        resolve(pack);
                                                    });

                                                } else {
                                                    resolve(pack);
                                                }

                                            });

                                        });
                                    });
                                });
                            }
                        });


                    }));

                });

                Promise.all(indexPromises).then(function(index) {

                    cache.put('artwork-index', index);

                    resolve(index);

                }).catch(function(err) {
                    console.log('index error:', err);
                    reject(err);
                });


            });

        } catch (e) {
            reject(e);
        }
    });
}

// query artworks
function getArtworkIndexStats(index) {
    return new Promise(function(resolve, reject) {
        var promises = [];

        var artwork_ids = [];
        var id_index = {};

        index.forEach(function(artwork, i) {
            id_index[artwork.artwork_id] = i;
            artwork_ids.push(artwork.artwork_id);
        });

        connection.query('SELECT `id`, `past7days`, `past3months`, `total` FROM `artworks` WHERE `id` IN (?)', [artwork_ids], function(error, results, fields) {
            if (error) {
                reject(error);
            } else {
                results.forEach(function(row) {
                    if (row.id) {
                        index[id_index[row.id]].stats = {
                            week: row['past7days'],
                            month: row['past3months'],
                            total: row['total']
                        }
                    }
                });

                index.sort(function(a, b) {
                    return b.stats.week - a.stats.week;
                });

                // set rank
                index.forEach(function(row, i) {
                    index[i].rank = i + 1;
                });

                resolve(index);
            }
        });

    });
}

// get artwork from index
function getArtwork(artwork, version) {
    return new Promise(function(resolve, reject) {
        getArtworkIndex(version).then(function(index) {

            var resolved;
            index.forEach(function(row) {
                if (!resolved && row.name === artwork) {
                    resolved = 1;
                    resolve(row);
                }
            });

            if (!resolved) {
                resolve();
            }
        }).catch(reject);
    });
}

module.exports = {
    connection: connection,
    registerPerformanceResults: registerPerformanceResults,
    getScores: getScores,
    getArtworkIndex: getArtworkIndex,
    getArtworkIndexStats: getArtworkIndexStats,
    getArtwork: getArtwork,
    getArtworkID: getArtworkID
};
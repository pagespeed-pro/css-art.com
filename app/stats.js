'use strict';

/**
 * CSS-ART.COM statistics index
 */

const mysql = require('./mysql.js');
const fs = require('fs');
const {
    google
} = require('googleapis');

// analytics view
const viewid = '186809881';

// auth
const privatekey = require("./service-account-credentials.json");
const jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key, ['https://www.googleapis.com/auth/analytics.readonly']);

jwtClient.authorize(function(err, tokens) {
    if (err) {
        console.log(err);
        return;
    }
});

const analyticsreporting = google.analyticsreporting({
    version: 'v4',
    auth: jwtClient,
});

// update traffic from Google / search engines
async function updateArtworkTraffic() {

    const week = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [{
                viewId: viewid,
                dateRanges: [{
                    startDate: '7daysAgo',
                    endDate: 'today',
                }, {
                    startDate: '84daysAgo', // 3 months for change calculation
                    endDate: 'today',
                }],
                /*segments: [{
                    segmentId: 'gaid::-6' // traffic from search engines
                }],*/
                dimensions: [
                    /*{
                        name: 'ga:segment'
                    }, */
                    {
                        name: 'ga:landingPagePath'
                    }
                ],
                orderBys: [{
                    fieldName: 'ga:sessions',
                    sortOrder: "DESCENDING"
                }],
                metrics: [{
                    expression: 'ga:sessions',
                }, ],
            }],
        },
    });

    const total = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [{
                viewId: viewid,
                dateRanges: [{
                    startDate: '2018-12-10', // start of CSS-ART.COM
                    endDate: 'today',
                }],
                /*segments: [{
                    segmentId: 'gaid::-6' // traffic from search engines
                }],*/
                dimensions: [
                    /*{
                        name: 'ga:segment'
                    }, */
                    {
                        name: 'ga:landingPagePath'
                    }
                ],
                orderBys: [{
                    fieldName: 'ga:sessions',
                    sortOrder: "DESCENDING"
                }],
                metrics: [{
                    expression: 'ga:sessions',
                }, ],
            }, ],
        },
    });

    // process results
    var statsdata = {};
    week.data.reports[0].data.rows.forEach(function(row, reportIndex) {

        var m = row.dimensions[0].match(/^\/([^\/]+)\//);
        if (m && m[1]) {

            statsdata[m[1]] = {
                week: row.metrics[0].values[0],
                month: row.metrics[1].values[0]
            };

        };
    });
    total.data.reports[0].data.rows.forEach(function(row, reportIndex) {

        var m = row.dimensions[0].match(/^\/([^\/]+)\//);
        if (m && m[1]) {

            if (!statsdata[m[1]]) {
                statsdata[m[1]] = {
                    week: 0,
                    month: 0
                };
            }

            statsdata[m[1]].total = row.metrics[0].values[0];

        };
    });

    // artwork directory
    var artwork_base_dir = '../artwork/';
    var artwork_update_promises = [];

    for (var artwork_name in statsdata) {
        (function(artwork_name, stats) {
            artwork_update_promises.push(new Promise(function(resolve, reject) {

                try {
                    // test if artwork exists
                    var artwork_dir = artwork_base_dir + artwork_name + '/';
                    fs.lstat(artwork_dir, function(err, stat) {
                        if (err || !stat) {
                            return resolve();
                        }

                        // artwork exists
                        mysql.getArtworkID(artwork_name).then(function(artwork_id) {
                            mysql.connection.query('UPDATE `artworks` SET `past7days`=?, `past3months`=?, `total`=?, `last_stats_update`=NOW() WHERE `id`=? LIMIT 1', [stats.week, stats.month, stats.total, artwork_id], function(error, results, fields) {
                                if (error) {
                                    return reject(error);
                                } else {
                                    resolve(true);
                                }
                            });
                        });
                    });
                } catch (e) {
                    resolve();
                }
            }));
        })(artwork_name, statsdata[artwork_name]);
    }

    return Promise.all(artwork_update_promises).catch(function(err) {
        console.log('stats update error', err);
    });
}

// export functions for testing purposes
module.exports = {
    updateArtworkTraffic: updateArtworkTraffic
};
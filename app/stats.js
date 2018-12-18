'use strict';

/**
 * CSS-ART.COM statistics index
 */

const mysql = require('mysql');
const fs = require('fs');
const mysqlConfig = JSON.parse(fs.readFileSync('./mysql.json', 'utf-8'));
const connection = mysql.createConnection(mysqlConfig);
const {
    google
} = require('googleapis');

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
    } else {
        console.log("Successfully connected!");

        runSample();
    }
});

const analyticsreporting = google.analyticsreporting({
    version: 'v4',
    auth: jwtClient,
});

async function runSample() {
    const res = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [{
                viewId: '186809881',
                dateRanges: [{
                    startDate: '2018-03-17',
                    endDate: '2018-03-24',
                }, {
                    startDate: '14daysAgo',
                    endDate: 'today',
                }, ],
                metrics: [{
                    expression: 'ga:users',
                }, ],
            }, ],
        },
    });
    console.log(res.data);
    return res.data;
}

// export functions for testing purposes
module.exports = {
    runSample
};
'use strict';

/**
 * CSS-ART.COM statistics update cron
 */

const stats = require('./stats.js');

// update traffic
stats.updateArtworkTraffic().then(function() {
    console.log('stats updated');
});

'use strict';

/* Merging the configurations from {dev,qa,staging,production} with common configuration */
module.exports = Object.assign(
    require(__dirname + '/../config/env/common.js'),
    require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.js') || {}
);
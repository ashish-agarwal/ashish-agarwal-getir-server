'use strict';

const Record = require('../models/record');

exports.getRecords = (query) => {
    return Record.find(query);
};

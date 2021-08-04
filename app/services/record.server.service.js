'use strict';

const Record = require('../models/record');

exports.getRecords = (query) => {
    return Record.find(query);
};


exports.getRecordsByDateAndCount = ({ startDate, endDate, minCount, maxCount }) => {
    return Record.aggregate([
        {
            $project: {
                _id: 0,
                key: 1,
                createdAt: 1,
                totalCount: { $sum: '$counts' }
            }
        },
        {
            $match: {
                createdAt: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                },
                totalCount: {
                    $gte: minCount,
                    $lte: maxCount
                }
            }
        }
    ]);
};
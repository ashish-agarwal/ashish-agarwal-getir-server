'use strict';

const RecordService = require('../services/record.server.service');

exports.get = async (req, res, next) => {
    try {

        if (!req.body.startDate || !req.body.endDate || !req.body.maxCount || !req.body.minCount) {
            const err = new Error('Missing fields in body');
            err.status = 400;
            throw err;
        }
        const records = await RecordService.getRecordsByDateAndCount(req.body);
        return res.send({ msg: 'Success', code: 0, records });
    } catch (err) {
        next(err);
    }
};

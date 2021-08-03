'use strict';

const RecordService = require('../services/record.server.service');

exports.get = async (req, res, next) => {
    try {
        const result = await RecordService.getRecords(req.body);
        return res.send({ msg: 'Success', code: 0, result });
    } catch (err) {
        next(err);
    }
};

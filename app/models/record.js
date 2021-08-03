'use strict';

const mongoose = require('mongoose'), { Schema } = mongoose;

const RecordSchema = new Schema(
    {
        key: {
            type: String,
            trim: true
        },
        value: {
            type: String,
            trim: true
        },
        counts: [Number]
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Record', RecordSchema);
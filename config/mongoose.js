'use strict';

const mongoose = require('mongoose'),
    config = require('./index');
mongoose.Promise = global.Promise;

// Bootstrap db connection
mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.once('open', () => {
    console.log('DB connected ' + config.db);
});

mongoose.set('debug', process.env.NODE_ENV !== 'production');

mongoose.connection.on('error', () => {
    setTimeout(() => {
        if (mongoose.connection.readyState === 0) {
            mongoose.connect(config.db);
        }
    }, 1000);
});

mongoose.connection.on('disconnected', () => {
    setTimeout(() => {
        if (mongoose.connection.readyState === 0) {
            mongoose.connect(config.db);
        }
    }, 1000);
});
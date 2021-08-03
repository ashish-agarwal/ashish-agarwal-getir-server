'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/* Loads the configuration from .env file */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const chalk = require('chalk');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Connect to mongodb */
require('./config/mongoose');

// Load all the routes
const appRoutes = require('./app/routes/app.routes');
app.use('/api/v1/', appRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  return res.status(404).send({ message: 'Not found' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  return res.send({ msg: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error', code: err.status || 500 });
});

console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), process.env.PORT || 3000, process.env.NODE_ENV);

console.log('  Press CTRL-C to stop\n');

module.exports = app;

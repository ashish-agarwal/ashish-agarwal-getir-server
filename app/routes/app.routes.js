'use strict';

const express = require('express');
const router = express.Router();

const RecordController = require('./../controllers/record.server.controller');

/* All the module APIs goes here */
router.post('/records', RecordController.get);

module.exports = router;

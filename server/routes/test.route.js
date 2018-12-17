const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const test_controller = require('../controller/test.controller');


// a simple test url to check that all of our files are communicating correctly.

router.post('/scheduleTest', test_controller.examSet);
router.post('/fetchTest', test_controller.fetchExam);

module.exports = router;
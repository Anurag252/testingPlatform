const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const question_controller = require('../controller/question.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', question_controller.test);
router.get('/id', question_controller.question_details);
router.post('/create', question_controller.question_create);
module.exports = router;
const exam = require('../models/test.model');


exports.examSet = function (req, res) {

    let examTest = new  exam({
accessCodeprop : req.body.accessCode,
name : req.body.name,
time: req.body.time,
maximumScore : req.body.maximumScore,
questions :req.body.questions
    });


    examTest.save(function(err){
        if (err) {
            console.log(err);
            return err;
        }
    }
);


res.send('The test has been scheduled.The access code is ' + examTest.accessCodeprop.accesCodestr);


};
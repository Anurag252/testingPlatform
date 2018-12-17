const exam = require('../models/test.model');

exports.examSet = function (req, res) {

let examTest = new  exam({
accessCodeprop : req.body.accessCode,
name : req.body.name,
time: req.body.time,
maximumScore : req.body.maximumScore,
questions :req.body.questions
    });


    examTest.save()
    .then(()=>{res.status(200).send('The test has been scheduled.The access code is ' + examTest.accessCodeprop)})
    .catch(()=>{res.status(400).send('error occured while scheduling the test');
});
    


res.send('The test has been scheduled.The access code is ' + examTest.accessCodeprop.accesCodestr);


};

exports.fetchExam = function(req , res)
{
let accessCode  = req.body.accessCode ; 
let emailId = req.body.emailId;

exam.find({
            'accessCodeprop.accessCodestr' : accessCode ,
            'accessCodeprop.emailIdAllowed' : emailId
         },
         function(err,data){
             if (err){
                 res.send(err);
             }
             else {
              // var examModel = JSON.parse(data);
              delete data[0].accessCodeprop.emailIdAllowed;
               res.json(data[0]);
             }
         })
         

};
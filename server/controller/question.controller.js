const question = require('../models/question.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.question_create = function (req, res) {
    let questionTest = new question(
        {   id : req.body.id,
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            option4: req.body.option4,
            answer : req.body.answer
        });

        questionTest.save(function (err) {
            if (err) {
                console.log(err);
                return err;
            }
            res.send('Product Created successfully')
        });
    };

  

    exports.question_details = function (req, res) {
           let requestedId = req.query.id;
       
           let questionTest = new question();
          var query =   question.find({id : requestedId});
          query.exec(function (err, docs) {
              docs.forEach(function(value , index , docs)
            {
                if(index == requestedId)
                {
                    res.send(docs[index]);
                }
            })
          })
        };
    


  

  
  

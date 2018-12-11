const mongoose = require('mongoose');
const analyticsSchema = require('../models/analytics.model');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
   id : {type: String, required: true, max: 1000},
   
  // analytics : {type : typeof(analyticsSchema) ,required : false  },

    question : {type: String, required: true, max: 1000},
    
    option1 : {type: String, required: true, max: 100},
    
    option2 : {type: String, required: true, max: 100},
    
    option3 : {type: String, required: true, max: 100},
  
    option4 : {type: String, required: true, max: 100},
  
    answer : {type: String, required: true, max: 100}
});

 

// Export the model
module.exports = mongoose.model('question', QuestionSchema);
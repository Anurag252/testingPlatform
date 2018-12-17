const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const question = require('question.model');
const accessCodeimp = require('../models/accessCode.model');

let exam = new Schema({
name : {type :  String , required : true , max:100},
//time in minutes
time : {type : Number , required :  true , max : 999},

maximumScore : {type :  Number , required : true , max : 1000} ,
//array of questions
questions : [{type: String , required : true , max : 500}],

accessCodeprop : {type : {accessCodestr : {type : String ,  required : true  , max : 30},
emailIdAllowed : {type : String , required : true , max : 50} ,
expiryDate : {type : String , required : true  } 
} ,required : true }
});

module.exports = mongoose.model('exam',exam);

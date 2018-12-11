const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const question = require('test.model');
const accessCodes = require('accessCode.model');

let user = new Schema({
  accessCode = {type : accessCodes ,  required : true  , max : 30},
  emailId = {type : string , required : true , max : 50} ,
  score = {type : number , required : true , max : 1000 } , 
});

module.exports = mongoose.model('user', user);
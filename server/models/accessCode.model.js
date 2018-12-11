const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let accessCode = new Schema({
    accessCodestr : {type : String ,  required : true  , max : 30},
    emailIdAllowed : {type : String , required : true , max : 50} ,
    expiryDate : {type : String , required : true  } 
  });

  module.exports = mongoose.model('accessCode', accessCode);
  module.exports = accessCode;
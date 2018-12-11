const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let AnalyticsSchema = new Schema({
    correctCount : {type :Number , required : true , max : 10000},
    totalShowCount : {type : Number , required : true , max : 10000},
    totalTimeSpent : {type : Number , required : true , max: 9999999} ,

});


module.exports = mongoose.model('analytics', AnalyticsSchema);
//mongoose for accessing mongo in node.set a variable mongoose
var mongoose =require('mongoose');

//make a object Schema of mongoose.Schema
var Schema= mongoose.Schema;


//Schema for our database
var userSchema = new Schema({
    name:  String,
    type:  String,
    rank:  String,
    year_of_establishment: String,
    courses: 
    {
    name: String,
    fees: String,
    course_duration: String
}

});



// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "university"
var user = mongoose.model('university', userSchema,'university');
module.exports = user;

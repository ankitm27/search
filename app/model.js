var mongoose =require('mongoose');
var Schema= mongoose.Schema;

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



// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
var user = mongoose.model('university', userSchema,'university');
module.exports = user;

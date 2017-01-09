//require for accessing mongo in node
var mongoose        = require('mongoose');

//require for accessng model.js in routes
var user            = require('./model.js');



//expoorts all the function
module.exports = function(app) {

//request at search by university name ex-kiet
app.post('/course', function(req, res){
        // Uses Mongoose schema to run the search ex-"name":data due to search for specific college 
        var data = req.body.firstName;
        data = "^"+data
        user.find({name:{$regex:data,$options:"$i"}} ,function(err, users){
        if(err){
	console.log('err');
        res.send(err);
 }
      res.json(users);
});
    });

//request at search by course name ex-java  
app.post('/university', function(req, res){
        // Uses Mongoose schema to run the search ex-"course.name":data due to search specific course
        var data = req.body.courseName;
        data = "^"+data;
        user.find({"courses.name":{$regex:data,$options:"$i"}},{"name":1,"type":1,"rank":1,"year_of_establishment":1,"courses.$":1} ,function(err, users){
        if(err){
        console.log('err');
        res.send(err);
 }
      console.log(users);
      res.json(users);
});
    });
};  




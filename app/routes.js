
var mongoose        = require('mongoose');
var user            = require('./model.js');


module.exports = function(app) {
app.post('/course', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
        console.log(req.body.firstName);
        var data = req.body.firstName
        user.find({"name":data} ,function(err, users){
        if(err){
	console.log('err');
        res.send(err);
 }
      res.json(users);
});
    });


app.post('/university', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
        console.log(req.body.CourseName);
        var data = req.body.CourseName;
        user.find({"courses.name":data},{"name":1,"type":1,"rank":1,"year_of_establishment":1,"courses.$":1} ,function(err, users){
        if(err){
        console.log('err');
        res.send(err);
 }
      console.log(users);
      res.json(users);
});
    });




};  


//db.university.find({ $or: [{"name": "kiet"},{"name":"akg"}]}).pretty()


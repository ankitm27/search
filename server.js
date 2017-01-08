var express         = require('express');
var mongoose        = require('mongoose');
var bodyParser = require('body-parser');
var port            = process.env.PORT || 3000;
var app             = express();

// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
//require('./app/routes.js')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//mongoose.connect("mongodb://localhost/MeanMapApp");
//console.log(mongoose.connection.readyState);
//console.log(mongoose.connection.readyState);
//var db = mongoose.connection;
//db.on('error',console.error.bind(console,'connection error:'));
//db.once('open',function(){
//console.log("db connected");
//});


mongoose.connect('mongodb://127.0.0.1/MeanMapApp', function (error) {
    if (error) {
        console.log(error);
    }
});

//app.use(require('connect').bodyParser());
app.use(express.static(__dirname + '/public'));
require('./app/routes.js')(app);

// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);

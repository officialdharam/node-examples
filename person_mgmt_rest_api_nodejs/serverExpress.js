var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var mongoUrl = 'mongodb://localhost/noderest';
mongoose.connect(mongoUrl);

var db = mongoose.connection;
db.on('error', function() { 
	throw new Error('Unable to connect to database '+ mongoUrl);
});

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./models/persons');
require('./route')(app);

app.listen(3002);
console.log('Server listening @ http://localhost:3002');
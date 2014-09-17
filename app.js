var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');


var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/SOMTHINGHERE')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);//points to what I want user to see.

// app.get('/', function(req, res) {
// 	res.send('<h1>Hello Boulder</h1>');
// });

var server = app.listen(process.env.PORT || 5248, function() {
	console.log('Express server listening on port ' + server.address().port);
});

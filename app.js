var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var connection = require('./connection');
var routes = require('./routes');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/app'));

connection.init();
routes.configure(app);

var server = app.listen(8000, function() {
	console.log("server listening on port " + server.address().port);
});
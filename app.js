var express = require('express');
var app = express();

app.use(express.static('public'))// inside the public are css and html files

var server = app.listen(3000, function() {
	console.log(' Server is running in port 3000'); //for the user to know that is working in termnial

});
var express = require("express");
var app = express();
app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendFile('index.html');
})
app.get('/aboutus', function(req,res){
	res.sendFile('about-us-page.html')
})
app.get('/menu', function(req,res){
	res.sendFile('Imenu.html');
})
app.get('/ordernow',function(req,res){
	res.sendFile('order-now.html');
})

app.listen(3000, function(){
	console.log('running at port 3000');

})
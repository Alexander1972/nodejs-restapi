var express = require('express');
var app = express();
//normaliy port should be saved in env var.
var port = process.env.PORT || 3000;


app.use('/', function(req, res, next){
  console.log('Request Url: ' + req.url);
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/person/:id', function (req, res) {
  res.send('Hello World! id ' + req.params.id);
});
//app.use("/assets", express.static(__dirname + '/public'));


app.get('/api', function(req, res){
  res.json({firstname:"John", lastName:"Smith"});
});

var server = app.listen(port, function () {
  var host = server.address().address;
  console.log('Example app listening at http://%s:%s', host, port);
});

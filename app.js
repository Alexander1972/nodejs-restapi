var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//normaliy port should be saved in env var.
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');


app.use('/', function(req, res, next){
  console.log('Request Url: ' + req.url);
  next();
});

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/person/:id', function (req, res) {
  res.send('Hello World! id ' + req.params.id);
});

app.get('/querystring/:id', function (req, res) {
  res.send('Hello World! id', {id: req.params.id, Qstr: req.query.qstr});
});

app.post('/person', urlencodedParser, function (req, res) {
  res.send('Thank you');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.use("/assets", express.static(__dirname + '/public'));


app.get('/api', function(req, res){
  res.json({firstname:"John", lastName:"Smith"});
});

var server = app.listen(port, function () {
  var host = server.address().address;
  console.log('Example app listening at http://%s:%s', host, port);
});

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// get POST parameter
app.use(bodyParser.json());

app.set('views', __dirname + '/client/');

// page routes
app.get('/', function(req,res) {
    res.render(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client/'));

app.listen(port)
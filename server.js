var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var dbUrl1 = 'mongodb://localhost/rest_test';
var dbUrl2 = 'mongodb://dbuser:dbpassword@ds057224.mongolab.com:57224/mytodo_db';
mongoose.connect(dbUrl1);

var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.get('/', function(req, res){
  res.send('Swee! Running on port 3k!');
});

app.listen(3000);
console.log('Swee! Running on port 3k!');

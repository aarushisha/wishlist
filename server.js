var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db.js');
var sequelize = db.sequelize;
var addItem = db.addItem;

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/addItem', function(req, res) {
  console.log(req.body.name);
  addItem(req.body.name, function(results) {
    if (results) {
      res.send(results);
    }
  });
})

app.listen(8888);
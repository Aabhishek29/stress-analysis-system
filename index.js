const rest = require('./src/rest/users.js');

const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var fs = require("fs");

app.use(bodyParser.json())

app.use('/',rest)

app.get('/', function (req, res) {
    console.log("Howdy msg display")
   res.send('Hawdy, Welcome to my application...');
})

app.use('/users',rest)



var server = app.listen(8081, function () {
//    var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
})


module.exports = {app}
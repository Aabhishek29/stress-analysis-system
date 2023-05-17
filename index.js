const userRestController = require('./src/controllers/rest/usersRestController.js');
const connectDB = require('./src/model/connect');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var cors = require('cors');

connectDB()

app.use(bodyParser.json())

app.use(cors());
// here we write all the API paths
app.use('/',userRestController)

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
app.get('/', function (req, res) {
    console.log("Howdy msg display")
   res.send('Hawdy, Welcome to my application...');
})


var server = app.listen(8081, function () {
//    var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
})


module.exports = {app}
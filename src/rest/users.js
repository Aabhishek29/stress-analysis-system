var express = require('express');


const rest = express.Router();

rest.get('/users',(req, res) => {
    res.send("All users data present here");
})


rest.get('authenticate',(req,res)=> {
    
});


// app.get('/listUsers', function (req, res) {
//     fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
//        console.log( data );
//        res.end( data );
//     });
//  })

module.exports = rest;
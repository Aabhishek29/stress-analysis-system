var express = require('express');
const Users = require('../model/Users');


const rest = express.Router();

const getAllData = async () => {
    var temp =  await Users.find();
    console.log("the calue of data is ",temp);
    return temp;
}

rest.get('/users',(req, res) => {
    var data = getAllData();
    console.log(data)
    res.send("All users data present here"+data);
})

// rest.get('/usersList', function(req, res) {
//     Users.find({}, function(err, users) {
//       var userMap = {};
  
//       users.forEach(function(user) {
//         userMap[user._id] = user;
//       });
  
//       res.send(userMap);  
//     });
//   });

rest.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

rest.get('authenticate',(req,res)=> {
    
});


// app.get('/listUsers', function (req, res) {
//     fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
//        console.log( data );
//        res.end( data );
//     });
//  })

module.exports = rest;
var express = require('express');
const Users = require('../../model/Users');
const userRestController = express.Router();


rest.get('/users',async (req, res) => {
    const data = await Users.find();
    res.status(200).json(data);
})

rest.post('/addUsers', async (req, res) => {
    console.log("Value of req is ", req.body)
    if(!req.body.name) {
        res.status(400);
        console.log("please add some data");
    }
    let data = null;
    try {
        console.log(`here is the first name ${req.body.name}`)
        data = await Users.create({
            name: req.body.name,
            emailId: req.body.emailId,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
        });
    }catch (e) {
        data = e.body;
        console.log(`please re-enter data ${e}`);
        res.status(400).json({error: data})
    }
    res.status(200).json({"message": "User Created Successfully"});
})

userRestController.post('/authenticate', async (req,res) => {
    if(!req.body.username) {
        res.status(400);
        console.log("please send data");
    }
    let data = null;
    try {
        let username = req.body.username;
        let password = req.body.password;
        let res = Users.findOne({
            name: username
        })
        if(res) {
            console.log(res)
        }
    }catch (e) {
        data = e.body;
        console.log(`please check data ${e}`);
        res.status(400).json({error: data})
    }
    res.status(200).json({"authenticate": true});
})

module.exports = userRestController;
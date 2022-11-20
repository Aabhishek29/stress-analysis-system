const mongoose = require("mongoose");
const Users = require("./Users");

var url = "mongodb://localhost:27017/stressibye";


// connection creation and creating new database
mongoose.connect(url).then(()=>{
        console.log("Connection stablished between app and database");
}).catch((err)=>{
    console.log("there is some issue in connection",err);
});

const tempData = new Users({
  firstName: "abhishek",
  lastName: "singh",
  emailId: "abhi2907singh@gmail.com",
  age: 20,
  phoneNumber: "9897144223",
  stressLevel: 33
})

tempData.save().then(()=>{
    console.log("data stored successfully...");
}).catch((err)=>{
    console.log("There is some issue ",err);
})
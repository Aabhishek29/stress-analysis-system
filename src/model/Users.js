let mongoose = require("mongoose");

let UserSchema =mongoose.Schema({
    name :{
        type: String,
        require: [true, "Please enter name"]
    },
    emailId: {
        type: String,
        require: [true, "Please enter your email"]
    },
    password: {
        type: String,
        require: [true, "Please enter your password"]
    },
    phoneNumber: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


module.exports=mongoose.model("Users",UserSchema);
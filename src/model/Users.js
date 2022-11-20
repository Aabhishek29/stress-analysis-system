var mongoose = require("mongoose");

var UserSchema =mongoose.Schema({
    firstName:String,
    lastName:String,
    emailId:String,
    age: Number,
    phoneNumber: String,
    stressLevel: Number,
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
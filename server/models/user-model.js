const mongoose = require("mongoose")

// define the schema 
const userSchema = new nongoose.Schema({
    username : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    phone : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    }
})

// define the model or collection 
const User = new mongoose.model("User",userSchema)

modul.exports = User  ;
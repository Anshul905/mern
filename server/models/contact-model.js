const { Schema , model } = require("mongoose")

// define the schema 
const contactSchema = new Schema({
    username : {
        type : String,
        require : true,
    },
    email : {
        type : String, 
        require : true,
    },
    message : {
        type : String,
        require : true,
    },
})

// define the model or collection 
const Contact = new model("Contact",contactSchema)
module.exports = Contact  ;
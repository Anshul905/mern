const mongoose = require("mongoose")

// local 
// const URI =  "mongodb://127.0.0.1:27017/temp"

// Connecting to Atlas 
// const URI = "mongodb+srv://anshulneekhara:qwerty1234@cluster0.zexv96y.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"
const URI = process.env.MONGODB_URI

const connectDb = async () => {
    try {
        await mongoose.connect(URI) ;
        console.log("Database Connection Successful");
    } catch (error) {
        console.error("Database Connection Failed");
        process.exit(0) ;
    }
}

module.exports = connectDb
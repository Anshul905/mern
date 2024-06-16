const mongoose = require("mongoose")

const URI =  "mongodb://127.0.0.1:27017/temp"

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
// to use dotenv file
require("dotenv").config()


const express = require("express")
const app = express() 
const PORT = 3000

// middleware - parses json data from request bodies ( postman )
app.use( express.json() )
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Mount the Router 
const authRouter  = require("./router/auth-router")
const contactRouter  = require("./router/contact-router")
app.use("/api/auth" , authRouter )
app.use("/api/form" , contactRouter )





// app.get(  '/' , (req,res) => {
    //     res.send('welcome to home page');
    // } )
    // app.get(  '/register' , (req,res) => {
        //     res.send('welcome to register page');
        // } )
        

// error handling
const errorMiddleware = require("./middlewares/error-middleware")
app.use(errorMiddleware)
        

const connectDb = require("./utils/db")
connectDb().then( () => {
    app.listen( PORT , () => {
        console.log(`Server is running on port no. ${PORT}`);
    });
});



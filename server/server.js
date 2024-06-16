const express = require("express")
const app = express() 
const PORT = 3000


// Mount the Router 
const router  = require("./router/auth-router")
app.use("/api/auth" , router )

// middleware - parses json data from request bodies 
app.use( express.json() )





// app.get(  '/' , (req,res) => {
//     res.send('welcome to home page');
// } )
// app.get(  '/register' , (req,res) => {
//     res.send('welcome to register page');
// } )



app.listen( PORT , () => {
    console.log(`Server is running on port no. ${PORT}`);
});


const express = require("express")
const router = express.Router() 

const validate = require("../middlewares/validate-middleware")

const authControllers = require("../controllers/auth-controllers")
const signupSchema = require("../validators/auth-validator")

router.route('/').get( authControllers.home )

router.post("/register", 
            async (req, res, next) => { validate(signupSchema, req, res, next); } ,
            authControllers.register
);
// router.route('/register').post( validate(signupSchema) , authControllers.register )


router.route( '/login' ).post( authControllers.login )  











// const { home , register , login } = require("../controllers/auth-controllers")
// router.route('/').get( home )
// router.route('/register').get( register )
// router.route( '/login' ).get( login ) 



// router.get(  '/' , (req,res) => {
//     res.send('welcome to home page - router');
// } )
// router.route( '/register' ).get( (req,res) => {
//     res.send('welcome to register page - router ');
// } )
// router.route( '/login' ).get( (req,res) => {
//     res.send('welcome to login page - router ');
// } )


module.exports = router ;











// express.Router is a class in Express.js that allows you to create modular, mountable route handlers. By using express.Router, you can:

// Organize routes: 
//     Keep your code clean by separating routes into different files.
// Improve maintainability: 
//     Easier to maintain and scale your application with modular routes.
// Reuse middleware: 
//     Apply middleware to specific groups of routes without duplication.
// Enhance flexibility: 
//     Mount router modules on any path to build complex routing structures.
// It’s a great way to structure your application for better readability and maintainability.👍

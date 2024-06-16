const User = require("../models/user-model")


// HOME LOGIC 
const home = async ( req,res ) => {
    try {
        res.send('welcome to home page - controllers');
    } catch (error) {
        console.log(error);
    }
}


// REGISTER LOGIC 
const register = async ( req,res ) => {
    try {
        console.log(req.body);

        const { username , email , phone , password } = req.body ;

        const userExist = await User.findOne( {email } )

        if( userExist ){
            return res.status(400).json( { msg : "User already exist " } )
        }
        await User.create( { username , email , phone , password } ) ;

        res.json( { message : req.body } )

    } catch (error) {
        res.status(500).send( {mgs : "internal server error" }  ); 
    }
}

// LOGIN LOGIC 
const login = async ( req,res ) => {
    try {
        res.send('welcome to login page - controllers ');
    } catch (error) {
        res.status(400).send( {mgs : "page not found" }  ); 
    }
}


module.exports = { home , register , login }
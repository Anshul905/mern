const User = require("../models/user-model")
const bcrypt = require("bcrypt");


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
        console.log('auth page');
        // console.log(req.body);

        const { username , email , phone , password } = req.body ;

        const userExist = await User.findOne( {email } )

        if( userExist ){
            console.log('User Already Exists');
            return res.status(400).json( { msg : "User already exists " } )
        }

        console.log('New user');
        const userCreated =  await User.create( { username , email , phone , password} ) ;


        res.status(201).json( { 
            // message : userCreated , 
            message : "registration successful" , 
            token : await userCreated.generateToken()  , 
            userId : userCreated._id.toString(),        
        } );
        
        // //hash the password 
        // const saltRound = await bcrypt.genSalt(10)  
        // const hash_password = await bcrypt.hash( password , saltRound );
        // await User.create( { username , email , phone , password:hash_password } ) ;
        // res.status(201).json( { message : { username , email , phone , hash_password } } )


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
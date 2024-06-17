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
        console.log('auth - registration logic');
        // console.log(req.body);

        const { username , email , phone , password } = req.body ;

        const userExist = await User.findOne( {email } )

        if( userExist ){
            console.log('User Already Exists');
            return res.status(400).json( { msg : "User Already Exist" } )
        }

        console.log('auth - new user');
        const userCreated =  await User.create( { username , email , phone , password} ) ;

        res.status(201).json( { 
            message : "registration successful" , 
            token : await userCreated.generateToken()  , 
            userId : userCreated._id.toString(),        
        } );
    
        // //hash the password 
        // const saltRound = await bcrypt.genSalt(10)  
        // const hash_password = await bcrypt.hash( password , saltRound );
        // await User.create( { username , email , phone , password:hash_password } ) ;
        // res.status(201).json( { message : { username , email , phone , hash_password } } )


    } catch (err) {
        res.status(500).send( {mgs : "internal server error" }  ); 

        // const status = 500 ;
        // const message = "internal server error" ;
        // const extraDetails = "" ;
        // const error = { status , message , extraDetails }
        // next(error)
    }
}



// LOGIN LOGIC 
const login = async ( req,res ) => {
    try {
        console.log('auth - login logic');
    
        
        const { email, password } = req.body ;
    
        const userExist = await User.findOne({email}) ;
        console.log(userExist);
        
        if(!userExist){
            console.log('User does not exist , need to registered first');
            return res.status(400).json( { message : "User does not exist" } )
        }

        const user = await userExist.comparePassword( password )

        
        if( user ){            
            console.log("Login successful");
            res.status(200).json( { 
                message : "Login successful" , 
                token : await userExist.generateToken()  , 
                userId : userExist._id.toString(),        
            } );    
        }else{ 
            res.status(401).json( { message : "Invalid Credentials" } )
        }
    } catch (err) {
        res.status(500).json( {mgs : "internal server error" }  ); 

        // const status = 500 ;
        // const message = "internal server error" ;
        // const extraDetails = "" ;
        // const error = { status , message , extraDetails }
        // next(error)
    }
}


module.exports = { home , register , login }
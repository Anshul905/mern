const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

// define the schema 
const userSchema = new mongoose.Schema({
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



// as a middleware 
// pre-save = before saving the data into db 
userSchema.pre( "save" , async function () {

    console.log("pre save method",this);    
    
    const user = this ;

    // if( !user.isModified("password")  ){
    //     console.log('User Already Created');
    //     next()
    // }

    // if only first time 
    try {
        const saltRound = await bcrypt.genSalt(10)  
        const hash_password = await bcrypt.hash( user.password , saltRound );
        user.password = hash_password        
    } catch (error) {
        console.log('ERROR : Password could not hashed');
        next(error)
    }

} )
// here 
    // not before complete registration function in auth because we have something to do before saving the data
    // registration func in auth if user already exists return if new user (  pre from this file  then back to registration fucntion in auth  ) 
    // that means iff new user is there because we are returning if user already exists 






// JWT - json 
userSchema.methods.generateToken = async function () {

    try {
        return jwt.sign(
            {
                userId : this._id.toString() , 
                email : this.email, 
                isAdmin : this.isAdmin, 
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d",
            }
        );
    } catch (error) {
        console.error(error);
    }
}

userSchema.methods.comparePassword = async function (password) {
    console.log('comparing password');
    return  bcrypt.compare( password , this.password )
} 





// define the model or collection 
const User = new mongoose.model("User",userSchema)

module.exports = User  ;
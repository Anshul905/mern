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
        res.json( { msg : req.body } )

        // res.json( { mgs : "welcome to register page - controllers" } )
        // res.send('welcome to register page - controllers ');
    } catch (error) {
        res.status(400).send( {mgs : "page not found" }  ); 
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
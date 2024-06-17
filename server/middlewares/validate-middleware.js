// first user data needs to be validate with zod's schema 


// const validate = (schema) = async (  req , res , next ) => {
const validate = async (schema, req, res, next) => {
    try {
        console.log('Validating data against schema constraints .... ');
        const parsedBody =  await schema.parseAsync(req.body) ;
        req.body = parsedBody ;
        next();
    } catch (err) {
        // err.errors -> array of errors 
        const status = 422 ;
        const message = "Fill the input properly" ;
        const extraDetails = err.errors[0].message ;
        const error = { status , message , extraDetails }
        
        
        console.log('Validation error - ' ,  extraDetails);
        // res.status(400).json( { message : msg } )
        next(error)
    }

}

module.exports = validate
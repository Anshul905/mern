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
        console.error('Validation error - ' ,  err.errors[0].message);
        res.status(400).json( { message : err.errors[0].message } )
    }

}

module.exports = validate
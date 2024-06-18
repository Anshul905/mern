const { z } =   require("zod");

const loginSchema = z.object({
    
    email : z
    .string({required_error:"Email is required"})
    .trim()
    .email( {message:"Invalid Email"}), 
 
    password : z
    .string({required_error:"Password is required"})

})


module.exports = loginSchema ;

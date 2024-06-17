const { z } =   require("zod");


const signupSchema = z.object({
    
    username : z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must have atleast 3 characters"})
    .max(30,{message:"Name must not have more than 30 characters"}) , 

    email : z
    .string({required_error:"Email is required"})
    .trim()
    .email( {message:"Invalid Email"})
    .min(3,{message:"Email must have atleast 3 characters"})
    .max(255,{message:"Email must not have more than 255 characters"}) , 

    phone : z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must have atleast 10 characters"})
    .max(20,{message:"Phone must not have more than 20 characters"}) , 

    password : z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,{message:"Password must have atleast 6 characters"})
    .max(1024,{message:"Password must not have more than 1024 characters"}) , 

})


module.exports = signupSchema ;

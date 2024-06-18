const { z } =   require("zod");

const contactSchema = z.object({
    
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

    message : z
    .string({required_error:"Message is required"})
    .trim()
    .min(3,{message:"Message must have atleast 3 characters"})
    .max(30,{message:"Message must not have more than 30 characters"}) , 

})


module.exports = contactSchema ;

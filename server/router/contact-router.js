const express = require("express")
const router = express.Router() 


const contact = require("../controllers/contact-controllers")
const validate = require("../middlewares/validate-middleware")
const contactSchema = require("../validators/contact-validator")

// router.route( '/contact' ).post( contact )  
router.post("/contact", 
            async (req, res, next) => { validate(contactSchema, req, res, next); } ,
            contact
);



module.exports = router ;
const Contact = require("../models/contact-model")

// CONTACT LOGIC 
const contactForm = async ( req,res ) => {
    try {
        console.log('auth - contact logic');
        
        const response = req.body ;
        await Contact.create( response ) ;
        res.status(201).json( { message : "Message sent successfully" });

    } catch (err) {
        res.status(500).send( {message : "Message not delivered" }  ); 
    }
}



module.exports = contactForm
const express = require("express")
const router = express.Router() 

console.log('router file');

const contact = require("../controllers/contact-controllers")

router.route( '/contact' ).post( contact )  



module.exports = router ;
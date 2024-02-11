const express = require('express');
const path = require('path');

const router = express.Router();

// Route to display the form
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname , '../' , 'views' , 'contact.html')); //can use rootdir as in shop.js
});

// Route to handle form submission
router.post('/contact', (req, res) => {

    console.log(req.body); //logs object with name and price from form

    console.log("contact save successfuly");
    res.redirect('/');
});

module.exports = router;

const express = require('express');
const path = require('path');

const router = express.Router();

// Route to display the form
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname , '../' , 'views' , 'add-product.html')); //can use rootdir as in shop.js
});

// Route to handle form submission
router.post('/add-product', (req, res) => {

    console.log(req.body); //logs object with name and price from form

    res.redirect('/');
});

module.exports = router;

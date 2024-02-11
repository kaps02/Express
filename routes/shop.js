
const express = require('express');
const path = require('path');
const rootdir = require('../util/path')

const router = express.Router(); // Use express.Router() to create router instance

router.get('/', (req , res) => {
    res.sendFile(path.join( rootdir ,'views' , 'shop.html')); 
}) ;

module.exports = router;

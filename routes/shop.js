
const express = require('express');
const router = express.Router(); // Use express.Router() to create router instance

router.get('/', (req , res) => {
    res.send('<h1>Welcome to home page of express!!!!</h1>');
}) ;

module.exports = router;

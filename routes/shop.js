
const express = require('express');


const shopController = require('../controllerrs/shop');
const router = express.Router(); // Use express.Router() to create router instance

router.get('/',shopController.homePage ) ;

module.exports = router;

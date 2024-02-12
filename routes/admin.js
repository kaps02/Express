const express = require('express');
const path = require('path');

const controller = require('../controllerrs/product')

const router = express.Router();

// Route to display the form
router.get('/add-product', controller.getAddProduct);

// Route to handle form submission
router.post('/add-product', controller.postAddProduct);

module.exports = router;

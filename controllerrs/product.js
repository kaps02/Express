
const path = require('path');

const Product = require('../modals/products')

exports.getAddProduct = (req, res) => {

    const allItem = Product.fetchAll();
    res.sendFile(path.join(__dirname , '../' , 'views' , 'add-product.html')); //can use rootdir as in shop.js
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    console.log("data of product :",req.body); //logs object with name and price from form

    res.redirect('/');
}
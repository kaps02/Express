const express = require('express');
const router = express.Router();

// Route to display the form
router.get('/add-product', (req, res) => {
    res.send(`
        <form action="/add-product" method="POST">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" name="productName"><br>
            <label for="productSize">Product Size:</label>
            <input type="text" id="productSize" name="productSize"><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Route to handle form submission
router.post('/add-product', (req, res) => {
    const productName = req.body.productName;
    const productSize = req.body.productSize;

    console.log("Product Name:", productName);
    console.log("Product Size:", productSize);

    res.redirect('/');
});

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the form
app.get('/add-product', (req, res) => {
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
app.post('/add-product', (req, res) => {
    const productName = req.body.productName;
    const productSize = req.body.productSize;

    console.log("Product Name:", productName);
    console.log("Product Size:", productSize);

    res.send('<h2>Product added successfully!<h2/>');
});

app.use('/', (req , res)=>{
    res.send('<h1>welcome to home page of express!!!!</h1>')
})
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000 ;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Mounting routes
app.use('/admin', adminRoutes); // admin/add-product
app.use(shopRoutes);    //remaining url

// Default route
app.use((req, res) => {
    res.send('<h1>error 404 page not define!!!!</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

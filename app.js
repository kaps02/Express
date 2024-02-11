const express = require('express');
const bodyParser = require('body-parser');
const path  = require('path')

const app = express();
const port = 3000 ;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const shopContact = require('./routes/contact');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// Mounting routes
app.use('/admin', adminRoutes); // admin/add-product
app.use('/connect' , shopContact);    //remaining url

app.use(shopRoutes);    //remaining url

// Default route
app.use((req, res) => {
    res.sendFile(path.join(__dirname , 'views' , '404.html'))
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

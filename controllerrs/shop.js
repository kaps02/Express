const path = require('path');
const rootdir = require('../util/path')

exports.homePage = (req , res) => {
    res.sendFile(path.join( rootdir ,'views' , 'shop.html')); 
}
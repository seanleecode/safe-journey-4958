var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Contact = require('../models/contact');

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// for testing
router.get('/products', function(req, res){
  res.send('products api is working haha');
})

Contact.methods(['get', 'put', 'post', 'delete']);
Contact.register(router, '/contact');

// return Router
module.exports = router;

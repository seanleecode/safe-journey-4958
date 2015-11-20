var restful = require('node-restful');
var mongoose = restful.mongoose;

var productSchema = new mongoose.Schema(
  {
    name: String,
    sku: String,
    price: Number,
    brand: [
      {
        name: String,
        country: String
      }
    ]
  }
);

module.exports = restful.model('Products', productSchema);

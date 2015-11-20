var restful = require('node-restful');
var mongoose = restful.mongoose;

var productBrandSchema = new mongoose.Schema(
  {
    name: String,
    country: String
  }
)
var productSchema = new mongoose.Schema(
  {
    name: String,
    sku: String,
    price: Number,
    brand: [
      productBrandSchema
    ]
  }
);

module.exports = restful.model('Products', productSchema);

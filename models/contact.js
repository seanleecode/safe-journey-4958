var restful = require('node-restful');
var mongoose = restful.mongoose;

var contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String
  }
);

module.exports = restful.model('Contact', contactSchema);

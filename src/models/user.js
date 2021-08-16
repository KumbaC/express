var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: String,
  email: String,
  key: String,

});

module.exports = mongoose.model('user', userSchema);

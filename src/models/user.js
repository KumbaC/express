var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var task = mongoose.model('task');


var userSchema = new Schema({
  name: String,
  email: String,
  key: String,

  task: { type: Schema.ObjectId, ref: "task" }
});

module.exports = mongoose.model("users", userSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var task = mongoose.model('task');

var categorySchema = new Schema({
    name: String,
    slug: String,
    
    task: { type: Schema.ObjectId, ref: "task" }
});

module.exports = mongoose.model("categories", categorySchema);

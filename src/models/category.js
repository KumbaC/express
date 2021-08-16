var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var task = mongoose.model('Task');

const CategorySchema = new Schema({
    
    name: String,
    slug: String,

    task_id: { type: Schema.ObjectId, ref: 'task' }
});

module.exports = mongoose.model('category', CategorySchema);
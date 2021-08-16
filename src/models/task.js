const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//var user = mongoose.model('user');


const TaskSchema = new Schema({

    title: String ,
    description: String ,  
    status: {
	  type: Boolean, 
	  default: false
	}, 

    user_id: { type: Schema.ObjectId, ref: 'user' }

 
   });

  module.exports =  mongoose.model('task',TaskSchema);
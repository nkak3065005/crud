var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({

text:{
type:String,
required:true
}


});


module.exports = mongoose.model('Beer',todoSchema); 
var userSchema = require('../models/user.js')

exports.postUser = function(req,res){

var user = new userSchema({
	
	name:req.body.name,
	password:req.body.password
	
});

user.save(function(err){
	
	if(err){
		
		res.send(err)
	}else{
		
		res.json(user)
		
	}
	
})


}
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

   name:{
   
		type:String,
		unique:true,
		required:true
	},
	
	password:{
		
		type:String,
		required:true		
	}



})

userSchema.pre('save',function(next){
	
	var user = this;
	bcrypt.genSalt('5',function(err,salt){
		
		if(err){
			
			res.send(err);
		}
		else{
			
			bcrypt.hash(user.password,salt,null,function(err,hash){
				
				if(err){
					
					res.send(err);
				}
				else{
					
				  user.password = hash;
                  next(user); 		  
                     					
				}
				
			})
			
		}
		
	})
	
	
	
})
module.exports = mongoose.model('user',userSchema);
	
	
	
	
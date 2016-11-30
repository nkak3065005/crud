var passport = require('passport');
var basicStrategy = require('passport-http').BasicStrategy;
var user = require('../models/user.js');
var bcrypt = require('bcrypt-nodejs');

passport.use(new basicStrategy(function(username,password,cb){
	
	user.findOne({name:username},function(err,user){
		
		if(err){
			
			return cb(err)
			
		}else{
			
			bcrypt.compare(password,user.password,function(err,isMatch){
				if(err){
					
					cb(err);
					
				}
				else{
					
					if(!isMatch){
						
						cb('password not matched')
						
					}else if(isMatch){
						
						
						cb(null,user);
						
					}
					
				}
				
				
			})
			
		}
		
		
		
	})
	
	
}))

exports.isAuthenticated = passport.authenticate(['basic', 'bearer'], { session : false });
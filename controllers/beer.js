var BeerSchema = require('../models/beer.js')

exports.postBeer = function(req,res){

var beer = new BeerSchema({

text: req.body.text

});

beer.save(function(err){

if(err){

res.json(err);

}else{
	
	res.json(beer);
	
}


})


}

exports.getBeer = function(req,res){
	
	BeerSchema.findById(req.params.todo_id,function(err,beer){
		
		if(err){
			
		res.send(err);	
			
		}else{		
			
			res.json(beer)
			
		}
		
		
	})
	
	
}

exports.delBeer = function(req,res){
	BeerSchema.findByIdAndRemove(req.params.todo_id,function(err){
	
      if(err){res.send(err)}
else{
	
	res.json({'message':'successfully deleted'})
}	  
		
	})
	
	
}
exports.putBeer = function(req,res){
	
	BeerSchema.findById(req.params.todo_id,function(err,beer){
		
		beer.text = req.body.text;
		beer.save(function(err){
			if(!err){
				
				res.json(beer);
				
			}
			
			
		})
		
	})
	
	
}
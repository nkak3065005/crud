var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todoapp');

var beerRouter = router.route('/beer');
var userRouter = router.route('/user');

var beer_idRouter = router.route('/beer/:todo_id');
var userController = require('./controllers/user.js'); 
var authController = require('./controllers/auth.js');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


var beerController = require('./controllers/beer.js')
userRouter.post(userController.postUser);

beerRouter.post(authController.isAuthenticated,beerController.postBeer);
beer_idRouter.put(beerController.putBeer);
beer_idRouter.get(authController.isAuthenticated,beerController.getBeer);
beer_idRouter.delete(beerController.delBeer)

app.use('/api',router);
app.listen('3000',function(){

console.log('here we go!!')

})

 
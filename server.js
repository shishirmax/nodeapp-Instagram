//grab the packages/variables we need
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//configure the app
//tell node where to look for the site resources
app.use(express.static(__dirname + '/public'));

//set the view engine to ejs
app.set('view engine','ejs');

//configure instagram app with client-id
//configure instagram app with client_id, client_secret and access_tocken
 ig.use({
// 	//get access tocken here: http://instagram.pixelunion.net/
 	access_token: '270361831.1677ed0.edc1c6730a62435d96a488978173b373'
 });

//alternatively we can use the client_id and client_secret
//for now we'll use the access_tocken way
// ig.use({
// 	client_id:'4c321e8345a64c6aa8f90ee5d2b95d96'
// 	client_secret:'067a6955a37f43bd967464946c9a227c' 
// });

//set the routes
//home page route - our profile's images
app.get('/',function(req,res){
	//use the instagram package to get our profile's media
	//render the home page and pass in the our profile's images
	ig.user_self_media_recent(function(err, medias, pagination, remaining,limit){
		res.render('pages/index',{grams: medias });
	});
});

//start the server
app.listen(2526);
console.log('App started! Look at http://localhost:2526');
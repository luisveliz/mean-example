





var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
	res.send("Hello World");
    //res.json({"error" : false,"message" : "Hello World"});

});

app.use('/',router);

app.listen(3000);
//console.log("Listening to PORT 3000");


var Book = require("./models").Book;
var User = require("./models").User;



var luis = new User({
	userEmail:"luisveliz@gmailaaaaaaaaaaaaaaaa.com",
	userPassword: "aloalo"
});

luis.save();
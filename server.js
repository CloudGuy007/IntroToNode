var express = require('express');
var router = express.Router();

var app = express();    


router.use('/', function(req,res,next){
    console.log(req);
    req.message = "Hello from router";
    next();})

router.route('/')
        .get(function(req,res){
            res.send(req.message);
            })
app.use(router);        

app.listen(8000, function(){
           console.log("Listening on port 8000");
           });


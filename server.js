var express = require('express');
var router = express.Router();
var path = require('path');

var app = express();    

app.use(express.static(path.join(__dirname, 'public')));


router.use('/', function(req,res,next){
    console.log(req);
    req.message = "Hello from router";
    next();})

router.route('/')
        .get(function(req,res){
            res.sendFile(path.join(__dirname+'/lib/views/index.html'));
            })
app.use(router);        

app.listen(8000, function(){
           console.log("Listening on port 8000");
           });


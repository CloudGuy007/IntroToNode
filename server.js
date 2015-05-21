var express = require('express');


var app = express();    

app.use(function(req,res,next){
    console.log(req);
    req.message = "Hello from middleware";
    next();
})

app.get('/', function(req,res){
    res.send(req.message);
})

app.listen(8000, function(){
           console.log("Listening on port 8000");
           });


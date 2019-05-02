//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
//


var express = require('express');
var ex = express();

// route definition
ex.get('/', function(req,res){
    res.send("Boas");
});

ex.listen(3000, function(){
    console.log('Aplicación no porto 3000');
});

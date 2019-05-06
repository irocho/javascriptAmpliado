//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
//


var express = require('express');
var ex = express();

// route definition
ex.get('/', function(req,res){
    res.send("Boas");
});

//manipulando un erro
//

ex.use(function (req, res, next) {
      res.status(404).send("Vaia, vai ser que non  teño tal")
})



ex.listen(3000, function(){
    console.log('Aplicación no porto 3000');
});

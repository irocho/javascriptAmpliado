// https://www.tutorialsteacher.com/nodejs/serving-static-files-in-nodejs
//


var express = require('express');
var app = express();


//setting middleware
app.use(express.static('web')); //as páxinas van estar na carpeta web/

var server = app.listen(5000);
console.log('servidor en localhost:5000');

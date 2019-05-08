//https://www.tutorialsteacher.com/nodejs/expressjs-web-application
//
var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
        //cómpre indicar o directorio de traballo
        res.sendFile('index.html', {root: __dirname});
});

app.post('/enviar', function (req, res) {
        var name = req.body.firstName + ' ' + req.body.lastName;
        res.send(name + ' saúdos dende o  .js!');
});

//app.use('/fotos', express.static(__dirname + '/fotos'));

//app.post('/submit-data', function (req, res) {
//        res.send('POST Request');
//});

//app.put('/update-data', function (req, res) {
//        res.send('PUT Request');
//});

//app.delete('/delete-data', function (req, res) {
//        res.send('DELETE Request');
//});

var server = app.listen(5000, function () {
        console.log('Node server is running port 5000..');
});

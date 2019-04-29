// https://www.w3schools.com/nodejs/nodejs_events.asp
//
// ou sexa creo un obxecto e un método


var events = require('events');
// creo un obxecto da clase EventEmitter
var evento = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
evento.on('berro', myEventHandler);

//Fire the 'scream' event:To fire an event, use the emit() method)
evento.emit('berro');

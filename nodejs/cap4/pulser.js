//páx 66
//
// EventEmitters
//
//Its purpose is to send timed events, once a second, to any listeners.

var events = require('events');
var util = require('util');


// crear clase
function Pulser(){
    events.EventEmitter.call(this);
}

util.inherits(Pulser, events.EventEmitter);

// método start
Pulser.prototype.start = function(){
    var self = this;
    this.id = setInterval(function(){
        util.log('>>>>>> pulse');
        self.emit('pulse');
        util.log('<<<<<<<<<<< pulse');
    },1000)
}
// Event names are defined simply by calling .emit with the event name.

// crear obxecto
var pulso = new Pulser();
pulso.on('pulse', function(){
    util.log('pulse received');
});

pulso.start();

//executar con node pulse.js

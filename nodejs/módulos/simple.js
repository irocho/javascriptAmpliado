// páx 38
//
// fabricación módulo cutre para cargalo na consola de node
//

var count = 0;
exports.next = function(){
    return count++;
}

//teclear en terminal:
//
//    var s = require('./simple');
//    s.next();
//
//debería ir botando a conta das veces que executo

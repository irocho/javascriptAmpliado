//https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
//
//

module.exports = function (nome, apelido){
    this.nome = nome;
    this.apelido = apelido;
    this.completo = function(){
        return this.nome + ' ' + this.apelido;
    }
}


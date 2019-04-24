//
// Mostra o contido dun ficheiro
//


fs = require('fs');
// fabrico unha función para ler o ficheiro que pase como parámetro
function ler(erro,datos){
    if(erro){ 
        console.log(erro);
    }else{ console.log(datos.toString());
    }
}

// o segundo parámetro é a función
fs.readFile('./arquivo_fabricado.txt',ler );

//rematou pero mostra esto antes: asincronía
console.log('cheguei á  derradeira liña');







//https://www.um.es/docencia/barzana/DAWEB/2017-18/daweb-NodeJS.pdf
// páxina 11
//

var ficheiro = require('fs');

ficheiro.writeFile('./arquivo_fabricado.txt','akjdsfa',
    function(error){
        if(error) console.log(error);
        else console.log('creouse o arquivo ');
    }
);


console.log('derradeira liña do programa');

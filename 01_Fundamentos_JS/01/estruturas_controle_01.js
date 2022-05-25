function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

console.log("------------------");
function seForVerdade(valor){
    if(valor){
        console.log(`É verdade... ${valor}`);
    }
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
seForVerdade(-1);
seForVerdade(" ");
seForVerdade("?");
seForVerdade([]);
seForVerdade([1, 2]);
seForVerdade({});

console.log("------------------");
function teste1(num){
    if(num > 7)
        console.log(num)
        
        console.log('Final')
}

teste1(6);
teste1(8);

console.log("------------------");
const imprimirResultado = function (nota) {
    if(nota >= 7){
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    };
};

imprimirResultado(8.1);
imprimirResultado(6.1);
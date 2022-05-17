let vetorInteiro = [1, 2, 3, 4];
let vetorString = ["Juliana", "Karla", "Maria Ester", "Bento"];
let vetorDouble = [1.1, 2.2, 3.3, 4.4];

let junto = vetorInteiro.concat(vetorDouble);

function concatenar (...args) {
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(junto);
console.log(concatenar(vetorString, vetorInteiro));
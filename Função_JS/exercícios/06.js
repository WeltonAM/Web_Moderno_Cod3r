function montante (capitalInicial, txJuros, tempoApl){
    return capitalInicial + (capitalInicial * txJuros * tempoApl)
}

function app (capitalInicial, txJuros, tempoApl){
    return capitalInicial * (1 + txJuros) ** tempoApl
}

console.log(montante(300, 0.1, 2));
console.log(app(300, 0.1, 2).toFixed(2));
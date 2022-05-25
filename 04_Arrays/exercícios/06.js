function iverso(valor){
    const tipo = typeof valor

    if(tipo == "boolean"){
        return !valor;
    } else if(tipo == "number"){
        return -valor;
    } else {
        return `Booleano ou Número esperados, mas o parâmetro é do tipo "${tipo}"`;
    }
}

console.log(iverso(true));
console.log(iverso(5));
console.log(iverso("6"));
console.log(iverso(-2000));
console.log(false);
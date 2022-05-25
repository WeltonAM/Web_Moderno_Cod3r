function anosDias(ano){
    if(ano > 0){
        ano = ano * 365
    }
    return ano
}

console.log(anosDias(25));
console.log(anosDias(70));
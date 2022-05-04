function notas(nota){
    if(nota >= 40) {
        
        if(nota % 5 > 2) {
            nota = nota + (5 - (nota % 5))
        }
        console.log(`Aprovado com nota: ${nota}!`);

    } else {
        console.log(`Reprovado com nota: ${nota}!`);
    }
}

notas(33);
notas(73);
notas(98);
notas(51);
notas(39);
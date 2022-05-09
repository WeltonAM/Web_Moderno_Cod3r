function planoSaude(person){
    let plano = 100;
    if(person <= 10){
        console.log(`Valor a pagar R$:${(plano + 80).toFixed(2)}`)
    } else if (person > 10 && person <= 30){
        console.log(`Valor a pagar R$:${(plano + 50).toFixed(2)}`)
    } else if (person > 30 && person <= 60){
        console.log(`Valor a pagar R$:${(plano + 95).toFixed(2)}`)
    } else {
        console.log(`Valor a pagar R$:${(plano + 130).toFixed(2)}`)
    }
}

planoSaude(10);
planoSaude(11);
planoSaude(31);
planoSaude(61);
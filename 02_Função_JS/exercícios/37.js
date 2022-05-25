function progAritimetica(termoUm, termos, razao){
    if(termos > 0 && termoUm > 0 && razao > 0){
        for(let i = 0; i < termos; i++){
            let resutado = (termoUm + razao * i);
            console.log(resutado);
        }
        let soma = (termos * (termoUm + (termoUm + ((termos-1)*razao))))/2;
        console.log("Soma: " + soma);
    }
}

progAritimetica(10, 10, 15);

console.log("--------------");
function progGeometrica (termos, termoUm, razao){
    for(let i = 0; i < termos; i++){
        console.log(termoUm*(razao**i))
    }
    console.log('Soma: ' + (termoUm * ((razao ** termos)-1))/(razao-1))
}

progGeometrica(10, 5, 3);
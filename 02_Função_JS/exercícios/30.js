function letVetor(item){
    
    let menor;
    let maior;
    
    for (let i = 0; i < item.length; i++){
        if (maior === undefined && menor === undefined){
            maior = item[i]
            menor = item[i]
        } else {
            if (item[i] > maior){
                maior = item[i]
            }
            if(item[i] < menor){
                menor = item[i]
            }
        }
    }

    console.log(`O menor valor é ${menor} \n O maior valor é: ${maior}`);
}

var vetor = [2, 3, 99, 5, 6, 7, 3, 1];
letVetor(vetor);
function mediaAritmetica(item){
    
    soma = 0;
    for(i = 0; i < item.length; i++){
        soma += item[i];
    }

    console.log(`A média aritmética é: ${soma / item.length}`);
}

let vetor = [2, 3, 4, 5, 6, 7];
mediaAritimetica(vetor);
function negativos(item){
    
    qtd = 0;

    for(i = 0; i < item.length; i++){
        if(item[i] < 0){
            qtd++
        }
    }

    console.log(`Quatidade de números negativos: ${qtd}`)
}

let vetor = [2, 3, 4, -1, 5, -6, 0, -7];
negativos(vetor);   
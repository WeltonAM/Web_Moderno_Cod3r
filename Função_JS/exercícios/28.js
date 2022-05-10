function lerVetor(vetor){
    let vetorPar = [];
    let vetorImpar = [];
    
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            vetorPar.push(vetor[i])
        } else {
            vetorImpar.push(vetor[i]);
        }
    }
    
    console.log(`Valores impares: ${vetorPar}`);
    console.log(`Valores impares: ${vetorImpar}`);
}
vetor = [2, 3, 4, 5, 6, 7, 8]
lerVetor(vetor); 
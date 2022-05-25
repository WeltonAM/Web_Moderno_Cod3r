function percorrerVetor(vetores){
    
    qtdFora = 0
    qtdDentro = 0
    
    for(i = 0; i < vetores.length; i++){
        if(vetores[i] >= 10 && vetores[i] <= 20){
            qtdDentro++
        } else {
            qtdFora++
        }
    }

    console.log(`Valores fora: ${qtdFora} \n Valores dentro: ${qtdDentro}`)
}

let vetor = [9, 10, 14, 15, 19, 20, 21]
percorrerVetor(vetor);
function um (a, b){
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            let mult = a[i] * b[j];
            console.log(mult);
        }
    }
}

function dois (a, b){
    if(a.length > 5 || b.length > 5){
        um();
    } else {
       console.log ("Valores insuficientes!");
    }
}

um([1, 2, 3], [2, 3, 4]);
dois([1, 2, 3], [2, 3, 4]);



/* 
let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))
*/
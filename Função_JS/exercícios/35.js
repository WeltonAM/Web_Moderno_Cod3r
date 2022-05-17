let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function adiciona(a, b) {
    for(let i = 0; i < b.length; i++) {
        console.log(b[i])
        a.push(b[i])
    }
    console.log('Vetor adicionado: ' + b);
    console.log('Vetor resultado: ' + a);
}

adiciona(vetorPilha, vetorAdiciona);
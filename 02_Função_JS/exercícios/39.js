function mudarVetores(a, b){
    if(a.length === b.length){
        for(let i = 0; i < a.length; i++){
            a[i] = a[i] + b[i];
            b[i] = a[i] - b[i];
            a[i] = a[i] - b[i];
        }
    } else {
        console.log("Vetores de tamanhos diferentes");
    }

    console.log('Novo vetor A: ' + a)
    console.log('Novo vetor B: ' + b)
}

let a = [1, 2, 3];
let b = [4, 5, 6];

mudarVetores(a, b);
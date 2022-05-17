function notas(nota) {
    let conceitos = []
    for(let i = 0; i < nota.length; i++) {
        if(nota[i] >= 0 && nota[i] < 5){
            conceitos.push('D')
        } else if(nota[i] >= 5 && nota[i] < 7) {
            conceitos.push('C')            
        } else if(nota[i] >= 7 && nota[i] < 9) {
            conceitos.push('B')
        } else if(nota[i] >= 9 && nota[i] <= 10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')
       }
    }
    return conceitos
}

let nota = [10, 13, 9, 8.2, 2.5, 7.7, 4.9, 0]
let vetorConceitos = notas(nota)

console.log(vetorConceitos)
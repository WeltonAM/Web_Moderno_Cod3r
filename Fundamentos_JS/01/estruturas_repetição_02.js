/* 
let contador = 1;
while(contador <= 10){
    console.log(`Contador = ${contador}`)
    contador++
};
*/

for(let i = 1; i <=10; i++){
    console.log(`Contador = ${i}`)
}

console.log(`----------------`)
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length; i++){      // correto é usar "let"
    console.log(`Nota = ${notas[i]}`)
}

console.log(`----------------`)
const notas1 = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i in notas1){         // correto é usar "let"
    console.log(`Nova nota = ${notas1[i]}`)
}

console.log(`----------------`)
const pessoa = {
    nome: "Juiana",
    sobrenome: "Crespo",
    idade: "26",
    peso: "58"
}
for(let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}
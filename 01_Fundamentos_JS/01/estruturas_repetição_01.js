function inteiroRelatorio(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

/* 
while(opcao != -1){
    opcao = inteiroRelatorio(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`)
}
*/

do {
    opcao = inteiroRelatorio(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`)
} while(opcao != -1)

console.log(`Até a próxima!`);
console.log(`---------------`);
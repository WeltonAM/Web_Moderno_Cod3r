for (let letra of "Cod3r") {
    console.log(letra);
}

console.log("------'in' acessa chaves-----");
const assuntosEcma = ['Map', 'Set', 'Promise'];
for (let i in assuntosEcma) {
    console.log(i);
}

console.log("------'of' acessa valores-----");
for (let i of assuntosEcma) {
    console.log(i)
}

console.log("-----------");
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

console.log("-----------");
for (let chave of assuntosMap.keys()) {
    console.log(chave);
}

console.log("-----------");
for (let values of assuntosMap.values()) {
    console.log(values);
}

console.log("-----------");
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}

console.log("-----------");
const s = new Set(['a', 'b', 'c']);
for (let letra of s) {
    console.log(letra);
}
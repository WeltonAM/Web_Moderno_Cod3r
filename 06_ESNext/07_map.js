const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework);

console.log("-----------");
const chavesVariadas = new Map([
    [function () { }, 'Function'],
    [{ }, 'Objeto'],
    [123, 'Number']
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
});

console.log("-----Verificar------");
console.log(chavesVariadas.has(123));

console.log("-----Deletar------");
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));

console.log("-----Tamanho------");
console.log(chavesVariadas.size);
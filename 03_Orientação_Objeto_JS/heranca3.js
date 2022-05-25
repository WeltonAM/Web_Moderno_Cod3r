const mae = { nome: 'Juliana', corCabelo: 'Preto' }

const filha1 = Object.create(mae);
filha1.nome = 'Maria Ester';
console.log(filha1, filha1.corCabelo)

const filha2 = Object.create(mae, {
    nome: { value: 'Ana Flor', writable: false, enumerable: true }
})

console.log(filha2.nome);
filha2.nome = 'Karla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
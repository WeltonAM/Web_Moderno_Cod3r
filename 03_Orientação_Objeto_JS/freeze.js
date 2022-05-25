const pessoa = {nome: 'Juliana'}
pessoa.nome = 'Karla'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log("---------------")
console.log(pessoa)
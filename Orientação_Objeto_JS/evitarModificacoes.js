// Prevent
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto)

// seal
const pessoa = { nome: 'Juliana', idade: 26}
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Crespo';
delete pessoa.idade;
pessoa.name = 'Karla';
console.log(pessoa);

// freeze = seal + valores constantes

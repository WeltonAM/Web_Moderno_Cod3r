function criarPessoa(){
    return {
        nome: 'Juliana',
        sobrenome: 'Crespo'
    }
}

console.log(criarPessoa());

console.log("--------------");
function criarProduto(nome, preco){ // com parâmetros
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199.99));
console.log(criarProduto("iPad", 1999.99));
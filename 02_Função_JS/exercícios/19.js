function lanche(pedido, qtd){
    switch(pedido){
        case 100:
            return `${qtd} Cachorro Quente: R$${(3 * qtd).toFixed(2)}`;
        case 200:
            return `${qtd} Hambúrger Simples: R$${(4 * qtd).toFixed(2)}`;
        case 300:
            return `${qtd} Cheeseburguer: R$${(5.5 * qtd).toFixed(2)}`;
        case 400:
            return `${qtd} Bauru: R$${(7.5 * qtd).toFixed(2)}`;
        case 500:
            return `${qtd} Refrigerante: R$${(3.5 * qtd).toFixed(2)}`;
        case 600:
            return `${qtd} Suco: R$${(2.8 * qtd).toFixed(2)}`;
        default:
            return "Produto não existe";
    }
}

console.log(lanche(100, 3));
console.log(lanche(500, 4));
console.log(lanche(700, 2));
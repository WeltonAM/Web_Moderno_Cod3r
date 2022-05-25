const prod1 = {};

prod1.nome = 'Celular';
prod1.preco = 4988.90;
prod1['Desconto'] = 0.40;

console.log(prod1);

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj : {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

console.log(prod2);
{
    var a = 1; // variável de escopo global
    let b = 2; // variável de escopo local

    console.log(b);
}

console.log(a);

// template string
console.log("------------");
const produto = 'iPad';
console.log(`${produto} é caro!`);

// Destructurig
console.log("------------");
const [l, e, ...tras] = "Juliana";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]
console.log(x, y);

const { idade: i, nome } = { nome: 'Juliana', idade: 26};
console.log(i, nome)
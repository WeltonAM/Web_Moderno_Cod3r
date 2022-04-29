console.log(typeof Object);

console.log("---------------------");
class Produto {};
console.log(typeof Produto);

console.log("---------------------");
function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(1, 1);

console.log("---------------------");
function soma(a, b = 1) {
    return a + b;
};

console.log(soma(5));
console.log(soma(5, 2));
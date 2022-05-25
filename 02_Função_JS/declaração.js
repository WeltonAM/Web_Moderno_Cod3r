console.log(soma(3, 4));

// console.log(subtrair(3, 4)); // erro

// console.log(mult(3, 4)); // erro

// function declaration
function soma(x, y){
    return x + y;
}

// function expression
console.log("-----------");
const subtrair = function (x, y){
    return x - y;
}
console.log(subtrair(3, 4)); // onde deve ser chamada

// named function expression
console.log("-----------");
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 4)); // onde deve ser chamada
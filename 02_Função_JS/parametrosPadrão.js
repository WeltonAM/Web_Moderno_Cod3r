function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1());
console.log(soma1(2));
console.log(soma1(2, 3));
console.log(soma1(2, 3, 4));
console.log(soma1(0, 0, 0));
console.log("---------------");

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // versão mais segura
    return a + b + c
}

console.log(soma2());
console.log(soma2(2));
console.log(soma2(2, 3));
console.log(soma2(2, 3, 4));
console.log(soma2(0, 0, 0));

console.log("---------------");
function soma3(a = 1, b = 1, c = 1) { //ES6
    return a + b + c
}

console.log(soma3());
console.log(soma3(2));
console.log(soma3(2, 3));
console.log(soma3(2, 3, 4));
console.log(soma3(0, 0, 0));
function mult(a, b){
    let soma = 0;
    if(a >= 0 && b >= 0){
        for(let i = 0; i < b; i++) {
            soma += a;
        }
    }
    return soma;
}

console.log(mult(5, 5));
console.log(mult(8, 7));
console.log(mult(0, 7));

console.log("-------------------");
function multiplicar(numA, numB){
    if(numA === 0 || numB === 0){
        return 0;
    } else {
        return numB === 1 ? numA : numA + multiplicar(numA, numB-1);
    }
}

console.log(multiplicar(5, 5));